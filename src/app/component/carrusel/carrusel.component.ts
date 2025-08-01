import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-carrusel',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './carrusel.component.html',
  styleUrl: './carrusel.component.css'
})
export class CarruselComponent implements AfterViewInit {

 cards = [
    {
      imagen: 'https://imagenes.primicias.ec/files/og_thumbnail/uploads/2024/06/06/6661ebf979dc9.jpeg',
      titulo: 'Smartphone',
      descripcion: 'Alta gama y gran rendimiento.'
    },
    {
    imagen: 'assets/img/laptop1.jpg',
      titulo: 'Laptop Gamer',
      descripcion: 'Potencia para jugar y trabajar.'
    },
    {
      imagen: 'https://estaticos-cdn.prensaiberica.es/clip/73913461-21ec-413e-9a72-887e42da4cb6_alta-libre-aspect-ratio_default_0.jpg',
      titulo: 'Relojes',
    descripcion: 'Estilo y tecnología en tu muñeca.'
      },
    {
      imagen: 'https://imagenes.elpais.com/resizer/v2/WWLIRUBSZ5FZFN6V6UBL5LWZYQ.jpg?auth=d45e6e361c1fab587eb0abe073d6fef7cf0aef86fa024ce1c3953b3b34161c90&width=1960&height=1470&smart=true',
      titulo: 'Televisores',
    descripcion: 'OLED 4K en imagen envolvente.'
      }
  ];


  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    const cards: NodeListOf<HTMLElement> = this.el.nativeElement.querySelectorAll('.card');

    cards.forEach((card) => {
      card.addEventListener('click', () => {
        cards.forEach((other) => other.classList.remove('active'));
        card.classList.add('active');
      });
    });
  }
}