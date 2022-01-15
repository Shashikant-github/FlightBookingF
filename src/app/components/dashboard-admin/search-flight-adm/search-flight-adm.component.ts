import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Flight } from 'src/app/models/flight';
import { FlightService } from 'src/app/services/flight.service';
import { RouteService } from 'src/app/services/route.service';

@Component({
  selector: 'app-search-flight-adm',
  templateUrl: './search-flight-adm.component.html',
  styleUrls: ['./search-flight-adm.component.css']
})
export class SearchFlightAdmComponent implements OnInit {
  flightRes?:Flight[];
  bookingSource?: string;
  bookingDestination?: string;
  source?:string;
  dest?:string;
  customExMessage?: string;
  noFlight?:string;

  //flights?:Flight[];
  //flights1?:Flight[];
  flightObj:Flight;
  
  public show:boolean = true;
  public buttonName:any = 'Show';

  constructor(private flightService: FlightService,
    private routeService: RouteService,private toastr: ToastrService) {
      this.flightObj=new Flight();
     }

  ngOnInit(): void {
  }
  SearchFlights(searchForm:NgForm){
    this.bookingSource=searchForm.value.bookingSource;
    this.bookingDestination=searchForm.value.bookingDestination;
    this.source=this.bookingSource;
    this.dest=this.bookingDestination;
    console.log(this.bookingSource);
    console.log(this.bookingDestination);
    this.flightService.SearchFlights(this.bookingSource?.toUpperCase(),this.bookingDestination?.toUpperCase()).subscribe((res)=>{
      if(res.length!=0){
        this.noFlight="";
        this.flightRes=res;
        console.log(res);
      }
      else{
        alert(`No Flight Found from ${this.source?.toUpperCase()} to ${this.dest?.toUpperCase()} `);
        this.noFlight=`No Flight Found from ${this.source?.toUpperCase()} to ${this.dest?.toUpperCase()} `;
        console.log(res);
        this.flightRes=undefined;
      }
    });
    searchForm.resetForm();
  }
  
  blockAirline(user:string){
    console.log(this.source);
    console.log(this.dest);
    console.log(user);

    this.flightService.blockAirline(user,this.flightObj ).subscribe((res)=>{
      console.log(res);
        if(res){
        alert("Airline Blocked");
        this.toastr.warning("Airline Blocked");
        this.flightService.SearchFlights(this.source?.toUpperCase(),this.dest?.toUpperCase()).subscribe((res)=>{
          
            this.flightRes=res;
            
        });
      }
      else{
        alert("Airline Unblocked");
        this.toastr.success("Airline Unblocked");
        this.flightService.SearchFlights(this.source?.toUpperCase(),this.dest?.toUpperCase()).subscribe((res)=>{
          
          this.flightRes=res;
      });
    }
    });
  }

}