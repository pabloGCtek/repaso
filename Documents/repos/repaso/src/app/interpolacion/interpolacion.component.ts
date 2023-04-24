import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolacion',
  templateUrl: './interpolacion.component.html',
  styleUrls: ['./interpolacion.component.css']
})
export class InterpolacionComponent {
  texto1:string = "Ejemplo de texto guardado en una variable"
  num1:number=1
  num2:number=2
}
