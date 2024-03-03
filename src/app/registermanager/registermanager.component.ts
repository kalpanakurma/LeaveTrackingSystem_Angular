import { Component } from '@angular/core';
import { Manager } from '../manager';
import { RegisterManagerService } from '../register-manager.service';

@Component({
  selector: 'app-registermanager',
  templateUrl: './registermanager.component.html',
  styleUrls: ['./registermanager.component.css']
})
export class RegistermanagerComponent {
  user : Manager = new Manager("","","","","","");
  message : any;
  error:any;
  constructor(private service:RegisterManagerService){};
  public registerNow()
  {
   let response =  this.service.registerManager(this.user);
   response.subscribe((data)=>{this.message=data},
               (err)=>{this.error=err.error.message})
  }
}
