import { Component } from '@angular/core';

@Component({
  selector: 'app-calc-divisas',
  templateUrl: './calc-divisas.component.html',
  styleUrls: ['./calc-divisas.component.css']
})
export class CalcDivisasComponent {
  eurs:any
  result:any
  ratio:any
  divisa:string = ""

  calcular(){
    switch(this.divisa){
      case"Libra":
      this.ratio = 0.88
        break;
      case"Dolar":
      this.ratio = 1.10
        break;
      case"Yen":
      console.log(this.divisa)
      this.ratio = 147.69
        break;
      default:
        this.ratio =1
        break;
    }
    this.result = this.eurs *this.ratio
}
}
