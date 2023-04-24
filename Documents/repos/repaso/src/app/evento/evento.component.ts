import { Component } from '@angular/core';

@Component({
  selector: 'app-evento',
  templateUrl: './evento.component.html',
  styleUrls: ['./evento.component.css']
})
export class EventoComponent {
  hizoClick():void{
    alert("Gracias por pulsar")
  }
  seleccion():void{
    alert("Cambió seleccion")
  }
}
