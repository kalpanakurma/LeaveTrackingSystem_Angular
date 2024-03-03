import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  implements OnInit{


  email : String="";
  password : String ="";


  ngOnInit()
  {
         this.login()
  }
  constructor (private http :HttpClient,private router : Router){}
  message ="";
  error :any;
  ans : any;
  f =1;
  login()
  {
    let bodyData = {
      email : this.email,
      password:this.password
    }
      
  

    this.http.post("http://localhost:8081/api/auth/manager/login",bodyData).subscribe((data:any)=>{this.message=data;this.router.navigateByUrl('/dashboard')},
                                                                                     (err)=>{this.f=0;} )
    // // console.log(this.message['message']);
    // if(this.message==undefined && this.f==0)
    // {
    //       this.ans = "UnAuthorized Access";
    // }
    // else
    // {
    //   this.ans = "Login Success";
    // }
    // console.log(this.ans);
    if(this.f==0)
    {
        this.message = "Unauthorized Access"
    }
  }
}
