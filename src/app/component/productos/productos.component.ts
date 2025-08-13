import { Component } from '@angular/core';
import { CarritoService } from '../../servicios/carrito.service';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {
    constructor(private carritoService: CarritoService) {}

  agregarAlCarrito(nombre: string, precio: number) {
    const producto = { nombre, precio };
    this.carritoService.agregarProducto(producto);
    alert(`${nombre} agregado al carrito`);
  }

}
