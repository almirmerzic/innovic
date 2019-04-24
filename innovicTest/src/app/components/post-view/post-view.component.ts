import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Router } from "@angular/router";
import { Posts } from "./models/posts";
import { Users } from "./models/users";

const usersEndpoint = 'https://jsonplaceholder.typicode.com/users';

@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.css']
})

export class PostViewComponent implements OnInit {

  users: [];
  comments: [];
  post: {};
  user: {};

  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router) {
  }


  ngOnInit() {
    this.getPostsandUsers();
  }

  // editPost(post: Posts): void {
  //   localStorage.removeItem("editPostId");
  //   localStorage.setItem("editPostId", post.id.toString());
  //   console.log("AJDI POSTA", post.id);
  //   this.router.navigate(['edit-post']);
  // };


  getPostsandUsers = () => {

    this.http.get("http://jsonplaceholder.typicode.com/posts/" + this.route.snapshot.params.id)
      .subscribe((data) => {
        this.post = data as any;
      }
      );

    this.http.get(usersEndpoint)
      .subscribe((data) => {
        this.users = data as any;

        this.users.forEach((p: Users) => {
          if (p.id == this.route.snapshot.params.id) {
            this.user = p as any;
          }
        });
      });

    this.http.get("http://jsonplaceholder.typicode.com/comments?postId=" + this.route.snapshot.params.id)
      .subscribe((data) => {
        this.comments = data as any;
      });
  }
}
