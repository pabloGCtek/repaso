import { Component, EventEmitter, Output } from '@angular/core';
import { clasePaciente } from './clasePaciente';
@Component({
  selector: 'app-comunicacion1-hijo',
  templateUrl: './comunicacion1-hijo.component.html',
  styleUrls: ['./comunicacion1-hijo.component.css']
})
export class Comunicacion1HijoComponent {
  nombre:string=""
  apellidos:string=""
  direccion:string=""
  dni:string=""
  telefono:string=""
  email:string=""
  paciente:clasePaciente
  constructor() {
    this.paciente=new clasePaciente("","","","","","")
   }
  creaPaciente():void{
    this.paciente = new clasePaciente(this.nombre,this.apellidos,this.dni,this.telefono,this.direccion,this.email)
    
  }
}
