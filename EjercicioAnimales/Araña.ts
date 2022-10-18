import { Animal } from "./Animal";

export class Araña extends Animal{
constructor(paramPatas:number){
    super(paramPatas);
}


public comer(): void {

console.log("Esta comiendo");
}


public caminar(patas: number): void {
console.log("Esta caminando en " + patas + " patas"); 
}




}