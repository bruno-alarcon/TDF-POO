"use strict";
exports.__esModule = true;
var ListaDeAnimales_1 = require("./ListaDeAnimales");
var Gato_1 = require("./Gato");
var Pez_1 = require("./Pez");
var Ara_a_1 = require("./Ara\u00F1a");
var animal1 = new Gato_1.Gato(4, "Kitty");
var animal2 = new Pez_1.Pez(0, "Fish");
var animal3 = new Ara_a_1.Araña(8);
var animal4 = new Gato_1.Gato(4, "Manchas");
var arrayAnimales = [animal1, animal2, animal3];
var listadoA = new ListaDeAnimales_1.ListaDeAnimales(arrayAnimales);
var respuesta;
respuesta = listadoA.buscar(animal4);
console.log("BUSCO EL ANIMAL EN LA LISTA");
if (respuesta === false) {
    console.log("EL ANIMAL NO EXISTE");
    listadoA.agregarAnimal(animal4);
    console.log("EL ANIMAL FUE AGREGADO A LA LISTA");
}
else {
    console.log("EL ANIMAL YA EXISTE ");
}
console.log("************************************");
console.log(listadoA);
console.log("*************************************");
listadoA.removerAnimal(animal2);
console.log("ELIMINO EL PEZ ");
console.log(listadoA);
