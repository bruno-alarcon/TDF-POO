"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Entrenador = void 0;
var Persona_1 = require("./Persona");
var Entrenador = /** @class */ (function (_super) {
    __extends(Entrenador, _super);
    function Entrenador(nombre, apellido, pasaporte, fechaDeNacimiento, paramTitulo) {
        var _this = _super.call(this, nombre, apellido, pasaporte, fechaDeNacimiento) || this;
        _this.titulo = paramTitulo;
        return _this;
    }
    Entrenador.prototype.cambiarJugador = function (jugador1, jugador2) {
        console.log("Entrenador: Entra a la cancha " + jugador1.getNombre() + " sale de la cancha " + jugador2.getNombre() + " \n ");
    };
    Entrenador.prototype.darIndicacionesDeAtaque = function () {
        console.log("Entrenador: ¡Equipo vamos a atacar mas por las bandas! \n ");
    };
    Entrenador.prototype.darIindicacionesDeDefensa = function () {
        console.log("Entrenador: ¡Equipo vamos a retrasarnos y defender el resultado! \n ");
    };
    Entrenador.prototype.ToString = function () {
        return _super.prototype.ToString.call(this) + " '\n' Titulo: " + this.titulo + " \n ";
    };
    return Entrenador;
}(Persona_1.Persona));
exports.Entrenador = Entrenador;
