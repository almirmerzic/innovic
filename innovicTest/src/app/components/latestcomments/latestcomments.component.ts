import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MyserviceService } from '../../myservice.service';

@Component({
  selector: 'app-latestcomments',
  templateUrl: './latestcomments.component.html',
  styleUrls: ['./latestcomments.component.css']
})
export class LatestcommentsComponent implements OnInit {

  constructor(private http: HttpClient, private myservice: MyserviceService) { }
  httpdata;

  ngOnInit() {
    this.myservice.getAllCommentsService()
      .subscribe((data) => this.displaydata(data));
  }
  displaydata(data) { this.httpdata = data; }
}
