import { Pipe } from '@angular/core';

@Pipe({
  name: 'temprature',
  standalone: true,
})
export class TempraturePipe {
  transform(
    value: string | number,
    inputType: 'cel' | 'fah',
    outputType: 'cel' | 'fah'
  ) {
    let val: number;
    if (typeof value === 'string') {
      val = parseFloat(value);
    } else {
      val = value;
    }

    let outputValue: number;
    if (inputType === 'cel' && outputType === 'fah') {
      outputValue = (val * 9) / 5 + 32;
    } else if (inputType === 'fah' && outputType === 'cel') {
      outputValue = ((val - 32) * 5) / 9;
    } else {
      outputValue = val;
    }

    let symbol: '°C' | '°F';

    if (!outputType) {
      symbol = inputType === 'cel' ? '°C' : '°F';
    } else {
      symbol = outputType === 'cel' ? '°C' : '°F';
    }
    return `${outputValue}${symbol}`;
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
