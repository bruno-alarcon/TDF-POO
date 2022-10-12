"use strict";
exports.__esModule = true;
exports.SeleccionDeFutbol = void 0;
var SeleccionDeFutbol = /** @class */ (function () {
    function SeleccionDeFutbol(entrenador, futbolistas, masajista, equipo) {
        this.entrenador = entrenador;
        this.futbolistas = futbolistas;
        this.masajista = masajista;
        this.equipo = equipo;
    }
    SeleccionDeFutbol.prototype.getFutbolistas = function () {
        var resultado = "";
        for (var i = 0; i < this.futbolistas.length; i++) {
            resultado += this.futbolistas[i].getNombre() + " , ";
        }
        return "Formacion inicial: " + resultado + " \n ";
    };
    SeleccionDeFutbol.prototype.citarJugador = function (paramJugador) {
        this.futbolistas.push(paramJugador);
        console.log("Felicidades " + paramJugador.getNombre() + " fuiste citado por el entrenador " + this.entrenador.getNombre() + " " + this.entrenador.getApellido() + " para jugar en  la Seleccion Argentina \n ");
    };
    return SeleccionDeFutbol;
}());
exports.SeleccionDeFutbol = SeleccionDeFutbol;
