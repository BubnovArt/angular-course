/* Modules */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

/* Component */
import { AppComponent } from './app.component';
import { ResortComponent } from './resort-list/resort/resort.component'
import { ResortListComponent } from './resort-list/resort-list.component';
import { WeatherDisplayComponent } from './weather-display/weather-display.component';
import { OverviewDisplayComponent } from './overview-display/overview-display.component';

/* Services */
import {DataService} from "./shared/services/data.service";

@NgModule({
  declarations: [
    AppComponent,
    ResortComponent,
    ResortListComponent,
    WeatherDisplayComponent,
    OverviewDisplayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
