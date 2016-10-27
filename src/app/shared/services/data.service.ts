import { Injectable } from '@angular/core';
import {Subject, Observable} from "rxjs";

@Injectable()
export class DataService {

  public currentDataSubject: Subject<any> = new Subject();

  public currentDataObservable: Observable<any> = this.currentDataSubject.asObservable();

  public setUpdatedData() {
    this.currentDataSubject.next(this.currentDataObservable);
  }
}
