import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MyserviceService } from '../../myservice.service';
import { Users } from "./models/users";

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
  isEdit: boolean = false;

  constructor(private route: ActivatedRoute, private myservice: MyserviceService) {
  }


  ngOnInit() {
    this.getPostsandUsers();
  }

  getPostsandUsers = () => {

    this.myservice.getPostsService(this.route.snapshot.params.id)
      .subscribe((data) => {
        this.post = data as any;
      }
      );

    this.myservice.getUsersService()
      .subscribe((data) => {
        this.users = data as any;

        this.users.forEach((p: Users) => {
          if (p.id == this.route.snapshot.params.id) {
            this.user = p as any;
          }
        });
      });

    this.myservice.getCommentService(this.route.snapshot.params.id)
      .subscribe((data) => {
        this.comments = data as any;
      });
  }

  editPost = (event) => {
    this.isEdit = true;
    alert(this.isEdit);
  }
}
