import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-postlist',
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.css']
})
export class PostlistComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get("https://jsonplaceholder.typicode.com/posts")
    .subscribe((data) => console.log(data));
  }
  
}
