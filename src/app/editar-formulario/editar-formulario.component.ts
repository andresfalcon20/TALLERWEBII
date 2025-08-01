import { Component } from '@angular/core';
import { ClientesService } from '../servicios/clientes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-editar-formulario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './editar-formulario.component.html',
  styleUrl: './editar-formulario.component.css'
})
export class EditarFormularioComponent {

  constructor (private servicioCliente: ClientesService,
    private router: Router, private ruta: ActivatedRoute){}


    id:string='';
    cliente: any={nombre:'', direccion: '', correo: '', telefono:''}

    ngOnInit():void{
      this.ruta.params.subscribe(params =>{
        this.id=params['id']
          this.servicioCliente.buscarClienteById(this.id).subscribe(cliente=>{
            this.cliente=cliente;
          })
        

      })
    }

    editar(formulario:any): void{
      const clienteActualizado={ ...formulario.value, id:this.id};
      this.servicioCliente.editarCliente(this.id, clienteActualizado).subscribe(()=>{
    this.router.navigate(['/lista-formulario']);
        })
    }

}
