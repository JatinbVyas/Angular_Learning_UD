import { Pipe } from '@angular/core';

@Pipe({
  name: 'temprature',
  standalone: true,
})
export class TempraturePipe {
  transform(value: any, ...args: any[]) {
    return value + '°C';
  }
  // transform(value: number, unit: string): string {
  //   if (unit === 'C') {
  //     return `${value}°C`;
  //   } else if (unit === 'F') {
  //     return `${(value * 9) / 5 + 32}°F`;
  //   } else if (unit === 'K') {
  //     return `${value + 273.15}K`;
  //   } else {
  //     return `${value}°C`;
  //   }
  // }
}
