import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { RouteService } from 'src/app/services/route.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registeredUser:User;
  constructor(private userService:UserService,private routerService:RouteService) {
    this.registeredUser=new User();
   }

  ngOnInit(): void {
  }
registerUserDetails(regForm:NgForm){
  // console.log(regForm.value);
   this.registeredUser=regForm.value;
  // console.log(`user Log ${this.registeredUser}`);
  this.registeredUser.role="Reader";
  this.userService.registerUser(this.registeredUser).subscribe(res=>{
    console.log(`Response after Registration:${res}`);
    
  })
  alert("Registered Successfully");
regForm.resetForm();
this.routerService.goToLogin();
}
}
