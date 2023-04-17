import { Component } from '@angular/core';
import { clasePaciente } from '../comunicacion1-hijo/clasePaciente';

@Component({
  selector: 'app-comunicacion1-padre',
  templateUrl: './comunicacion1-padre.component.html',
  styleUrls: ['./comunicacion1-padre.component.css']
})
export class Comunicacion1PadreComponent {

  constructor() { } 

  pacient:clasePaciente[] =[]

  receiveMessage($event: clasePaciente) {
    this.pacient.push($event);
  }
}
