import { Component, EventEmitter, Output } from '@angular/core';
import { producto } from 'src/model/producto';
enum tipos{
  alimento,
  perecedero,
  limpieza,
  condimento,
  bebida
}
@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent {
  nextId:number=1
  nombre:string=""
  precio:number=0
  cantidad:number=0
  listaProductos:producto[]=[]
  tipo:tipos = 1
  @Output() messageEvent = new EventEmitter<producto[]>();
  mandaProducto():void{
    this.nextId++;
    this.listaProductos.push(new producto(this.nextId,this.nombre,this.cantidad,this.precio,this.tipo))
  }
}
