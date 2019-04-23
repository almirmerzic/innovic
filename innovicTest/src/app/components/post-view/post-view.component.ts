import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Posts } from "./models/posts";
import { Users } from "./models/users";

const postsEndpoint = 'https://jsonplaceholder.typicode.com/posts';
const usersEndpoint = 'https://jsonplaceholder.typicode.com/users';

@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.css']
})

export class PostViewComponent implements OnInit {

  posts: [];
  users: [];
  comments: [];
  post : {};
  user : {};

  constructor(private route: ActivatedRoute, private http: HttpClient) {
  }


  ngOnInit() {
    this.getPostsandUsers();
  }

  getPostsandUsers = () => {

    this.http.get(postsEndpoint)
    .subscribe((data) => {
      this.posts = data as any;

      this.posts.forEach((p: Posts) => {
        if (p.id == this.route.snapshot.params.id) {
          this.post = p as any;
        }
      });
    });

    this.http.get(usersEndpoint)
    .subscribe((data) =>  {
      this.users = data as any;

      this.users.forEach((p: Users) => {
        if (p.id == this.route.snapshot.params.id) {
          this.user = p as any;
        }
      });
    });

    this.http.get("http://jsonplaceholder.typicode.com/comments?postId="+this.route.snapshot.params.id)
    .subscribe((data) => {
      this.comments = data as any;
    });
  }
}
