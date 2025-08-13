import { Component } from '@angular/core';
import { CarritoService } from '../../servicios/carrito.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.css'
})
export class CarritoComponent {
carrito: any[] = [];

  constructor(private carritoService: CarritoService) {
    this.carrito = this.carritoService.obtenerCarrito();
  }

  eliminar(index: number) {
    this.carritoService.eliminarProducto(index);
    this.carrito = this.carritoService.obtenerCarrito();
  }

  vaciar() {
    this.carritoService.vaciarCarrito();
    this.carrito = [];
  }

  getTotal() {
    return this.carrito.reduce((acc, item) => acc + item.precio, 0);
  }
}
