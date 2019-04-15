import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-latestcomments',
  templateUrl: './latestcomments.component.html',
  styleUrls: ['./latestcomments.component.css']
})
export class LatestcommentsComponent implements OnInit {

  constructor(private http: HttpClient) { }
  httpdata;

  ngOnInit() {
    this.http.get("https://jsonplaceholder.typicode.com/comments")
      .subscribe((data) => this.displaydata(data));
  }
  displaydata(data) { this.httpdata = data; }
}
