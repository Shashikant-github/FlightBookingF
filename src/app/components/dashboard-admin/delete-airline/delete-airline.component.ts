import { Component, OnInit } from '@angular/core';
import { FlightService } from 'src/app/services/flight.service';

@Component({
  selector: 'app-delete-airline',
  templateUrl: './delete-airline.component.html',
  styleUrls: ['./delete-airline.component.css']
})
export class DeleteAirlineComponent implements OnInit {
airlineName:string="";
  constructor(private flightService:FlightService) { }

  ngOnInit(): void {
  }
  DeleteAirline(){
    this.flightService.deleteAirline(this.airlineName).subscribe(res=>{
      alert(`${this.airlineName} has bee deleted`);
    })
  }

}
