import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MiServicioService {
  textoejemplo:string = "Ejemplo de texto de un servicio"
  constructor() { }
}
