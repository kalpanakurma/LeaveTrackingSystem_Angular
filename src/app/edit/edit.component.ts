import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit{



  inp1:any;
  inp2:any;
  inp3:any;
  message:any;
private baseUrl:any;
  leaves :any;
  constructor(private http: HttpClient,private router:Router){}
  ngOnInit(): void {
    let resp= this.http.get('http://localhost:8081/api/leave/maxleaves');
    resp.subscribe((data)=>{this.leaves=data})
  }
  save()
  {

     this.baseUrl = 'http://localhost:8081/api/leave/set';
    // http://localhost:8081/api/leave/set/1?newMaxLeaves=2
    let url = `${this.baseUrl}/${1}?newMaxLeaves=${this.inp1}`;
    let response= this.http.put(url,{});
    response.subscribe((data)=>{this.message=data;})
    console.log(this.message);
    url = `${this.baseUrl}/${2}?newMaxLeaves=${this.inp2}`;
    response= this.http.put(url,{});
    response.subscribe((data)=>{this.message=data;})
    url = `${this.baseUrl}/${3}?newMaxLeaves=${this.inp3}`;
    response= this.http.put(url,{});
    response.subscribe((data)=>{this.message=data;})
    this.router.navigateByUrl("/maxleaves")
  }
}
