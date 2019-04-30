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

  postUserId;
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
    this.getPosts();
    this.getUser();
    this.getComments();
  }

  showEdit = () => {

    this.isEdit = !this.isEdit;
    this.myservice.getPostsService(this.route.snapshot.params.id)
      .subscribe((data) => {
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
          console.log("Error", error);
        }
      );
    this.isEdit = false;
  }

  getPosts = () => {
    this.myservice.getPostsService(this.route.snapshot.params.id)
      .subscribe((data) => {
        this.post = data as any
      },
        error => {
          console.log("Error", error);
        }
      );
  }

  getUser = () => {

    this.myservice.getPostUserService(this.route.snapshot.params.id)
      .subscribe((data) => {

        this.postUserId = data.userId;

        this.myservice.getUsersService()
          .subscribe((data) => {
            data.map((user) => {
              if (user.id == this.postUserId) {
                this.user = user as any;
              }
              return this.user;
            });
          },
            error => {
              console.log("Error", error);
            }
          );
      },
        error => {
          console.log("Error", error);
        }
      );

  }

  getComments = () => {
    this.myservice.getCommentService(this.route.snapshot.params.id)
      .subscribe((data) => {
        this.comments = data as any;
      },
        error => {
          console.log("Error", error);
        }
      );
  }
}
