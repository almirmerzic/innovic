import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MyserviceService } from '../../myservice.service';
import { Users } from "./models/users";
import { FormGroup, FormControl } from '@angular/forms';

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
  title;
  description;
  form;
  userid;

  constructor(private route: ActivatedRoute, private myservice: MyserviceService) {
  }


  ngOnInit() {
    this.getPostsandUsers();
  }

  showEdit = () => {

    this.isEdit = !this.isEdit;
    this.myservice.getPostsService(this.route.snapshot.params.id)
      .subscribe((data) => {
        console.log('ovo je data',data);
        this.form = new FormGroup({
          userid: new FormControl(data.userId),
          id: new FormControl(data.id),
          title: new FormControl(data.title),
          description: new FormControl(data.body)
        });
      }
      );
  }

  editPost = (model) => {
    this.myservice.editPost(model, this.route.snapshot.params.id)
      .subscribe((data) => {
        console.log("PUT Request is successful ", data);
      },
        error => {
          console.log("Rrror", error);
        }
      );
      this.isEdit = false;
  }

  getPostsandUsers = () => {

    this.myservice.getPostsService(this.route.snapshot.params.id)
      .subscribe((data) => {
        this.post = data as any;
      },
        error => {
          console.log("Rrror", error);
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
      },
        error => {
          console.log("Rrror", error);
        }
      );

    this.myservice.getCommentService(this.route.snapshot.params.id)
      .subscribe((data) => {
        this.comments = data as any;
      },
        error => {
          console.log("Rrror", error);
        }
      );
  }
}
