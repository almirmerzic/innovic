import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {

  post:[];
  constructor(private router: Router, private http: HttpClient) { }


  ngOnInit() {
    this.http.get("http://jsonplaceholder.typicode.com/posts/" + 1)
    .subscribe((data) => {
      console.log(data);
    });
  }

}
