import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Booking } from '../models/booking';

@Injectable({
  providedIn: 'root',
})

export class BookingService {
  
  booking?:Booking;
  constructor(private httpClient: HttpClient) {
    this.booking=new Booking();
  }

  bookFlight(bookObj: Booking): Observable<Booking> {
    return this.httpClient.post<Booking>(
      `https://localhost:5021/v1.0/api/FlightApp/Booking/BookTicket
    `,
      bookObj
    );
  }
  searchByPNR(PNR?:string): Observable<Booking> {
    return this.httpClient.get<Booking>(
      `https://localhost:5021/v1.0/api/FlightApp/Booking/GetBookingDetailsByPNR/`+ PNR);
     
  }
  historyByEmail(bookingEmail: string):Observable<Booking[]> {
    return this.httpClient.get<Booking[]>(`https://localhost:5021/v1.0/api/FlightApp/Booking/History/GetBookingDetailsByEmail/` + bookingEmail);
    
  }
  cancelByPNR(bookingPNR: string):Observable<Booking> {
    return this.httpClient.delete<Booking>(`https://localhost:5021/v1.0/api/FlightApp/Booking/CancelBookingByPNR/`+bookingPNR);
   
  }
}
