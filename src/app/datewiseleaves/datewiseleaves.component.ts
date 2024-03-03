import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datewiseleaves',
  templateUrl: './datewiseleaves.component.html',
  styleUrls: ['./datewiseleaves.component.css']
})
export class DatewiseleavesComponent implements OnInit {
  date1:any;
    date2:any;
    baseUrl:any;
    url:any;
    leaves:any
    constructor(private http:HttpClient){}
  ngOnInit(): void {
    
  }
  get()
  {
    this.baseUrl = "http://localhost:8081/api/auth/leaves/filtered";
    this.url=`${this.baseUrl}?fromDate=${this.date1}&toDate=${this.date2}`;
    let response = this.http.get(this.url);
    response.subscribe((data)=>{this.leaves=data; console.log(data)});
  }
    
}
