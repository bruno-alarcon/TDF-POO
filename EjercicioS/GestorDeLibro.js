"use strict";
exports.__esModule = true;
exports.GestorDeLibro = void 0;
var GestorDeLibro = /** @class */ (function () {
    function GestorDeLibro(nombre) {
        this.libros = new Array;
        this.nombre = nombre;
    }
    GestorDeLibro.prototype.esVacio = function () {
        if (this.libros.length == 0)
            return true;
        return false;
    };
    GestorDeLibro.prototype.cantidadLibros = function () {
        return this.libros.length;
    };
    GestorDeLibro.prototype.insertarLibro = function (libro) {
        this.libros.push(libro);
    };
    GestorDeLibro.prototype.getLibros = function () {
        return this.libros;
    };
    GestorDeLibro.prototype.toString = function () {
        var resultado = this.nombre + "\n";
        for (var i = 0; i < this.cantidadLibros(); i++) {
            resultado += this.libros[i].toString() + '\n\n';
        }
        return resultado;
    };
    GestorDeLibro.prototype.consultarLibro = function (titulo) {
        return true;
    };
    GestorDeLibro.prototype.modificarLibro = function (titulo) {
    };
    GestorDeLibro.prototype.eliminarLibro = function (titulo) {
    };
    return GestorDeLibro;
}());
exports.GestorDeLibro = GestorDeLibro;
