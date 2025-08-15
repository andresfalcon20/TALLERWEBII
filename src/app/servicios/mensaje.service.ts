import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MensajeService {

  constructor(private http: HttpClient) { }

  private API_SPRING = "http://localhost:8080/mensajes";

  postMensaje(mensaje: any): Observable<any> {
    return this.http.post(`${this.API_SPRING}/guardar`, mensaje);
  }

}
