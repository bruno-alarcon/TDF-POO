import { Libro } from "./Libro";

export class GestorDeLibro{
    private libros = new Array <Libro>;
    private nombre:string;

    constructor(nombre:string){
        this.nombre = nombre;

    }

    esVacio():boolean{
        if(this.libros.length== 0 )
            return true;
        return false;
    }

    cantidadLibros():number{
        return this.libros.length;
    }

    insertarLibro(libro:Libro){
        this.libros.push(libro);
    }

    getLibros():Array<Libro>{
        return this.libros;

    }

    toString():string{
        let resultado:string = this.nombre + "\n";
        for(let i:number = 0;i <this.cantidadLibros();i++){
            resultado += this.libros[i].toString() + '\n\n';

        }

        return resultado;
    }

    consultarLibro(titulo:string):boolean{
        return true


    }

    modificarLibro(titulo:string){

    }

    eliminarLibro(titulo:string){



    }
}