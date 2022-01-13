import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Flight } from 'src/app/models/flight';
import { FlightService } from 'src/app/services/flight.service';
import { RouteService } from 'src/app/services/route.service';

@Component({
  selector: 'app-search-flight',
  templateUrl: './search-flight.component.html',
  styleUrls: ['./search-flight.component.css']
})
export class SearchFlightComponent implements OnInit {
  flightRes?:Flight[];
  bookingSource?: string;
  bookingDestination?: string;
  source?:string;
  dest?:string;
  customExMessage?: string;
  noFlight?:string;
  constructor(private flightService: FlightService,
    private routeService: RouteService) { }

  ngOnInit(): void {
  }
  SearchFlights(searchForm:NgForm){
    this.bookingSource=searchForm.value.bookingSource;
    this.bookingDestination=searchForm.value.bookingDestination;
    this.source=this.bookingSource;
    this.dest=this.bookingDestination;
    console.log(this.bookingSource);
    console.log(this.bookingDestination);
    this.flightService.SearchFlights(this.bookingSource?.toUpperCase(),this.bookingDestination?.toUpperCase()).subscribe((res)=>{
      if(res.length!=0){
        this.flightRes=res;
        this.noFlight="";
        console.log(res);
      }
      else{
        alert(`No Flight Found from ${this.source?.toUpperCase()} to ${this.dest?.toUpperCase()} `);
        this.noFlight=`No Flight Found from ${this.source?.toUpperCase()} to ${this.dest?.toUpperCase()} `;
        console.log(res);
      }
    });
    searchForm.resetForm();
  }
  
  loginBook(){
    //alert("Please login to proceed further for Booking");
    this.routeService.goToLogin();
    // this.routeService.goToLogin();
  }
}
