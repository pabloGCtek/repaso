export class claseFactura{
    private _idFactura: any
    private _idCliente: any
    private _totalFactura: any
    iva:number
    constructor(){
        this.iva=21
    }

    
    public get totalFactura(): number {
        return this._totalFactura
    }
    public set totalFactura(value: number) {
        this._totalFactura = value
    }
    
    public get idCliente(): number {
        return this._idCliente
    }
    public set idCliente(value: number) {
        this._idCliente = value
    }

    public get idFactura(): number {
        return this._idFactura
    }
    public set idFactura(value: number) {
        this._idFactura = value
    }
}