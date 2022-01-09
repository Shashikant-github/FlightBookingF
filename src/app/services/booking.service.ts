import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Booking } from '../models/booking';

@Injectable({
  providedIn: 'root',
})
export class BookingService {
  booking?: Booking;
  booking_url=environment.booking_api_url;
  airlineItem?:string;
  
  constructor(private httpClient: HttpClient) {
    this.booking = new Booking();
  }

  bookFlight(bookObj: Booking): Observable<Booking> {
    // return this.httpClient.post<Booking>(
    //   `https://localhost:5021/v1.0/api/FlightApp/Booking/BookTicket
    // `,
    //   bookObj
    // );

    return this.httpClient.post<Booking>(
         this.booking_url+`BookTicket
       `,
         bookObj
      );

  }
  searchByPNR(PNR?: string): Observable<Booking> {
    return this.httpClient.get<Booking>(
      this.booking_url+`GetBookingDetailsByPNR/` +
        PNR
    );
  }
  historyByEmail(bookingEmail: string): Observable<Booking[]> {
    return this.httpClient.get<Booking[]>(
      this.booking_url+`History/GetBookingDetailsByEmail/` +
        bookingEmail
    );
  }
  cancelByPNR(bookingPNR: string): Observable<Booking> {
    return this.httpClient.delete<Booking>(
      this.booking_url+`CancelBookingByPNR/` +
        bookingPNR
    );
  }
  allBooking(): Observable<Booking[]> {
    return this.httpClient.get<Booking[]>(
      this.booking_url+`GetAllBookings`
    );
  }
}
