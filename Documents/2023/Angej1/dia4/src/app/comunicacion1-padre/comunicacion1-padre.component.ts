import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { clasePaciente } from '../comunicacion1-hijo/clasePaciente';
import { Comunicacion1HijoComponent } from '../comunicacion1-hijo/comunicacion1-hijo.component';

@Component({
  selector: 'app-comunicacion1-padre',
  templateUrl: './comunicacion1-padre.component.html',
  styleUrls: ['./comunicacion1-padre.component.css']
})
export class Comunicacion1PadreComponent implements AfterViewInit {
  @ViewChild(Comunicacion1HijoComponent)
  hijo!: { paciente: { toString: () => string; }; };

  pacient:clasePaciente[] =[]
  mensaje:string=""
  ngAfterViewInit(): void {
    this.mensaje = this.hijo.paciente.toString()
  }
}
