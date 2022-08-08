import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'leadingZero',
})
export class LeadingZeroPipe implements PipeTransform {
  transform(value: string | number): string {
    return `0${value}`.slice(-2);
  }
}
