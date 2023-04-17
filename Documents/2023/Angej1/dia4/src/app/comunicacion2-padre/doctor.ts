export class doctor{
    private _nombre: string
    public get nombre(): string {
        return this._nombre
    }
    public set nombre(value: string) {
        this._nombre = value
    }
    private _apellidos: string
    public get apellidos(): string {
        return this._apellidos
    }
    public set apellidos(value: string) {
        this._apellidos = value
    }
    private _credula: number
    public get credula(): number {
        return this._credula
    }
    public set credula(value: number) {
        this._credula = value
    }
    private _imagen: string
    public get imagen(): string {
        return this._imagen
    }
    public set imagen(value: string) {
        this._imagen = value
    }
    constructor(nombre:string,apellidos:string,credula:number,imagen:string){
        this._nombre=nombre
        this._apellidos=apellidos
        this._credula=credula
        this._imagen=imagen
    }   
}
