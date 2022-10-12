import {Futbolista} from "./Futbolista";
import { Masajista } from "./Masajista";
import { Entrenador } from "./Entrenador";


export class SeleccionDeFutbol{
    private entrenador:Entrenador;
    private futbolistas : Futbolista[];
    private masajista:Masajista;
    private equipo:string;

    constructor(entrenador:Entrenador,futbolistas:Futbolista[],masajista:Masajista,equipo:string){

       this.entrenador=entrenador; 
       this.futbolistas = futbolistas;
       this.masajista=masajista;
       this.equipo=equipo;
       

    }

    
getFutbolistas():string{
    let resultado :string= "";
    for(let i:number=0;i<this.futbolistas.length;i++){
        resultado +=this.futbolistas[i].getNombre() + " , ";
}  
        return  "Formacion inicial: " + resultado  + " \n ";

}

citarJugador(paramJugador:Futbolista):void{
    this.futbolistas.push(paramJugador);
    console.log("Felicidades " + paramJugador.getNombre() + " fuiste citado por el entrenador " + this.entrenador.getNombre() + " " + this.entrenador.getApellido() + " para jugar en  la Seleccion Argentina \n ");

}









}
