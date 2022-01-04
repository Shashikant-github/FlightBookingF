import { outputAst } from '@angular/compiler';
import { Component, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Booking } from 'src/app/models/booking';
import { BookingService } from 'src/app/services/booking.service';
import { RouteService } from 'src/app/services/route.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  bookingPNR: string = '';

  constructor(private route: RouteService) {}

  ngOnInit(): void {}
  
  detailsByPNR() {
    this.route.goToPNR();
  }
  detailsByEmail(){
      this.route.goToHistory();
  }
  cancelByPNR(){
      this.route.goToCancel();
  }

}
