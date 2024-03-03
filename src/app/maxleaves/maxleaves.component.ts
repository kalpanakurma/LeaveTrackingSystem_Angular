import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-maxleaves',
  templateUrl: './maxleaves.component.html',
  styleUrls: ['./maxleaves.component.css']
})
export class MaxleavesComponent implements OnInit{

  leaves :any;
  constructor(private http: HttpClient,private router:Router){}
  ngOnInit(): void {
   let resp= this.http.get('http://localhost:8081/api/leave/maxleaves');
    resp.subscribe((data)=>{this.leaves=data})
  }
  edit()
  {
    this.router.navigateByUrl('/edit')
  }
}
