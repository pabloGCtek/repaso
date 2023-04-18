import { Component, Input } from '@angular/core';
import { producto } from 'src/model/producto';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent {
  @Input() productosAux:producto[] = []
  listaProds:producto[] = []
  actualiza():void{
    this.listaProds=this.productosAux
  }
}
