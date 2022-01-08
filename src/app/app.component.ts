import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouteService } from './services/route.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //isShown=true;
  title = 'FlightBooking';
  constructor(private routerService:RouteService){}
  ngOnInit(){
     this.routerService.goToHome();
    //  if(localStorage.getItem('userName')!=null){
    //   console.log(localStorage.getItem('userName'));
    //   this.isShown=false;
    // }
    // else{
    //   this.isShown=true;
    // }
  }
}
