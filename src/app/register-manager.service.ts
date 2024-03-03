import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RegisterManagerService {

  constructor(private http:HttpClient) { }

  public registerManager(user: any)
  {
    return this.http.post("http://localhost:8081/api/auth/register/manager",user,)
  }
  }