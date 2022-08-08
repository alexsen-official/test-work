import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hours',
})
export class HoursPipe implements PipeTransform {
  transform(value: Date | null): number {
    console.log(value?.getUTCHours());
    return value?.getUTCHours() || 24;
  }
}
