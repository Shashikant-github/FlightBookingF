import { Component, OnInit } from '@angular/core';
import { Flight } from 'src/app/models/flight';
import { FlightService } from 'src/app/services/flight.service';

@Component({
  selector: 'app-display-flights-a',
  templateUrl: './display-flights-a.component.html',
  styleUrls: ['./display-flights-a.component.css']
})
export class DisplayFlightsAComponent implements OnInit {

  flights?:Flight[];
  flights1?:Flight[];
  flightObj:Flight;
  customExMessage:string="";
 
  buttonName?:string="Submit";
  constructor(private flightService: FlightService) {
   this.flightObj=new Flight();
   //this.buttonName="";
   }

  ngOnInit(): void {
    
    this.flightService.getAllFlightsA().subscribe({
      next: (res) => {
        console.log(`Data from service: ${res}`);
        
        // this.flights1 = res;
        // this.flights1.forEach((flight)=>{
        //   if(flight.status=="Active")
        //   this.buttonName="Block";
        //   else
        //   this.buttonName="Unblock";
        // });  
        this.flights = res;    
        console.log(res);
      },
      error: (e) => {
        this.customExMessage = e.message;
      },
    });
  }
  blockAirline(user:string){
    console.log(user);

    this.flightService.blockAirline(user,this.flightObj ).subscribe(res=>{
      console.log(res);
        if(res){
        alert("Airline Blocked");
        this.ngOnInit();
      }
      else{
        alert("Airline Unblocked");
        this.ngOnInit();
      }
    });
  }

}
