import { Component, EventEmitter, Output } from '@angular/core';
import { clasePaciente } from './clasePaciente';
@Component({
  selector: 'app-comunicacion1-hijo',
  templateUrl: './comunicacion1-hijo.component.html',
  styleUrls: ['./comunicacion1-hijo.component.css']
})
export class Comunicacion1HijoComponent {
  paciente:clasePaciente = new clasePaciente("","","","","","") 
  @Output() messageEvent = new EventEmitter<clasePaciente>();

  constructor() { }
  mandaPaciente():void{
    alert(this.paciente.toString())
    this.messageEvent.emit(this.paciente);
  }
}
