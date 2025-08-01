import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-carrusel',
  standalone: true,
  imports: [FormsModule, CommonModule],
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
      imagen: 'assets/img/tele4.jpg ',
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