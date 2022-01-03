import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from 'src/app/components/login/login.component';
import { RegisterComponent } from 'src/app/components/register/register.component';
import { DashboardComponent } from 'src/app/components/dashboard/dashboard.component';
import { SearchFlightComponent } from 'src/app/components/search-flight/search-flight.component';
import { BookFlightComponent } from 'src/app/components/book-flight/book-flight.component';
import { DisplayFlightComponent } from 'src/app/components/flights/display-flight/display-flight.component';
import { AddFlightComponent } from 'src/app/components/flights/add-flight/add-flight.component';
import { LogoutComponent } from 'src/app/components/logout/logout.component';
import { AuthGuard } from 'src/app/guard/auth.guard';

const routes:Routes=[
  {path:'login', component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'dashboard',component:DashboardComponent,canActivate:[AuthGuard]},
  {path:'searchFlight',component:SearchFlightComponent},
  {path:"bookFlight",component:BookFlightComponent},
  {path:"displayFlights",component:DisplayFlightComponent},
  {path:"addFlight",component:AddFlightComponent},
  {path:"logout",component:LogoutComponent,canActivate:[AuthGuard]}
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
