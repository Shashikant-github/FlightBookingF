import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './components/nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { LoginComponent } from './components/login/login.component';
import { AppRoutingModule } from './routing/app-routing/app-routing.module';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BookFlightComponent } from './components/dashboard/book-flight/book-flight.component';

import { FlightsComponent } from './components/flights/flights.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

import { DisplayFlightComponent } from './components/flights/display-flight/display-flight.component';
import { AddFlightComponent } from './components/flights/add-flight/add-flight.component';
import { HeaderComponent } from './components/header/header.component';
import { ProfileComponent } from './components/profile/profile.component';
import { LogoutComponent } from './components/logout/logout.component';
import { FooterComponent } from './components/footer/footer.component';
import { PnrDetailsComponent } from './components/dashboard/pnr-details/pnr-details.component';
import { HistoryComponent } from './components/dashboard/history/history.component';
import { CancelComponent } from './components/dashboard/cancel/cancel.component';
import { DashboardAdminComponent } from './components/dashboard-admin/dashboard-admin.component';
import { UpdateAirlineComponent } from './components/dashboard-admin/update-airline/update-airline.component';
import { DeleteAirlineComponent } from './components/dashboard-admin/delete-airline/delete-airline.component';
import { AddBulkComponent } from './components/dashboard-admin/add-bulk/add-bulk.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    BookFlightComponent,
    
    FlightsComponent,
    AddFlightComponent,
    DisplayFlightComponent,
    HeaderComponent,
    ProfileComponent,
    LogoutComponent,
    FooterComponent,
    PnrDetailsComponent,
    HistoryComponent,
    CancelComponent,
    DashboardAdminComponent,
    UpdateAirlineComponent,
    DeleteAirlineComponent,
    AddBulkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
   HttpClientModule,
   ReactiveFormsModule,
   MatExpansionModule,
   MatFormFieldModule,
   
   MatInputModule,
   FormsModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
