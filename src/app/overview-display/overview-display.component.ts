import { Component } from '@angular/core';
import {IResort} from "../shared/interfaces/resort.interface";
import {DataService} from "../shared/services/data.service";

@Component({
  selector: 'app-overview-display',
  templateUrl: './overview-display.component.html',
  styleUrls: ['./overview-display.component.css']
})
export class OverviewDisplayComponent {

  public clicked:IResort;

  constructor(private dataService: DataService) {
    this.dataService.currentDataObservable.subscribe(clicked => {this.clicked = clicked; console.log('Received new subject value: ')});
  }

}
