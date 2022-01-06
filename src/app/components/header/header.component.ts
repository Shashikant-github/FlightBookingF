import { Component, OnInit } from '@angular/core';
import { RouteService } from 'src/app/services/route.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public authService:UserService, private route:RouteService) { }

  ngOnInit(): void {
    
  }
  login(){
this.route.goToLogin();
  }
  logout(){
    this.route.goToLogout();
  }

      
  

}
