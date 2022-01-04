import { Component, OnInit } from '@angular/core';
import { Booking } from 'src/app/models/booking';
import { BookingService } from 'src/app/services/booking.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  bookingEmail: string = '';
  book?:Booking[];
  constructor(private bookService:BookingService) {
    //this.book = new Booking[]();
   }

  ngOnInit(): void {
  }
  historyByEmail() {
    
    // this.PNR=this.booking.bookingPNR.toString();
    console.log(this.bookingEmail);
    this.bookService.historyByEmail(this.bookingEmail).subscribe((res) => {
      console.log(res);
      
      if (res != null) {
       // bookPNR=new Booking();
        this.book=res;
        //this.routeService.goToPNR();
      } else {
        alert(`${this.bookingEmail} Not Found.`);
      }
    });
  }


}
