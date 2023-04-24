import { Component } from '@angular/core';

export enum enumerado{
  manzana,
  platano,
  fresa,
  naranja
}
@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  styleUrls: ['./directivas.component.css']
})
export class DirectivasComponent {
  frutas: typeof enumerado
  fruta:any
  activo:boolean=false
  lista:string[] =["elem 1","elem 2","elem 3","elem 4"]
  constructor(){
    this.frutas = enumerado
    this.fruta = this.frutas.manzana
  }

  cambio(){
    this.activo=!this.activo
  }
}
