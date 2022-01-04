import { Component, Input, OnInit } from '@angular/core';
import { Booking } from 'src/app/models/booking';
import { BookingService } from 'src/app/services/booking.service';
import { RouteService } from 'src/app/services/route.service';

@Component({
  selector: 'app-pnr-details',
  templateUrl: './pnr-details.component.html',
  styleUrls: ['./pnr-details.component.css']
})
export class PnrDetailsComponent implements OnInit {

  bookingPNR: string = '';
 book:Booking;
  constructor(
    private bookService: BookingService,
    private routeService: RouteService
  ) {
    this.book = new Booking();
  }

  ngOnInit(): void {}

  searchByPNR() {
    
    // this.PNR=this.booking.bookingPNR.toString();
    console.log(this.bookingPNR);
    this.bookService.searchByPNR(this.bookingPNR).subscribe((res) => {
      console.log(res);
      console.log(res.bookingDate);
      this.book.bookingDate=res.bookingDate;
      if (res != null) {
       // bookPNR=new Booking();
        this.book=res;
        //this.routeService.goToPNR();
      } else {
        alert(`${this.bookingPNR} Not Found.`);
      }
    });
  }

}


