import { Component } from '@angular/core';
import { CRUDService } from '../crud.service';
import { claseFactura } from '../models/claseFactura';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  cont:number=1
  constructor(public crud: CRUDService) { }
  factura:claseFactura = new claseFactura()
  returnBusca:string=""
  idBusca:number=1
  idBorra:number=1
  aux:any

  crear():void{
    this.factura.idFactura=this.cont;
    this.cont++;
    this.crud.insertar(this.factura)
    this.factura=new claseFactura()
  }
  
  buscar():void{
    this.aux = this.crud.read(this.idBusca)
    if(this.aux.idFactura !=undefined){
      this.returnBusca = ("Factura encontrada con Id:"+this.aux.idFactura+", id del cliente: "+this.aux.idCliente+", importe total: "+this.aux.totalFactura)
    }else{
      this.returnBusca="Ninguna factura encontrada"
    }
  }
  borrar():void{
    this.crud.delete(this.idBorra)
  }
  actualizar():void{
    this.crud.update(this.factura)
    this.factura=new claseFactura()
  }
}
