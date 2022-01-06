import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from 'src/app/components/login/login.component';
import { RegisterComponent } from 'src/app/components/register/register.component';
import { DashboardComponent } from 'src/app/components/dashboard/dashboard.component';

import { BookFlightComponent } from 'src/app/components/dashboard/book-flight/book-flight.component';
import { DisplayFlightComponent } from 'src/app/components/flights/display-flight/display-flight.component';
import { AddFlightComponent } from 'src/app/components/flights/add-flight/add-flight.component';
import { LogoutComponent } from 'src/app/components/logout/logout.component';
import { AuthGuard } from 'src/app/guard/auth.guard';
import { PnrDetailsComponent } from 'src/app/components/dashboard/pnr-details/pnr-details.component';
import { HistoryComponent } from 'src/app/components/dashboard/history/history.component';
import { CancelComponent } from 'src/app/components/dashboard/cancel/cancel.component';
import { DashboardAdminComponent } from 'src/app/components/dashboard-admin/dashboard-admin.component';
import { UpdateAirlineComponent } from 'src/app/components/dashboard-admin/update-airline/update-airline.component';
import { DeleteAirlineComponent } from 'src/app/components/dashboard-admin/delete-airline/delete-airline.component';
import { AddBulkComponent } from 'src/app/components/dashboard-admin/add-bulk/add-bulk.component';
import { HomeComponent } from 'src/app/components/home/home.component';
import { AllBookingComponent } from 'src/app/components/dashboard-admin/all-booking/all-booking.component';

const routes:Routes=[
  {path:'home',component:HomeComponent},
  
  {path:'login', component:LoginComponent},
  {path:'register',component:RegisterComponent},
 

  {path:"logout",component:LogoutComponent,canActivate:[AuthGuard]},
 
  {path:"bookFlight",component:BookFlightComponent},
  {path:"displayFlights",component:DisplayFlightComponent},
  
  
//User DashBoard
  {path:'dashboard',component:DashboardComponent,canActivate:[AuthGuard]},
  {path:"dashboard/pnrDetails",component:PnrDetailsComponent},
  {path:"dashboard/history", component:HistoryComponent},
  {path:"dashboard/cancel",component:CancelComponent},

//Admin DashBoard
  {path:"dashboardAdmin",component:DashboardAdminComponent},
  {path:'dashboardAdmin/update',component:UpdateAirlineComponent},
  {path:'dashboardAdmin/delete',component:DeleteAirlineComponent},
  {path:"addFlight",component:AddFlightComponent},
  {path:"dashboardAdmin/AddBulk",component:AddBulkComponent},
  {path:"allBooking", component:AllBookingComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
