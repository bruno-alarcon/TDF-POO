import { Persona } from "./Persona";
export class Futbolista extends Persona{

    private posicion:string;

    constructor(nombre:string,apellido:string,pasaporte:number ,fechaDeNacimiento:Date ,posicion:string){
        super(nombre,apellido,pasaporte ,fechaDeNacimiento )
        this.posicion=posicion;
    }


    hacerGol(paramFutbolista:Futbolista,paramGol:boolean){
        if(paramGol==true){
            console.log("El jugador " + paramFutbolista.getNombre() + " hizo un gol! \n ");
        }else{console.log("El jugador " + paramFutbolista.getNombre() + " le erro al arco \n ");}
    }

    

    ToString(): string {
        return super.ToString() + " '\n' Posicion: " +  this.posicion + " \n ";
    }

    
}