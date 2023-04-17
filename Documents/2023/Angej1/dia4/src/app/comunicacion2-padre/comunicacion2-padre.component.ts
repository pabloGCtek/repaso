import { Component } from '@angular/core';
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

  mandaDoctor(){
    
  }
}
