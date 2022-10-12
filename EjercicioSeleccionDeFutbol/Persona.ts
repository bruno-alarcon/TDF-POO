 export class Persona{
    protected nombre:string;
    protected apellido:string;
    protected pasaporte:number;
    protected fechaDeNacimiento:Date; 
    


    constructor(paramNombre:string,paramApellido:string,paramPasaporte:number ,paramFechaDeNacimiento:Date){
        this.nombre=paramNombre;
        this.apellido=paramApellido;
        this.pasaporte=paramPasaporte;
        this.fechaDeNacimiento=paramFechaDeNacimiento;



        }

        getNombre():string{
            return this.nombre;
        }

        getApellido():string{
            return this.apellido;
        }

        getPasaporte():number{
            return this.pasaporte;
        }

        getfechaDeNacimiento():string{
            return this.fechaDeNacimiento.toLocaleDateString();
        }

        setNombre(paramNombre:string):void{
            this.nombre=paramNombre;
        }

        setApellido(paramApellido:string):void{
            this.apellido=paramApellido;
        }

        setPasaporte(paramPasaporte:number):void{
            this.pasaporte=paramPasaporte;
        }
 
        setfechaDeNacimiento(paramFechaDeNacimiento:Date):void{
            this.fechaDeNacimiento=paramFechaDeNacimiento;
        } 

        ToString():string{
            return " '\n' --Datos de la persona -- '\n' Nombre: " + this.nombre + "'\n' Apellido: " + this.apellido + "'\n' Pasaporte: " + this.pasaporte  + "'\n' Fecha de nacimiento: " + this.fechaDeNacimiento.toLocaleDateString() ;
        }

      
    }
