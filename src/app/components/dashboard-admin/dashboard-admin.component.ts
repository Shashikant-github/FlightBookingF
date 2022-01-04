import { Component, OnInit } from '@angular/core';
import { FlightService } from 'src/app/services/flight.service';
import { RouteService } from 'src/app/services/route.service';

@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.css']
})
export class DashboardAdminComponent implements OnInit {

  constructor(private routeService:RouteService) { }

  ngOnInit(): void {
  }
  addAirline(){
    this.routeService.goToAddA();
  }
  updateAirline(){
    this.routeService.goToUpdateA();
  }
  deleteAirline(){
    this.routeService.goToDeleteA();
  }
  addBulkAirline(){
    this.routeService.goToAddBulkA();
  }
}
