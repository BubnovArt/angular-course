import { Component, Input } from '@angular/core';
import {IResort} from "../shared/interfaces/resort.interface";

@Component({
  selector: 'app-weather-display',
  templateUrl: './weather-display.component.html',
  styleUrls: ['./weather-display.component.css']
})
export class WeatherDisplayComponent {

  @Input()
  public clicked: IResort;

  constructor() { }
}
