import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Flight } from 'src/app/models/flight';
import { FlightService } from 'src/app/services/flight.service';

@Component({
  selector: 'app-update-airline',
  templateUrl: './update-airline.component.html',
  styleUrls: ['./update-airline.component.css']
})
export class UpdateAirlineComponent implements OnInit {
airlineName:string="";
airline:Flight;
  constructor(private flightService:FlightService) {
    this.airline=new Flight();
   }

  ngOnInit(): void {
  }
  updateAirline(updateForm:NgForm){
    // this.airline=updateForm.value;
    // console.log(updateForm.value);
    // console.log(this.airline);
    // this.flightService.updateAirline(this.airlineName, this.airline).subscribe(res=>{
    //   alert(`${res},${this.airlineName} Status Updated `);
    //})

  }
}
