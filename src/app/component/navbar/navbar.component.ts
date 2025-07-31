import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {





  
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
