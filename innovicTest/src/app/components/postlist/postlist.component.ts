import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-postlist',
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.css']
})
export class PostlistComponent implements OnInit {

  constructor(private http: HttpClient) { }
  httpdata;

  ngOnInit() {

    this.http.get("https://jsonplaceholder.typicode.com/posts")
      .subscribe((data) => this.displaydata(data));
  }
  displaydata(data) { this.httpdata = data; }

  myClickFunction(event) {
    alert("Button is clicked");
    console.log(event);
 }

}
