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
 

  {path:"logout",component:LogoutComponent},
 
  {path:"bookFlight",component:BookFlightComponent},
  {path:"displayFlights",component:DisplayFlightComponent},
  
  
//User DashBoard
  {path:'dashboard',component:DashboardComponent,canActivate:[AuthGuard]},
  {path:"dashboard/pnrDetails",component:PnrDetailsComponent,canActivate:[AuthGuard]},
  {path:"dashboard/history", component:HistoryComponent,canActivate:[AuthGuard]},
  {path:"dashboard/cancel",component:CancelComponent,canActivate:[AuthGuard]},

//Admin DashBoard
  {path:"dashboardAdmin",component:DashboardAdminComponent,canActivate:[AuthGuard]},
  {path:'dashboardAdmin/update',component:UpdateAirlineComponent,canActivate:[AuthGuard]},
  {path:'dashboardAdmin/delete',component:DeleteAirlineComponent,canActivate:[AuthGuard]},
  {path:"addFlight",component:AddFlightComponent,canActivate:[AuthGuard]},
  {path:"dashboardAdmin/AddBulk",component:AddBulkComponent,canActivate:[AuthGuard]},
  {path:"allBooking", component:AllBookingComponent,canActivate:[AuthGuard]},
  { path: 'admin', loadChildren: () => import('../../admin/admin.module').then(m => m.AdminModule) },
  { path: 'user', loadChildren: () => import('../../user/user.module').then(m => m.UserModule) }
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
