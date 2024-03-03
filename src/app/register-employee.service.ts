import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterEmployeeService {

  constructor(private http:HttpClient) { }

  public registerEmployee(user: any)
  {
    return this.http.post("http://localhost:8081/api/auth/register/employee",user,)
  }

  fetchDataFromAPI() {
    return this.http.get<any[]>('http://localhost:8081/api/auth/role/managers')
    };
  }