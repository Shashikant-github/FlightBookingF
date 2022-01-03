import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouteService {

  constructor(private route:Router) { }
  goToDashboard(){
this.route.navigate(['dashboard']);
  }
  goToLogin(){
    this.route.navigate(['login']);

  }
  goToRegister(){
    this.route.navigate(['register']);

  }
}
