import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'enumToArray' })
export class EnumToArrayPipe implements PipeTransform {
  transform(value: any): any[] {
    return Object.values(value).filter(v => typeof v === "string");
  }
}
