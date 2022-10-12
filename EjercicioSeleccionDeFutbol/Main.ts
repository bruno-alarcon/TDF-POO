import { Entrenador } from "./Entrenador";
import { Futbolista } from "./Futbolista";
import { Masajista } from "./Masajista";
import { Persona } from "./Persona";
import { SeleccionDeFutbol } from "./SeleccionDeFutbol";

let fecha1 =new Date(1990,11,18);
let  futbolista1 =new Futbolista ("Bruno","Alarcon",12343,fecha1,"Delantero" );
let fecha2 =new Date(1985,3,8);
let futbolista2 = new Futbolista("Nicolas","Otamendi",11652,fecha2,"Defensor");
let fecha3 =new Date(1990,11,18);
let  futbolista3 =new Futbolista ("Lisandro","Martinez",16566,fecha3,"Defensor" );
let fecha4 =new Date(1998,7,23);
let  futbolista4 =new Futbolista ("Leandro","Paredes",12344,fecha4,"Mediocampista" );
let fecha5 =new Date(1994,5,20);
let  futbolista5 =new Futbolista ("Giovani","LoCelso",15565,fecha5,"Mediocampista" );
let fecha6 =new Date(1988,9,5);
let  futbolista6 =new Futbolista ("Lautaro","Martinez",15455,fecha6,"Delantero" );

let fecha7 =new Date(1960,8,12);
let entrenador1 = new Entrenador("Mauricio","Pochettino",12433,fecha7,"Director Técnico de Futbol Profesional (FIFA)");
let fecha8 =new Date(1974,7,11);
let masajista1=new Masajista("Sergio","Mendez",12121,fecha8,"Fisioterapeuta (Universidad De Tierra del Fuego)");

let arrayFutbolistas= new Array(futbolista2,futbolista3,futbolista4,futbolista5,futbolista6);

let seleccionDeFutbol1= new SeleccionDeFutbol(entrenador1,arrayFutbolistas,masajista1,"Seleccion Argentina");

seleccionDeFutbol1.citarJugador(futbolista1);

console.log(entrenador1.ToString());
console.log(masajista1.ToString());
console.log(seleccionDeFutbol1.getFutbolistas());
futbolista1.hacerGol(futbolista6,false);
masajista1.hacerMasajes(futbolista1);
entrenador1.cambiarJugador(futbolista1,futbolista6);
masajista1.vendarJugador(futbolista6);
entrenador1.darIndicacionesDeAtaque();
futbolista1.hacerGol(futbolista1,true);
entrenador1.darIindicacionesDeDefensa();









