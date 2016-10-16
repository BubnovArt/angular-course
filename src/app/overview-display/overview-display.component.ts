import { Component, Input } from '@angular/core';
import {IResort} from "../shared/interfaces/resort.interface";

@Component({
  selector: 'app-overview-display',
  templateUrl: './overview-display.component.html',
  styleUrls: ['./overview-display.component.css']
})
export class OverviewDisplayComponent {

  @Input()
  public clicked:IResort;

  constructor() { }

}
