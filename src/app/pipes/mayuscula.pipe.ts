import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mayuscula',
  standalone: true
})
export class MayusculaPipe implements PipeTransform {

   transform(value: string): string {
    if (!value) return '';
    return value
      .toLowerCase()
      .split(' ')
      .map(p => p.charAt(0).toUpperCase() + p.slice(1))
      .join(' ');
  }

}
