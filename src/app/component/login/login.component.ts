import { Component } from '@angular/core';
import { AutenticacionService } from '../../servicios/autenticacion.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, HttpClientModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  
   usuario: string = '';
  password: string = '';
  error: string = '';

  constructor(private authServicio: AutenticacionService, private router: Router) {}

login() {
  this.authServicio.login(this.usuario, this.password).subscribe({
    next: (esValido) => {
      if (esValido) {
        const redireccion = localStorage.getItem('redirectUrl') || '/home';
        localStorage.removeItem('redirectUrl');
        this.router.navigateByUrl(redireccion);
      } else {
        this.error = "Usuario y contraseña incorrectos";
      }
    },
    error: (err) => {
      console.error("Error al intentar iniciar sesión", err);
      this.error = "Error al conectar con el servidor";
    }
  });
}

}
