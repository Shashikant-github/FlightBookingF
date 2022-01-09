import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Flight } from 'src/app/models/flight';
import { BookingService } from 'src/app/services/booking.service';
import { FlightService } from 'src/app/services/flight.service';
import { RouteService } from 'src/app/services/route.service';

@Component({
  selector: 'app-display-flight',
  templateUrl: './display-flight.component.html',
  styleUrls: ['./display-flight.component.css'],
})
export class DisplayFlightComponent implements OnInit {
  flights?: Flight[];
  customExMessage?: string;
  airlineItem?:string;

  // get Data():string{
  //   return this.bookService.airlineItem;
  // }
  // set Data(value:string){
  //   return this.bookService.airlineItem=value;
  // }
  // @Output() airlinValue=new EventEmitter<string>(); 

  constructor(
    private flightService: FlightService,
    private routeService: RouteService, private bookService:BookingService
  ) {
    // this.flights=new Array<Flight>();
  }

  ngOnInit(): void {
    this.flightService.getAllFlights().subscribe({
      next: (res) => {
        console.log(`Data from service: ${res}`);
        this.flights = res;
        console.log(res);
      },
      error: (e) => {
        this.customExMessage = e.message;
      }
    });
  }
  BookTicket() {
    this.routeService.goToBooking();
  }
}
