import { Animal } from "./Animal";
import { Mascota } from "./InterfazMascota";

export class Pez extends Animal implements Mascota{
   
    protected nombre:string;



    constructor(paramPatas:number,paramNombre:string){
        super(paramPatas);
        this.nombre = paramNombre;

    }




    public getNombre(): string {
        return this.nombre;
    }
    
    
    public setNombre(nombre: string): void {

        this.nombre=nombre;
    }
    
    public jugar(nombre: string): void {

        console.log(nombre + " esta jugando");
    }


    public comer(): void {
        console.log("Esta comiendo");
    }

    public caminar(patas: number): void {
           this.nadar();
    }
    

    private nadar(){
        console.log("Esta nadando");


    }

}
