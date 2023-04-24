import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dos-param-recibe',
  templateUrl: './dos-param-recibe.component.html',
  styleUrls: ['./dos-param-recibe.component.css']
})
export class DosParamRecibeComponent {
  id:any
  nombre:any
  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
  this.id = this.route.snapshot.paramMap.get('id')
  this.nombre = this.route.snapshot.paramMap.get('nombre')
  }
}
