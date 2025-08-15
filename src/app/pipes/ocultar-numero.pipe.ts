import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ocultarNumero',
  standalone: true
})
export class OcultarNumeroPipe implements PipeTransform {

   transform(value: string): string {
    if (!value || value.length < 4) return value;
    const visible = value.slice(-4);
    return '**** **** ' + visible;
  }

}
