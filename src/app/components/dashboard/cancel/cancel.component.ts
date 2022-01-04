import { Component, OnInit } from '@angular/core';
import { Booking } from 'src/app/models/booking';
import { BookingService } from 'src/app/services/booking.service';

@Component({
  selector: 'app-cancel',
  templateUrl: './cancel.component.html',
  styleUrls: ['./cancel.component.css']
})
export class CancelComponent implements OnInit {

  cancelPNR: string = '';
  book:Booking;
  constructor(private bookService:BookingService) { 
    this.book = new Booking();
  }

  ngOnInit(): void {
  }
  cancelByPNR() {
    
    // this.PNR=this.booking.bookingPNR.toString();
    console.log(this.cancelPNR);
    this.bookService.cancelByPNR(this.cancelPNR).subscribe((res) => {
      console.log(res);
      console.log(res.bookingDate);
      this.book.bookingDate=res.bookingDate;
      if (res != null) {
       // bookPNR=new Booking();
        this.book=res;
        //this.routeService.goToPNR();
      } else {
        alert(`${this.cancelPNR} Not Found.`);
      }
    });
  }


}
