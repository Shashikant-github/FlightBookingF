import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Booking } from 'src/app/models/booking';
import { BookingService } from 'src/app/services/booking.service';
import { FlightService } from 'src/app/services/flight.service';
import { RouteService } from 'src/app/services/route.service';

@Component({
  selector: 'app-book-flight',
  templateUrl: './book-flight.component.html',
  styleUrls: ['./book-flight.component.css']
})
export class BookFlightComponent implements OnInit {
bookTicket:Booking;
PNR?:string;
airlineItem?:string;
// @Input() airlineItem;
  constructor(private bookService:BookingService, private routeService:RouteService, private flightService:FlightService) {
    this.bookTicket=new Booking();
   }

  ngOnInit(): void {
  }
  bookingDetails(bookForm:NgForm){
    this.bookTicket=bookForm.value;
    console.log(this.bookTicket.bookingPassengerName);

    // this.airlineItem=this.flightService.passValue();
    //this.bookTicket.dateOfJourney=this.bookTicket.dateOfJourney?.toTimeString();
    this.bookService.bookFlight(this.bookTicket).subscribe(res=>{
      console.log(`Response after Booking:${res.bookingPNR}`);
      this.PNR=res.bookingPNR;
      alert(`Your PNR is ${this.PNR}`);
    })
    bookForm.resetForm();
  }


}
