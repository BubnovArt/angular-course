import { Component } from '@angular/core';
import {IResort} from "../shared/interfaces/resort.interface";
import {DataService} from "../shared/services/data.service";

@Component({
  selector: 'app-weather-display',
  templateUrl: './weather-display.component.html',
  styleUrls: ['./weather-display.component.css']
})
export class WeatherDisplayComponent {

  public clicked: IResort;

  constructor(private dataService: DataService) {
    this.dataService.currentDataObservable.subscribe(clicked => {this.clicked = clicked; console.log('Received new subject value: ')});
  }
}
