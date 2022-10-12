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
exports.Futbolista = void 0;
var Persona_1 = require("./Persona");
var Futbolista = /** @class */ (function (_super) {
    __extends(Futbolista, _super);
    function Futbolista(nombre, apellido, pasaporte, fechaDeNacimiento, posicion) {
        var _this = _super.call(this, nombre, apellido, pasaporte, fechaDeNacimiento) || this;
        _this.posicion = posicion;
        return _this;
    }
    Futbolista.prototype.hacerGol = function (paramFutbolista, paramGol) {
        if (paramGol == true) {
            console.log("El jugador " + paramFutbolista.getNombre() + " hizo un gol! \n ");
        }
        else {
            console.log("El jugador " + paramFutbolista.getNombre() + " le erro al arco \n ");
        }
    };
    Futbolista.prototype.ToString = function () {
        return _super.prototype.ToString.call(this) + " '\n' Posicion: " + this.posicion + " \n ";
    };
    return Futbolista;
}(Persona_1.Persona));
exports.Futbolista = Futbolista;
