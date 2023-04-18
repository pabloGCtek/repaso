export class pedido{
    private _idPedido: number
    public get idPedido(): number {
        return this._idPedido
    }
    public set idPedido(value: number) {
        this._idPedido = value
    }
    private _idCliente: number
    public get idCliente(): number {
        return this._idCliente
    }
    public set idCliente(value: number) {
        this._idCliente = value
    }
    private _nombreCliente: string
    public get nombreCliente(): string {
        return this._nombreCliente
    }
    public set nombreCliente(value: string) {
        this._nombreCliente = value
    }

    private _totProductos: number
    public get totProductos(): number {
        return this._totProductos
    }
    public set totProductos(value: number) {
        this._totProductos = value
    }
    private _importe: number
    public get importe(): number {
        return this._importe
    }
    public set importe(value: number) {
        this._importe = value
    }
    constructor(idPedido:number,idCliente:number,nombre:string,totProductos:number,importe:number){
        this._idPedido=idPedido
        this._idCliente=idCliente
        this._nombreCliente=nombre
        this._totProductos=totProductos
        this._importe=importe
    }

}