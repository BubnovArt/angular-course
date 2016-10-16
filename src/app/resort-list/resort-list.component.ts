import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import { IResort } from "../shared/interfaces/resort.interface";

@Component({
  selector: 'app-resort-list',
  templateUrl: './resort-list.component.html',
  styleUrls: ['./resort-list.component.css']
})
export class ResortListComponent implements OnInit {

  @Input()
  public resorts: IResort[];

  public clicked: IResort;

  @Output()
  public clickedResortEmitter: EventEmitter<IResort> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.setResort(this.resorts[0]);
  }

  public setResort(resort: IResort): void {
    this.clicked = resort;
    this.clickedResortEmitter.emit(this.clicked);
  }
}
