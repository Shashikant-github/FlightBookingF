import { Component, OnInit } from '@angular/core';
import { Flight } from 'src/app/models/flight';
import { FlightService } from 'src/app/services/flight.service';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css']
})
export class FlightsComponent implements OnInit {

  flights?:Array<Flight>;
  flightObj:Flight;

  constructor(private flightService:FlightService) {
    this.flightObj=new Flight();
   }

  ngOnInit(): void {
    this.flightService.getAllFlights().subscribe(res=>{
      console.log(`Data from service: ${res}`);
       this.flights=res;
     console.log(res);
     })
  }
  addFlight(){
      console.log(`Added Flight Name : ${this.flightObj?.name}`);
      this.flightService.addFlight(this.flightObj).subscribe(res=>{
        this.flights?.push(this.flightObj);
        console.log("Flight Added");
      })
      
      

  }

}
