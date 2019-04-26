import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../../myservice.service';

@Component({
  selector: 'app-postlist',
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.css']
})
export class PostlistComponent implements OnInit {

  constructor(private myservice: MyserviceService) { }
  httpdata;

  ngOnInit() {

    this.myservice.getAllPostsService()
      .subscribe((data) => { this.displaydata(data) }, error => {
        console.log("Rrror", error);
      }
      );
  }
  displaydata(data) { this.httpdata = data; }

  myClickFunction(event) {
    alert("Button is clicked");
    console.log(event.target.id);
  }

}
