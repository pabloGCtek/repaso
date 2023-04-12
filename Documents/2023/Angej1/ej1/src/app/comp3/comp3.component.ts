import { Component } from '@angular/core';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.css']
})
export class Comp3Component {

  ngOnInit(): void{
    this.muestra()
  }
  muestra(): void{
    let numero:number = 8
    let cadena:string = "eee"
    let bool:boolean = true
    let cual:any = "e"

    console.log(numero," es tipo",typeof(numero))
    console.log(cadena," es tipo",typeof(cadena))
    console.log(bool," es tipo",typeof(bool))
    console.log(cual," es tipo",typeof(cual))
  }
}
