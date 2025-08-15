import { Component } from '@angular/core';
import { ClientesService } from '../../servicios/clientes.service';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { MayusculaPipe } from '../../pipes/mayuscula.pipe';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule, RouterLink, MayusculaPipe],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  constructor(private servicioCliente: ClientesService) { }

  nombre: string = '';
  correo: string = '';
  telefono: string = '';
  direccion: string = '';
  enviado: boolean = false;

  agregarCliente(formulario: any) {
    if (formulario.valid) {
      this.servicioCliente.guardarCliente(formulario.value).subscribe(() => {
        alert('¡Registro guardado exitosamente!');
        formulario.resetForm();
        this.enviado = true;
      });
    } else {
      formulario.form.markAllAsTouched();
    }
  }

  camposSinLlenar(): boolean {
    return !this.enviado && (
      !this.nombre.trim() ||
      !this.correo.trim() ||
      !this.telefono.trim() ||
      !this.direccion.trim()
    );
  }
}
