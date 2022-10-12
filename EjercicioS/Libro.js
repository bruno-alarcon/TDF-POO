"use strict";
exports.__esModule = true;
exports.Libro = void 0;
var Libro = /** @class */ (function () {
    function Libro(titulo, autor, genero) {
        this.titulo = titulo;
        this.autor = autor;
        if (genero != undefined)
            this.genero = genero;
    }
    Libro.prototype.getTitulo = function () {
        return this.titulo;
    };
    Libro.prototype.setTitulo = function (paramTitulo) {
        this.titulo = paramTitulo;
    };
    Libro.prototype.getAutor = function () {
        return this.autor;
    };
    Libro.prototype.setAutor = function (paramAutor) {
        this.autor = paramAutor;
    };
    Libro.prototype.getGenero = function () {
        if (this.genero != undefined)
            return this.genero;
        return " ";
    };
    Libro.prototype.setGenero = function (paramGenero) {
        this.genero = paramGenero;
    };
    Libro.prototype.toString = function () {
        return "titulo: " + this.titulo + " - Autor: " + this.autor + " - Genero: " + this.genero;
    };
    return Libro;
}());
exports.Libro = Libro;
