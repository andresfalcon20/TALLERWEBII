import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  private carrito: any[] = [];

 constructor() {
    const guardado = localStorage.getItem('carrito');
    this.carrito = guardado ? JSON.parse(guardado) : [];
  }

  agregarProducto(producto: any) {
    this.carrito.push(producto);
    this.guardar();
  }

  obtenerCarrito() {
    return [...this.carrito];
  }

  eliminarProducto(index: number) {
    this.carrito.splice(index, 1);
    this.guardar();
  }

  vaciarCarrito() {
    this.carrito = [];
    this.guardar();
  }

  private guardar() {
    localStorage.setItem('carrito', JSON.stringify(this.carrito));
  }
}
