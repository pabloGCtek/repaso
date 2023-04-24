import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-hijo2',
  templateUrl: './hijo2.component.html',
  styleUrls: ['./hijo2.component.css']
})
export class Hijo2Component {
  id:any
  @Output() messageEvent = new EventEmitter<number>();
  mandar():void{

    this.messageEvent.emit(this.id);
  }
}
