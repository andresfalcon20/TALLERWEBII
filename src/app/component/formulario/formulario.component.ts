import { Component } from '@angular/core';
import { ClientesService } from '../../servicios/clientes.service';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  constructor(private servicioCliente: ClientesService) { }
  
  nombre: string='';
  correo:string='';
  telefono: string='';
  direccion: string='';

  agregarCliente(formulario:any){
    this.servicioCliente.guardarCliente(formulario.value).subscribe(()=>{
          alert('¡Usuario guardado exitosamente!');
      window.location.reload();
    })
  }

}
