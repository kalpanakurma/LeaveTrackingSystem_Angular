import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-employeewiseleaves',
  templateUrl: './employeewiseleaves.component.html',
  styleUrls: ['./employeewiseleaves.component.css']
})
export class EmployeewiseleavesComponent {



  leaves :any;
  constructor(private http: HttpClient){}
  ngOnInit(): void {
   let resp= this.http.get('http://localhost:8081/api/leave/leaveSummary');
    resp.subscribe((data)=>{this.leaves=data;console.log(data)})
  }
}
