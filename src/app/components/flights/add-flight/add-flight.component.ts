import { Component, OnInit } from '@angular/core';
import { Flight } from 'src/app/models/flight';
import { FlightService } from 'src/app/services/flight.service';

@Component({
  selector: 'app-add-flight',
  templateUrl: './add-flight.component.html',
  styleUrls: ['./add-flight.component.css']
})
export class AddFlightComponent implements OnInit {

  flightObj:Flight;
  flights?:Array<Flight>;

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
      alert("Flight Added");
    })
    
    

}
}
