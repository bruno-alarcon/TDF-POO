"use strict";
exports.__esModule = true;
var Entrenador_1 = require("./Entrenador");
var Futbolista_1 = require("./Futbolista");
var Masajista_1 = require("./Masajista");
var SeleccionDeFutbol_1 = require("./SeleccionDeFutbol");
var fecha1 = new Date(1990, 11, 18);
var futbolista1 = new Futbolista_1.Futbolista("Bruno", "Alarcon", 12343, fecha1, "Delantero");
var fecha2 = new Date(1985, 3, 8);
var futbolista2 = new Futbolista_1.Futbolista("Nicolas", "Otamendi", 11652, fecha2, "Defensor");
var fecha3 = new Date(1990, 11, 18);
var futbolista3 = new Futbolista_1.Futbolista("Lisandro", "Martinez", 16566, fecha3, "Defensor");
var fecha4 = new Date(1998, 7, 23);
var futbolista4 = new Futbolista_1.Futbolista("Leandro", "Paredes", 12344, fecha4, "Mediocampista");
var fecha5 = new Date(1994, 5, 20);
var futbolista5 = new Futbolista_1.Futbolista("Giovani", "LoCelso", 15565, fecha5, "Mediocampista");
var fecha6 = new Date(1988, 9, 5);
var futbolista6 = new Futbolista_1.Futbolista("Lautaro", "Martinez", 15455, fecha6, "Delantero");
var fecha7 = new Date(1960, 8, 12);
var entrenador1 = new Entrenador_1.Entrenador("Mauricio", "Pochettino", 12433, fecha7, "Director Técnico de Futbol Profesional (FIFA)");
var fecha8 = new Date(1974, 7, 11);
var masajista1 = new Masajista_1.Masajista("Sergio", "Mendez", 12121, fecha8, "Fisioterapeuta (Universidad De Tierra del Fuego)");
var arrayFutbolistas = new Array(futbolista2, futbolista3, futbolista4, futbolista5, futbolista6);
var seleccionDeFutbol1 = new SeleccionDeFutbol_1.SeleccionDeFutbol(entrenador1, arrayFutbolistas, masajista1, "Seleccion Argentina");
seleccionDeFutbol1.citarJugador(futbolista1);
console.log(entrenador1.ToString());
console.log(masajista1.ToString());
console.log(seleccionDeFutbol1.getFutbolistas());
futbolista1.hacerGol(futbolista6, false);
masajista1.hacerMasajes(futbolista1);
entrenador1.cambiarJugador(futbolista1, futbolista6);
masajista1.vendarJugador(futbolista6);
entrenador1.darIndicacionesDeAtaque();
futbolista1.hacerGol(futbolista1, true);
entrenador1.darIindicacionesDeDefensa();
