import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../../servicios/clientes.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-lista-formulario',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './lista-formulario.component.html',
  styleUrl: './lista-formulario.component.css'
})
export class ListaFormularioComponent implements OnInit {
  
    constructor(private servicioCliente: ClientesService) { }
  
    clientes: any[] = [];

    ngOnInit():void{
      this.servicioCliente.obtenerClientes().subscribe(data =>{
        this.clientes=Object.keys(data).map(key =>({
          id: key, ...data[key]
        }));
      });

    }

    eliminar(id: string): void{
      this.servicioCliente.eliminarCliente(id).subscribe(()=>{
        this.clientes=this.clientes.filter(cliente=> cliente.id !== id);
      }, error =>{
        console.log("Error", error);
      }
    )
    }

}
