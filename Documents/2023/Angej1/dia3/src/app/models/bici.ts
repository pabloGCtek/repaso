export class Bici {
    private _color: string
    private _marca: string
    private _velocidad: number
    private _pin: number
    private _plat: number
    private _electrica: boolean


    constructor(color:string,marca:string,velocidad:number,pin:number,plat:number,electrica:boolean){
        this._color = color
        this._marca=marca 
        this._velocidad=velocidad
        this._pin=pin
        this._plat=plat
        this._electrica=electrica
    }

    //methods
    acelera1():void{
        this.velocidad++
    }
    frena1():void{
        if(this.velocidad >0){
            this.velocidad--
        }
    }
    acelera(vel:number):void{
        this.velocidad =this.velocidad+vel
    }
    frena(vel:number):void{
        this.velocidad =this.velocidad-vel
        if(this.velocidad <0){
            this.velocidad =0
        }
    }
    frenazo():void{
            this.velocidad = 0
    }


    info(): string{
        return (this.color+""+this.marca+""+this.velocidad+""+this.pin+""+this.plat+""+this.electrica)
    }
    //getters setters
    public get color(): string {
        return this._color
    }
    public set color(value: string) {
        this._color = value
    }

    public get marca(): string {
        return this._marca
    }
    public set marca(value: string) {
        this._marca = value
    }

    public get velocidad(): number {
        return this._velocidad
    }
    public set velocidad(value: number) {
        this._velocidad = value
    }

    public get pin(): number {
        return this._pin
    }
    public set pin(value: number) {
        this._pin = value
    }

    public get plat(): number {
        return this._plat
    }
    public set plat(value: number) {
        this._plat = value
    }

    public get electrica(): boolean {
        return this._electrica
    }
    public set electrica(value: boolean) {
        this._electrica = value
    }

    
}