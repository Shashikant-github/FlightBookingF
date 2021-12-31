import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Flight } from '../models/flight';

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  constructor(private httpClient:HttpClient) { }
  
  getAllFlights():Observable<Array<Flight>>{
    return this.httpClient.get<Array<Flight>>('http://localhost:3000/flights');
  }

  
}
