import { Component, OnInit } from '@angular/core';
import { Flight } from 'src/app/models/flight';
import { FlightService } from 'src/app/services/flight.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-display-flights-a',
  templateUrl: './display-flights-a.component.html',
  styleUrls: ['./display-flights-a.component.css']
})
export class DisplayFlightsAComponent implements OnInit {

  flights?:Flight[];
  flights1?:Flight[];
  flightObj:Flight;
  customExMessage:string="";
  public show:boolean = true;
  public buttonName:any = 'Show';
 
  //buttonName?:string="Submit";
  constructor(private flightService: FlightService, private toastr: ToastrService) {
   this.flightObj=new Flight();
   //this.buttonName="";
   }

  ngOnInit(): void {
    
    this.flightService.getAllFlightsA().subscribe({
      next: (res) => {
        console.log(`Data from service: ${res}`);
        
        // this.flights1 = res;
        // this.flights1.forEach((flight)=>{
        //  if(flight.status=="Active"){
        //   flight.status="Block";

        //  }
          

        //   this.buttonName="Block";
        //   else
        //   this.buttonName="Unblock";
        // });  
        this.flights = res;    
        console.log(res);
      },
      error: (e) => {
        this.customExMessage = e.message;
      },
    });
  }
  blockAirline(user:string){
    console.log(user);

    this.flightService.blockAirline(user,this.flightObj ).subscribe(res=>{
      console.log(res);
        if(res){
        alert("Airline Blocked");
        this.toastr.warning("Airline Blocked");
        this.ngOnInit();
      }
      else{
        alert("Airline Unblocked");
        this.toastr.success("Airline Unblocked");
        this.ngOnInit();
      }
    });
  }
  // toggle() {
  //   this.show = !this.show;

  //   // CHANGE THE NAME OF THE BUTTON.
  //   if(this.show)  
  //     this.buttonName = "Hide";
  //   else
  //     this.buttonName = "Show";
  // }

}
