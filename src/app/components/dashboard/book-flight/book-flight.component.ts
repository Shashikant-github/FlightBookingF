import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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
param1:string="Airway"
param2:string="Airway";

book:Booking;
 isShown: boolean = false ;
 isShownForm:boolean=true;

// @Input() airlineItem;
  constructor(private bookService:BookingService, private route:ActivatedRoute, private routeService:RouteService, private flightService:FlightService,private toaster:ToastrService) {
    this.bookTicket=new Booking();
    this.route.queryParams.subscribe(params=>{
      this.param1=params['airline'];
      this.param2=params['code'];
    })
    this.book=new Booking();
   }
  ngOnInit(): void {
  }
  bookingDetails(bookForm:NgForm){
    this.bookTicket=bookForm.value;
    this.bookTicket.airline=this.param1;
    this.bookTicket.airlineCode=this.param2;
    // console.log(this.bookTicket.airline);
    // console.log(this.bookTicket.airlineCode);
    // console.log(this.bookTicket.bookingPassengerName);
    // this.airlineItem=this.flightService.passValue();
    //this.bookTicket.dateOfJourney=this.bookTicket.dateOfJourney?.toTimeString();
    this.bookService.bookFlight(this.bookTicket).subscribe(res=>{
      console.log(`Response after Booking:${res.bookingPNR}`);
      this.PNR=res.bookingPNR;
      this.isShownForm=false;
      alert("Ticket booked Successfully");
      this.toaster.success('Logged in Successfully!');
      this.bookService.searchByPNR(this.PNR).subscribe(res=>{
        if (res != null) {
          // bookPNR=new Booking();
           this.book=res;
           this.isShown = true;
           //this.routeService.goToPNR();
         } else {
           this.isShown = false;
           //this.book=res;
           alert(`PNR=${this.PNR} Not Found.`);
         }
      })
    })
    bookForm.resetForm();
  }


}
