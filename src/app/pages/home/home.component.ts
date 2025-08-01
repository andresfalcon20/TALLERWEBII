import { Component, ViewEncapsulation } from '@angular/core';
import { CarruselComponent } from "../../component/carrusel/carrusel.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarruselComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
   encapsulation: ViewEncapsulation.None
})
export class HomeComponent {
  

}
