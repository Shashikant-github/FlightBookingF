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

const routes:Routes=[
  {path:'', component:LoginComponent, pathMatch:'full'},
  {path:'register',component:RegisterComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'searchFlight',component:SearchFlightComponent},
  {path:"bookFlight",component:BookFlightComponent},
  {path:"displayFlights",component:DisplayFlightComponent},
  {path:"addFlight",component:AddFlightComponent}
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
