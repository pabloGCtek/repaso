import { Component, EventEmitter, Output } from '@angular/core';
import { pedido } from 'src/model/pedido';

@Component({
  selector: 'app-pedido-hijo',
  templateUrl: './pedido-hijo.component.html',
  styleUrls: ['./pedido-hijo.component.css']
})
export class PedidoHijoComponent {
  cont:number=1
pedido:pedido = new pedido(this.cont,this.cont,"",0,0)
@Output() messageEvent = new EventEmitter<pedido[]>();
listaPedidos:pedido[]=[]
constructor() { }

mandaPaciente():void{
  this.listaPedidos.push(this.pedido)
  
  this.cont++
  this.pedido = new pedido(this.cont,this.cont,"",0,0)
  this.messageEvent.emit(this.listaPedidos);
}
}
