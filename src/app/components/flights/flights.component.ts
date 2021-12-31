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

  constructor(private flightService:FlightService) { }

  ngOnInit(): void {
    this.flightService.getAllFlights().subscribe(res=>{
      console.log(`Data from service: ${res}`);
       this.flights=res;
     console.log(res);
     })
  }

}
