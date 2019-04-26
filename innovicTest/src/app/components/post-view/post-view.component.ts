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
  formdata;

  constructor(private route: ActivatedRoute, private myservice: MyserviceService) {
  }


  ngOnInit() {
    this.getPostsandUsers();
  }

  showEdit = () => {

    this.isEdit = !this.isEdit;
    this.myservice.getPostsService(this.route.snapshot.params.id)
      .subscribe((data) => {
        this.formdata = new FormGroup({
          title: new FormControl(data.title),
          description: new FormControl(data.body)
        });

      }
      );

  }

  editPost = (data) => {
    this.title = data.title;
    alert(this.title);
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
}
