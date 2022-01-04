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
  
  getAllFlights():Observable<Flight[]>{
    return this.httpClient.get<Flight[]>(`https://localhost:5011/v1.0/api/FlightApp/Airline/GetAllAirlines`);
  }
  addFlight(flightObj:Flight):Observable<boolean> {
    return this.httpClient.post<boolean>(`https://localhost:5011/v1.0/api/FlightApp/Airline/AddAirline`,flightObj);
  }
  deleteAirline(airlineName: string):Observable<boolean> {
    return this.httpClient.delete<boolean>(`https://localhost:5011/v1.0/api/FlightApp/Airline/DeleteAirline/`+airlineName);

  }
  // updateAirline(airlineName: string, airline: Flight):Observable<boolean> {
  //   return true;
  //   return this.httpClient.put<boolean>(`https://localhost:5011/v1.0/api/FlightApp/Airline/UpdateAirlineStatus/Go`+airlineName+``+airline);
  // }


  
}
