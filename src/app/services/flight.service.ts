import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Flight } from '../models/flight';

@Injectable({
  providedIn: 'root'
})
export class FlightService {
  
  airline_url=environment.airline_api_url;
  constructor(private httpClient:HttpClient) {
  //  this.flight_URL=
   }
  
  getAllFlights():Observable<Flight[]>{
    //return this.httpClient.get<Flight[]>(`https://localhost:5011/v1.0/api/FlightApp/Airline/GetAllAirlines`);
    return this.httpClient.get<Flight[]>(this.airline_url+`GetAllAirlines`);
  }
  addFlight(flightObj:Flight):Observable<boolean> {
    return this.httpClient.post<boolean>(this.airline_url+'AddAirline',flightObj);
  }
  deleteAirline(airlineName: string):Observable<boolean> {
    return this.httpClient.delete<boolean>(this.airline_url+'DeleteAirline/'+airlineName);
  }

  blockAirline(airlineNam: string, flightObj:Flight):Observable<boolean>{ 
    return this.httpClient.put<boolean>(this.airline_url+`BlockAirline/`+airlineNam, flightObj);
  }
  getAllFlightsA():Observable<Flight[]> {
    return this.httpClient.get<Flight[]>(this.airline_url+"GetAllAirlinesAdmin");
  }
  SearchFlights(source: any, destination: any):Observable<Flight[]> {
    return this.httpClient.get<Flight[]>(this.airline_url+`GetAirlinesBySearch/`+ source +'/'+ destination);  
  }
}
