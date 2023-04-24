import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-un-param-recibe',
  templateUrl: './un-param-recibe.component.html',
  styleUrls: ['./un-param-recibe.component.css']
})
export class UnParamRecibeComponent {
  id:any
  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
  this.id = this.route.snapshot.paramMap.get('id')
  }
}
