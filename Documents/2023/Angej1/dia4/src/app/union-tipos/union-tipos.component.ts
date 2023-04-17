import { Component } from '@angular/core';

@Component({
  selector: 'app-union-tipos',
  templateUrl: './union-tipos.component.html',
  styleUrls: ['./union-tipos.component.css']
})
export class UnionTiposComponent {
  arrayMix: (number | string)[] = []
  numeroLimit: number =1|2|3
  stringLimit: "uno"| "dos"|"tres" ="uno"
  textotal:string=""
  textoNums:string=""
  texto:string=""

  introNum():void{
    this.arrayMix.push(this.numeroLimit)
    console.log(this.numeroLimit)
    this.textotal=this.arrayMix.toString()
      if(typeof this.arrayMix[this.arrayMix.length-1] === "number"){
        this.textoNums+= this.numeroLimit +", "
    }
  }
  introString():void{
    this.arrayMix.push(this.stringLimit)
    console.log(this.stringLimit)
    this.textotal=this.arrayMix.toString()
    if(typeof this.arrayMix[this.arrayMix.length-1] === "string"){
      this.texto+= this.stringLimit +", "
  }
  }
}
