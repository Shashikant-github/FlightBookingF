import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { UserInfo } from 'src/app/models/user-info';
import { RouteService } from 'src/app/services/route.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userInfo: UserInfo;
  constructor(private userService: UserService, private routeService:RouteService) {
    this.userInfo = new UserInfo();
  }

  ngOnInit(): void {
  }
  loginUser(loginForm:NgForm) {
    // console.log(loginForm.value);
    // this.userInfo=loginForm.value;
    this.userInfo.UserIName=loginForm.value.userName;
    this.userInfo.UserIPassword=loginForm.value.password;
    //this.userInfo.UserIPassword = "11";
    console.log(this.userInfo.UserIName);
    console.log(this.userInfo.UserIPassword);
    this.userService.loginUser(this.userInfo).subscribe(res=>{
      console.log(`Token Generated:${res}`);
      let jsonObj=JSON.stringify(res);
    console.log(jsonObj);
      let parsedJsonRes=JSON.parse(jsonObj);
     // console.log(`JSON Token: ${parsedJsonRes['token']}`);
      localStorage.setItem('MyToken',parsedJsonRes['token']);
      localStorage.setItem('userName',parsedJsonRes['username']);
      localStorage.setItem('userRole',parsedJsonRes['userrole']);
      if(localStorage.getItem('userRole')=="Admin"){
        this.routeService.goToDashBoardAdmin();
      }
      else{
        this.routeService.goToDashboard();
      }
    })

  }
}
