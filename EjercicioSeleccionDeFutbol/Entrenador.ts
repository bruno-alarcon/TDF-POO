import { Futbolista } from "./Futbolista";
import { Persona } from "./Persona";
import { SeleccionDeFutbol } from "./SeleccionDeFutbol";


export class Entrenador extends Persona {
    private titulo:string;

    constructor(nombre:string,apellido:string,pasaporte:number ,fechaDeNacimiento:Date,paramTitulo){
        super(nombre,apellido,pasaporte ,fechaDeNacimiento )
        this.titulo=paramTitulo;

    }

    cambiarJugador(jugador1:Futbolista,jugador2:Futbolista):void{
        console.log("Entrenador: Entra a la cancha " + jugador1.getNombre() + " sale de la cancha " + jugador2.getNombre() +" \n ");

    }

    darIndicacionesDeAtaque():void{
        console.log("Entrenador: ¡Equipo vamos a atacar mas por las bandas! \n ");
    }

    darIindicacionesDeDefensa():void{
        console.log("Entrenador: ¡Equipo vamos a retrasarnos y defender el resultado! \n ");
    }

    ToString(): string {
        return super.ToString() + " '\n' Titulo: " +  this.titulo + " \n ";
    }



}