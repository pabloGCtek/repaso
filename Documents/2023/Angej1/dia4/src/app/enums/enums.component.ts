import { Component } from '@angular/core';

enum Dir {
  Arriba = 1,
  Abajo,
  Izda,
  Derecha,
}

@Component({
  selector: 'app-enums',
  templateUrl: './enums.component.html',
  styleUrls: ['./enums.component.css']
})

export class EnumsComponent {
  texto:string=""
  numero:number=0
  dirije():void{
    this.texto = Dir[this.numero]
  }
}
