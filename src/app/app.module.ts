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
import { BookFlightComponent } from './components/book-flight/book-flight.component';
import { SearchFlightComponent } from './components/search-flight/search-flight.component';
import { FlightsComponent } from './components/flights/flights.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    BookFlightComponent,
    SearchFlightComponent,
    FlightsComponent
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
   HttpClientModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
