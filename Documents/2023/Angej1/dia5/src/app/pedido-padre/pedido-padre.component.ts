import { Component } from '@angular/core';
import { pedido } from 'src/model/pedido';

@Component({
  selector: 'app-pedido-padre',
  templateUrl: './pedido-padre.component.html',
  styleUrls: ['./pedido-padre.component.css']
})
export class PedidoPadreComponent {

  listaPedidos:pedido[]=[]

  receiveMessage(array: pedido[]) {
    this.listaPedidos = array
  }
}
