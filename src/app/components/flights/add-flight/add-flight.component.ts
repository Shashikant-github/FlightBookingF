import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Flight } from 'src/app/models/flight';
import { FlightService } from 'src/app/services/flight.service';
import { RouteService } from 'src/app/services/route.service';
import { DisplayFlightComponent } from '../display-flight/display-flight.component';

@Component({
  selector: 'app-add-flight',
  templateUrl: './add-flight.component.html',
  styleUrls: ['./add-flight.component.css'],
})
export class AddFlightComponent implements OnInit {
  flightObj: Flight;
  flights?: Array<Flight>;
  customExMessage?: string;
  constructor(
    private flightService: FlightService,
    private toaster: ToastrService
  ) {
    this.flightObj = new Flight();
  }
  ngOnInit(): void {
    this.flightService.getAllFlightsA().subscribe({
      next: (res) => {
        console.log(`Data from service: ${res}`);
        this.flights = res;
        console.log(res);
      },
      error: (e) => {
        this.customExMessage = e.message;
      },
    });
  }
  addFlight() {
    console.log(`Added Flight Name :${this.flightObj.airlineName}`);
    this.flightObj.delete = false;
    this.flightObj.status = 'Active';
    console.log(this.flightObj.category);
    console.log(this.flightObj.status);
    this.flightService.addFlight(this.flightObj).subscribe((res) => {
      this.toaster.success('Flight Added');
      alert(`Flight Added Name: ${this.flightObj.airlineName}, Category: ${this.flightObj.category}, Price:${this.flightObj.ticketPrice }`);
      this.ngOnInit();
    });
  }
}
