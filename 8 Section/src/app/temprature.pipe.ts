import { Pipe } from '@angular/core';

@Pipe({
  name: 'temprature',
  standalone: true,
})
export class TempraturePipe {
  transform(
    value: string | number,
    inputType: 'cel' | 'fah',
    outputType?: 'cel' | 'fah'
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
    return `${outputValue.toFixed(2)}${symbol}`;
  }
}
