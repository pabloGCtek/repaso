import { Component } from '@angular/core';
import { MiServicioService } from '../mi-servicio.service';

@Component({
  selector: 'app-servicio',
  templateUrl: './servicio.component.html',
  styleUrls: ['./servicio.component.css']
})
export class ServicioComponent {
  constructor(public servicio: MiServicioService) { }
}
