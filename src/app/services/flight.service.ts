import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Flight } from '../models/flight';

@Injectable({
  providedIn: 'root'
})
export class FlightService {
 
  //  flight_URL?:string="http://localhost:3000/flights";
  constructor(private httpClient:HttpClient) {
  //  this.flight_URL=
   }
  
  getAllFlights():Observable<Array<Flight>>{
    return this.httpClient.get<Array<Flight>>(`http://localhost:3000/flights`);
  }
  addFlight(flightObj:Flight):Observable<Flight> {
    return this.httpClient.post(`http://localhost:3000/flights`,flightObj);
  }


  
}
