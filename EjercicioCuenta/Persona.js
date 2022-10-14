"use strict";
exports.__esModule = true;
exports.Persona = void 0;
var Persona = /** @class */ (function () {
    function Persona(paramNombre, paramApellido, paramDni) {
        this.nombre = paramNombre;
        this.apellido = paramApellido;
        this.dni = paramDni;
    }
    Persona.prototype.setNombre = function (paramNombre) {
        this.nombre = paramNombre;
    };
    Persona.prototype.setApellido = function (paramApellido) {
        this.apellido = paramApellido;
    };
    Persona.prototype.getNombre = function () {
        return this.nombre;
    };
    Persona.prototype.getApellido = function () {
        return this.apellido;
    };
    Persona.prototype.getDni = function () {
        return this.dni;
    };
    Persona.prototype.setDni = function (paramDni) {
        this.dni = paramDni;
    };
    Persona.prototype.getNombreCompleto = function () {
        var aux = this.nombre + this.apellido;
        return aux;
    };
    return Persona;
}());
exports.Persona = Persona;
