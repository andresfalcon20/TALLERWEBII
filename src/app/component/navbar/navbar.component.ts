import { Component, HostListener } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AutenticacionService } from '../../servicios/autenticacion.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, FormsModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
constructor(public authServicio: AutenticacionService, private router: Router){}
 cerrarSesion() {
    this.authServicio.logout();
  this.router.navigateByUrl('/login');
  }





  
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
      nav?.classList.add('shadow-xl', 'backdrop-blur-sm', 'bg-white/80');
    } else {
      nav?.classList.remove('shadow-xl', 'backdrop-blur-sm', 'bg-white/80');
    }
  }
}
