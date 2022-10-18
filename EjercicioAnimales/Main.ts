import { Animal } from "./Animal";
import { ListaDeAnimales } from "./ListaDeAnimales";
import { Gato } from "./Gato";
import { Pez } from "./Pez";
import { Araña } from "./Araña";

let animal1:Gato = new Gato(4,"Kitty");
let animal2:Pez = new Pez(0,"Fish");
let animal3:Araña = new Araña(8);
let animal4:Gato = new Gato(4,"Manchas");

let arrayAnimales:Animal[] = [animal1,animal2,animal3];
let listadoA :ListaDeAnimales = new ListaDeAnimales(arrayAnimales);


let respuesta :boolean;
respuesta = listadoA.buscar(animal4);
console.log("BUSCO EL ANIMAL EN LA LISTA");

if( respuesta === false){

    console.log("EL ANIMAL NO EXISTE");
    listadoA.agregarAnimal(animal4);
    console.log("EL ANIMAL FUE AGREGADO A LA LISTA");

}else{
    console.log("EL ANIMAL YA EXISTE ");
}
console.log("************************************");


console.log(listadoA);

console.log("*************************************");
listadoA.removerAnimal(animal2);
console.log("ELIMINO EL PEZ ");
console.log(listadoA);