import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  correo:string=""
  direccion:string=""
  comunidad:string=""
  fpago:string=""
  check:boolean = false
  texto:string=""

  mostrar():void{
    this.texto = this.correo+","+this.direccion+","+this.comunidad+","+this.fpago
    if(this.check){
      alert("Le spamearemos a diario")
    }
  }
  checkd(){
  this.check=!this.check
  }
}
