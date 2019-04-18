import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.css']
})
export class PostViewComponent implements OnInit {

  constructor(private route: ActivatedRoute, private http: HttpClient) {
  }

  ngOnInit() {
    console.log(this.getPost());
  }

  getPost(){
    this.http.get("https://jsonplaceholder.typicode.com/posts")
  }
}
