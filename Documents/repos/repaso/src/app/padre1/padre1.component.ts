import { Component } from '@angular/core';

@Component({
  selector: 'app-padre1',
  templateUrl: './padre1.component.html',
  styleUrls: ['./padre1.component.css']
})
export class Padre1Component {
  id:number=0
  auxId:number=0
  nombre:string=""
  auxNombre:string=""
  mandaParams(){
    this.auxNombre=this.nombre
    this.auxId=this.id
  }
}
