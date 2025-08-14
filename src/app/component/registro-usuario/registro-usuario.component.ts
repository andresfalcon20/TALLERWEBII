import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EdadPipe } from '../../pipes/edad.pipe';

@Component({
  selector: 'app-registro-usuario',
  standalone: true,
  imports: [FormsModule, CommonModule, EdadPipe],
  templateUrl: './registro-usuario.component.html',
  styleUrl: './registro-usuario.component.css'
})
export class RegistroUsuarioComponent {
  nombre: string = '';
  email: string = '';
fechaNacimiento: string = '';  
password: string = '';

  constructor(private http: HttpClient) { }

  registrarUsuario() {
    const nuevoUsuario = {
      nombre: this.nombre,
      email: this.email,
          fechaNacimiento: this.fechaNacimiento,

      password: this.password
    };

    this.http.post('http://localhost:3000/usuarios', nuevoUsuario)
      .subscribe({
        next: () => {
          alert('Usuario registrado correctamente');
        },
        error: (err) => {
          console.error('Error al registrar', err);
        }
      });
  }

}
