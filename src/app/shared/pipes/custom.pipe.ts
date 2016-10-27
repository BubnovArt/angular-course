import { Pipe, PipeTransform } from '@angular/core';
import {IResort} from "../interfaces/resort.interface";

@Pipe({
  name: 'custom'
})
export class CustomPipe implements PipeTransform {
  public transform(value: IResort[], args: string): any {
    let newValue = value.filter(item => item.type === args);
    return newValue;
  }
}
