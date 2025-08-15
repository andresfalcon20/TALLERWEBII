import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ocultarCorreo',
  standalone: true
})
export class OcultarCorreoPipe implements PipeTransform {

   transform(correo: string): string {
    if (!correo || !correo.includes('@')) return correo;
    const [usuario, dominio] = correo.split('@');
    const visible = usuario.slice(0, 2);
    return `${visible}***@${dominio}`;
  }
}
