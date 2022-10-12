"use strict";
exports.__esModule = true;
exports.Persona = void 0;
var Persona = /** @class */ (function () {
    function Persona(paramNombre, paramApellido, paramPasaporte, paramFechaDeNacimiento) {
        this.nombre = paramNombre;
        this.apellido = paramApellido;
        this.pasaporte = paramPasaporte;
        this.fechaDeNacimiento = paramFechaDeNacimiento;
    }
    Persona.prototype.getNombre = function () {
        return this.nombre;
    };
    Persona.prototype.getApellido = function () {
        return this.apellido;
    };
    Persona.prototype.getPasaporte = function () {
        return this.pasaporte;
    };
    Persona.prototype.getfechaDeNacimiento = function () {
        return this.fechaDeNacimiento.toLocaleDateString();
    };
    Persona.prototype.setNombre = function (paramNombre) {
        this.nombre = paramNombre;
    };
    Persona.prototype.setApellido = function (paramApellido) {
        this.apellido = paramApellido;
    };
    Persona.prototype.setPasaporte = function (paramPasaporte) {
        this.pasaporte = paramPasaporte;
    };
    Persona.prototype.setfechaDeNacimiento = function (paramFechaDeNacimiento) {
        this.fechaDeNacimiento = paramFechaDeNacimiento;
    };
    Persona.prototype.ToString = function () {
        return " '\n' --Datos de la persona -- '\n' Nombre: " + this.nombre + "'\n' Apellido: " + this.apellido + "'\n' Pasaporte: " + this.pasaporte + "'\n' Fecha de nacimiento: " + this.fechaDeNacimiento.toLocaleDateString();
    };
    return Persona;
}());
exports.Persona = Persona;
