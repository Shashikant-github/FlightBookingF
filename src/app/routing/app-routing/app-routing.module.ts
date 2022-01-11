import {  NgModule } from '@angular/core';
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

import { DashboardAdminComponent } from 'src/app/components/dashboard-admin/dashboard-admin.component';

import { HomeComponent } from 'src/app/components/home/home.component';
import { AllBookingComponent } from 'src/app/components/dashboard-admin/all-booking/all-booking.component';

import { FlightsComponent } from 'src/app/components/flights/flights.component';
import { DisplayFlightsAComponent } from 'src/app/components/dashboard-admin/display-flights-a/display-flights-a.component';
import { SearchFlightComponent } from 'src/app/components/flights/search-flight/search-flight.component';
import { SearchFlightAdmComponent } from 'src/app/components/dashboard-admin/search-flight-adm/search-flight-adm.component';
import { SearchFlightUserComponent } from 'src/app/components/dashboard/search-flight-user/search-flight-user.component';

 const routes:Routes=[
  // {path:'home',component:HomeComponent},
  // {path:'root',component:AppComponent},
  // {path:'header',component:HeaderComponent},
  
  // {path:'login', component:LoginComponent},
  // {path:'register',component:RegisterComponent},
 
  { 
    path: '', 
    component:HomeComponent,
    children: [
      { path: '', component: FlightsComponent, pathMatch: 'full'},
      { path: 'login', component: LoginComponent },
      {path:'register',component:RegisterComponent},
      {path:'searchFlight',component:SearchFlightComponent},      
    ]
},

  {path:'logout',component:LogoutComponent},
  //{path:"bookFlight",component:BookFlightComponent},
 // {path:"displayFlights",component:DisplayFlightComponent},
  
  
//User DashBoard
  // {path:'dashboard',component:DashboardComponent,canActivate:[AuthGuard]},
  // {path:"dashboard/pnrDetails",component:PnrDetailsComponent,canActivate:[AuthGuard]},
  // {path:"dashboard/history", component:HistoryComponent,canActivate:[AuthGuard]},
  // {path:"dashboard/cancel",component:CancelComponent,canActivate:[AuthGuard]},

  { 
    path: '', 
    component:DashboardAdminComponent,
    children: [
      { path: 'dashboardAdmin', component:DisplayFlightsAComponent, pathMatch: 'full'},
      { path:'addFlight',component:AddFlightComponent }, 
      {path:'allBooking', component:AllBookingComponent}, 
      {path:'searchAdmin', component:SearchFlightAdmComponent}  
    ]
}, 

{ 
  path: '', 
  component:DashboardComponent,
  children: [
    { path:'dashboard', component: DisplayFlightComponent, pathMatch: 'full'},
    {path:'bookFlight',component:BookFlightComponent},
    {path:"dashboard/pnrDetails",component:PnrDetailsComponent},
    {path:"dashboard/history", component:HistoryComponent},
    {path:"searchUser", component:SearchFlightUserComponent},  
  ]
},

  { path: '**', redirectTo: '' },

//Admin DashBoard
  // {path:"dashboardAdmin",component:DashboardAdminComponent,canActivate:[AuthGuard]},
  // {path:'dashboardAdmin/update',component:UpdateAirlineComponent,canActivate:[AuthGuard]},
  // {path:'dashboardAdmin/delete',component:DeleteAirlineComponent,canActivate:[AuthGuard]},
  // {path:"addFlight",component:AddFlightComponent,canActivate:[AuthGuard]},
  // {path:"dashboardAdmin/AddBulk",component:AddBulkComponent,canActivate:[AuthGuard]},
  // {path:"allBooking", component:AllBookingComponent,canActivate:[AuthGuard]},
  //{ path: 'admin', loadChildren: () => import('../../admin/admin.module').then(m => m.AdminModule) },
  //{ path: 'user', loadChildren: () => import('../../user/user.module').then(m => m.UserModule) }
];


// export const routing: ModuleWithProviders = RouterModule.forRoot(routes);

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
