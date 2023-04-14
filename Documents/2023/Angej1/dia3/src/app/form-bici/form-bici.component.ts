import { Component } from '@angular/core';
import { Bici } from '../models/bici';

@Component({
  selector: 'app-form-bici',
  templateUrl: './form-bici.component.html',
  styleUrls: ['./form-bici.component.css']
})
export class FormBiciComponent {
  bicicleta:Bici = new Bici("","",0,0,0,false)
  texto:string=""
  cAcelera:number=0
  cFrena:number=0


  mostrar():void{
    this.texto = this.bicicleta.info()
  }
  esElectrica():void{
    this.bicicleta.electrica = !this.bicicleta.electrica
  }
}
