import { Futbolista } from "./Futbolista";
import { Persona } from "./Persona";

export class Masajista extends Persona{
    private titulo:string;



    constructor(nombre:string,apellido:string,pasaporte:number ,fechaDeNacimiento:Date,paramTitulo:string ){
        super(nombre,apellido,pasaporte ,fechaDeNacimiento )
        this.titulo = paramTitulo;
    }



    hacerMasajes(paramJugador:Futbolista):void{
        console.log("Masajista: Realizando masajes al jugador " + paramJugador.getNombre() + " \n ");
    }

    vendarJugador(paramJugador:Futbolista):void{
        console.log("Masajista: Vendando al jugador " + paramJugador.getNombre() + " \n ");
    }

    ToString(): string {
        return super.ToString() + " '\n' Titulo: " +  this.titulo + " \n ";
    }

}
