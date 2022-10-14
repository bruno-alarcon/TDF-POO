import { InterfazPersona } from "./interfazPersona";

export class Persona implements InterfazPersona{
    protected nombre:string;
    protected apellido:string;
    protected dni:number;
    
    constructor(paramNombre:string,paramApellido:string,paramDni:number){
        this.nombre=paramNombre;
        this.apellido = paramApellido;
        this.dni = paramDni;


    }

    setNombre(paramNombre: string): void {
        this.nombre = paramNombre;
    }
    setApellido(paramApellido: string): void {
        this.apellido=paramApellido;
    }
    getNombre(): string {
        return this.nombre;
    }
    getApellido(): string {
        return this.apellido;        
    }

    getDni():number{
        return this.dni;
    }

    setDni(paramDni):void{
        this.dni=paramDni;
    }

    getNombreCompleto():string{
        let aux = this.nombre + this.apellido;
        return aux;
    }
}
