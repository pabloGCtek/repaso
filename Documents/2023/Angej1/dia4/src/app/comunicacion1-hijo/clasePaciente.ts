export class clasePaciente{
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
    private _dni: string
    public get dni(): string {
        return this._dni
    }
    public set dni(value: string) {
        this._dni = value
    }
    private _telefono: string
    public get telefono(): string {
        return this._telefono
    }
    public set telefono(value: string) {
        this._telefono = value
    }
    private _direccion: string
    public get direccion(): string {
        return this._direccion
    }
    public set direccion(value: string) {
        this._direccion = value
    }
    private _email: string
    public get email(): string {
        return this._email
    }
    public set email(value: string) {
        this._email = value
    }
    constructor(nombre:string,apellidos:string,dni:string,telefono:string,direccion:string,correo:string){
        this._nombre=nombre
        this._apellidos=apellidos
        this._dni=dni
        this._telefono=telefono
        this._direccion=direccion
        this._email=correo
    }
    toString():string{
        return("Datos del paciente Nombre y apelllidos:"+this.nombre+" "+
        this.apellidos+", DNI: "+this.dni+", telefono: "+this.telefono+", Direccion: "+this.direccion+", email: "+this.email)
    }

}