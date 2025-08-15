import { Component } from '@angular/core';
import { MensajeService } from '../../servicios/mensaje.service';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {
  constructor(private mensajeServicio: MensajeService) {}

  nombre: string = '';
  correo: string = '';
  telefono: string = '';
  producto: string = '';
  contenido: string = '';

  guardarMensaje(formulario: NgForm) {
    const cliente = {
      nombre: this.nombre,
      correo: this.correo,
      telefono: this.telefono
    };

   
    const producto = {
      nombre: this.producto
    };

    const mensaje = {
      contenido: this.contenido,
      cliente: cliente,
      producto: producto
    };

    this.mensajeServicio.postMensaje(mensaje).subscribe(() => {
      window.alert('Mensaje enviado correctamente');
      window.location.reload();
    });
  }
}