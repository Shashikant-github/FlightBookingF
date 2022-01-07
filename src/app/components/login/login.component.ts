import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UserInfo } from 'src/app/models/user-info';

import { RouteService } from 'src/app/services/route.service';

import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  //public isLoggedIn$: BehaviorSubject<boolean>;
  userInfo: UserInfo;
  public token: any;

  Invalid?: string = '';
  constructor(
    private userService: UserService,
    private toaster: ToastrService,
    private routeService: RouteService,
    
  ) {
    this.userInfo = new UserInfo();

  
    //   this.loginFormV  =  this.formBuilder.group({
    //     email: ['', Validators.required],
    //     password: ['', Validators.required]
    // });
    
  }
  ngOnInit(): void {
  
    //this.formGroup.reset({title: 'new value'});
    // this.loginFormV.reset({email:'new value', password:'new value'});
   
      
  }
  // get formControls() {
  //   return this.loginFormV.controls;
  //   }

  loginUser(loginForm:NgForm) {

    // console.log(this.loginFormV.value);
    // this.isSubmitted = true;
    // if(this.loginFormV.invalid){
    //   return;
    // }
    // console.log(loginForm.value);
    // this.userInfo=loginForm.value;
    this.userInfo.UserIName = loginForm.value.userName;
    this.userInfo.UserIPassword = loginForm.value.password;
   
    //this.userInfo.UserIPassword = "11";
    console.log(this.userInfo.UserIName);
    console.log(this.userInfo.UserIPassword);

    this.userService.loginUser(this.userInfo).subscribe((res) => {
      console.log(`Token Generated:${res}`);

      if (res != null) {
        this.token = res;
        console.log(` token ${this.token}`);
        const res1 = this.userService.authUser(this.token);
        console.log(`Token=${res1}`);
        if (localStorage.getItem('userRole') == 'Admin') {
          this.routeService.goToDashBoardAdmin();
          this.toaster.success('User Logged in Successfully!');
        } else {
          this.routeService.goToDashboard();
          this.toaster.success('User Logged in Successfully!');
        }
      } else {
        this.toaster.error('Invalid Credentials! Please Try again');
        this.Invalid = 'Invalid Credentials! Please Try again';
      } 
    });
    loginForm.resetForm();
  }
  register(){
    this.routeService.goToRegister();
  }
}
