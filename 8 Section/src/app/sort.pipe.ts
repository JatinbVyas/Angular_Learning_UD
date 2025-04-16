import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  standalone: true,
  //pure is used to determine if the pipe is pure or impure.
  // A pure pipe is only called when the input reference changes, while an impure pipe is called on every change detection cycle.
  pure: false,
})
export class SortPipe implements PipeTransform {
  transform(value: string[] | number[], direction: 'asc' | 'desc' = 'asc') {
    const sortedArray = [...value];

    sortedArray.sort((a, b) => {
      if (direction === 'asc') {
        return a > b ? 1 : -1;
      } else {
        return a > b ? -1 : 1;
      }
    });

    return sortedArray;
  }
}
