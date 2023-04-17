import { Component, EventEmitter, Output } from '@angular/core';
import { doctor } from './doctor';
@Component({
  selector: 'app-comunicacion2-padre',
  templateUrl: './comunicacion2-padre.component.html',
  styleUrls: ['./comunicacion2-padre.component.css']
})
export class Comunicacion2PadreComponent {
  nombre:string=""
  apellidos:string=""
  credula:number=0
  imagen:string=""
  listaDocs:doctor[] =[]
  @Output() messageEvent = new EventEmitter<doctor[]>();
  mandaDoctor(){
    this.listaDocs.push(new doctor(this.nombre,this.apellidos,this.credula,this.imagen))
    this.messageEvent.emit(this.listaDocs);
  }
}
