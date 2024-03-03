import { Component } from '@angular/core';
import { Employee } from '../employee';
import { RegisterEmployeeService } from '../register-employee.service';

@Component({
  selector: 'app-registeremployee',
  templateUrl: './registeremployee.component.html',
  styleUrls: ['./registeremployee.component.css']
})
export class RegisteremployeeComponent {

  user : Employee = new Employee("","","","","","",0);
  message : any;
  error:any;
  constructor(private service:RegisterEmployeeService){};
  public registerNow()
  {
   let response =  this.service.registerEmployee(this.user);
   response.subscribe((data)=>{this.message=data},
               (err)=>{this.error=err.error.message})
  }
  options: any[] = []; // Variable to store dropdown options
  selectedOption: any; // Variable to store selected option

  ngOnInit(): void {
    this.getManagerId();
  }

  getManagerId() {
   let resp=this.service.fetchDataFromAPI();
   resp.subscribe((data)=>this.options=data)
  }

  onChange(event: any) {
    this.selectedOption = event.target.value; // Capture selected option
  }
}
