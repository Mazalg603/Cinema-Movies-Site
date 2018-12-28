import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'title'
})
export class TitlePipe implements PipeTransform {

  transform(value: any): any {
    if (value) {
      value = value.replace(/[^A-Za-z]/g, ' ');
      value = value.toLowerCase()
        .split(' ')
        .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
        .join(' ');
    }
    return value;
  }

}
