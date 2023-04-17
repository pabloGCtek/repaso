import { Component } from '@angular/core';

@Component({
  selector: 'app-arrays',
  templateUrl: './arrays.component.html',
  styleUrls: ['./arrays.component.css']
})
export class ArraysComponent {

  listaNums:number[] = [1,2,3]
  listaNoms:String[] = ["un","dos","tres"]

  ngOnInit(): void{
    console.log("arrays iniciales")
    this.muestra(this.listaNoms)
    this.muestra(this.listaNums)
    console.log("insertamos un elemento al final y mostramos")
    this.inserta()
    console.log("insertamos un elemento al principio y mostramos")
    this.insertaPrimer()
    console.log("suma de los elementos del array numerico")
    console.log("La suma del array de numeros es: " + this.sumaNums())
    console.log("borra lso elementos añadidos")
    this.borra()
  }

  inserta():void{
    this.listaNoms.push("cuatro")
    console.log(this.listaNoms.toString())
    this.listaNums.push(4)
    console.log(this.listaNums.toString())
  }
  insertaPrimer():void{
    this.listaNoms.unshift("cero")
    console.log(this.listaNoms.toString())
    this.listaNums.unshift(0)
    console.log(this.listaNums.toString())
  }
  muestra(arr:any[]):void{
    for(var index in arr)
{ 
    console.log(arr[index]);
}
  }
  sumaNums():number{
    let n:number  =0 
    for(var index in this.listaNums)
  { 
    n += +this.listaNums[index]
  }
    return n
}
  borra():void{
    this.listaNoms.pop()
    this.listaNoms.shift()
    console.log(this.listaNoms.toString())
    this.listaNums.pop()
    this.listaNums.shift()
    console.log(this.listaNums.toString())
  }
}


