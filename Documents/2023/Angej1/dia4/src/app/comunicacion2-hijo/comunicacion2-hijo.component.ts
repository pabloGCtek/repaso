import { Component } from '@angular/core';
import { doctor } from '../comunicacion2-padre/doctor';

@Component({
  selector: 'app-comunicacion2-hijo',
  templateUrl: './comunicacion2-hijo.component.html',
  styleUrls: ['./comunicacion2-hijo.component.css']
})
export class Comunicacion2HijoComponent {
  listadocs:doctor[]=[]
  receiveMessage($event: doctor[]) {
   this.listadocs= $event
  }
}
