import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisteremployeeComponent } from './registeremployee/registeremployee.component';
import { RegisterEmployeeService } from './register-employee.service';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { RegistermanagerComponent } from './registermanager/registermanager.component';
import { LoginComponent } from './login/login.component';
import { RegisterManagerService } from './register-manager.service';
import { LoginService } from './login.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MaxleavesComponent } from './maxleaves/maxleaves.component';
import { EditComponent } from './edit/edit.component';
import { EmployeewiseleavesComponent } from './employeewiseleaves/employeewiseleaves.component';
import { DatewiseleavesComponent } from './datewiseleaves/datewiseleaves.component';

const routes: Routes = [
  {
    path:"", component:HomeComponent
  },
  {
    path:"registerEmployee", component:RegisteremployeeComponent
  },
  {
    path:"registerManager", component:RegistermanagerComponent
  },
  {
    path:"login", component:LoginComponent
  },
  {
    path:"dashboard", component:DashboardComponent
  },
  {
    path:"logout"  , component: HomeComponent
  },
  {
    path: "maxleaves" , component:MaxleavesComponent
  },
  {
    path:"edit", component:EditComponent
  },
  {
    path:"employeewise" , component:EmployeewiseleavesComponent
  },
  {
    path:"datewise", component:DatewiseleavesComponent
  }

];
@NgModule({
  declarations: [
    AppComponent,
    RegisteremployeeComponent,
    HomeComponent,
    HeaderComponent,
    RegistermanagerComponent,
    LoginComponent,
    DashboardComponent,
    MaxleavesComponent,
    EditComponent,
    EmployeewiseleavesComponent,
    DatewiseleavesComponent,
    // RegistermanagerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [RegisterEmployeeService,RegisterManagerService,LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
