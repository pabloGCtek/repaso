import { Injectable } from '@angular/core';
import { claseFactura } from './models/claseFactura';

@Injectable({
  providedIn: 'root'
})
export class CRUDService {
  listaFacturas:claseFactura[]=[]
  
  constructor() { }

  insertar(nueva:claseFactura):void{
    this.listaFacturas.push(nueva)
  }

  read(id:number):claseFactura{

    let f = this.listaFacturas.find(f => f.idFactura === id)
    if (f != undefined){
      return f
    }
    else{
      return new claseFactura()
    }
    
  }
  delete(id:number):void{
    this.listaFacturas = this.listaFacturas.filter(f => f.idFactura !== id)
  }

  update(factura:claseFactura){
    let f = this.listaFacturas.find(f => f.idFactura === factura.idFactura)
    if (f != undefined){
      this.listaFacturas.splice(this.listaFacturas.indexOf(f),1, factura)
    }else{
    }
  }
}
