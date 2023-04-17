import { Component } from '@angular/core';


@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  styleUrls: ['./directivas.component.css'],


})



export class DirectivasComponent {

  desaparece:boolean=true
  desapareceSwitch:number=1
  conteo:string[]=["uno","dos","tres"]
  change():void{
    this.desaparece=!this.desaparece
    this.desapareceSwitch++
  }
}
