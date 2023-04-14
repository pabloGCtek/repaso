import { Component } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent {

  num1:any
  num2:any
  result:any
  op:string =""

  calcular(){
      switch(this.op){
        case"+":
        this.result = +this.num1 + +this.num2
          break;
        case"-":
        this.result = this.num1-this.num2
          break;
        case"*":
        this.result = this.num1*this.num2
          break;
        case"/":
        this.result = this.num1/this.num2
          break;
        default:
          break;
      }
  }
}
