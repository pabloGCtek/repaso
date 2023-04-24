import { Component } from '@angular/core';

@Component({
  selector: 'app-one-way-binding',
  templateUrl: './one-way-binding.component.html',
  styleUrls: ['./one-way-binding.component.css']
})
export class OneWayBindingComponent {
  ischeck:boolean=true
  cambia():void{
    this.ischeck = !this.ischeck
  }
}
