/* 10 SEPTIEMBRE
Actividad Obligatoria

Plantear la clase que describiste.
Implementar en TypeScript.
Transpilar el archivo. */
var Celular = /** @class */ (function () {
    function Celular(paramMarca, paramModelo, paramColor, paramSistemaOperativo, paramNumeroCelular, paramBateria, paramPrendidoApagado) {
        this.marca = paramMarca;
        this.modelo = paramModelo;
        this.color = paramColor;
        this.sistemaOperativo = paramSistemaOperativo;
        this.numeroCelular = paramNumeroCelular;
        this.bateria = paramBateria;
        this.prendidoApagado = paramPrendidoApagado;
    }
    Celular.prototype.getMostrarModelo = function () {
        return this.modelo;
    };
    Celular.prototype.getMostrarMarca = function () {
        return this.marca;
    };
    Celular.prototype.getMostrarSistemaOperativo = function () {
        return this.sistemaOperativo;
    };
    Celular.prototype.getMostrarColor = function () {
        return this.color;
    };
    Celular.prototype.getMostrarBateria = function () {
        return this.bateria;
    };
    Celular.prototype.getMostrarNumero = function () {
        return this.numeroCelular;
    };
    Celular.prototype.setCargarCelular = function () {
        if (this.bateria < 100) {
            this.bateria = this.bateria + 10;
        }
        else {
            console.log("El celular ya se cargo completamente");
        }
        return (this.bateria);
    };
    Celular.prototype.prenderApagar = function () {
        if (this.prendidoApagado == true) {
            this.prendidoApagado = false;
            console.log("El celular se apago");
        }
        else {
            console.log("El celular se prendio");
        }
    };
    Celular.prototype.hacerllamada = function (paramNumeroALlamar) {
        console.log("Llamando al numero " + paramNumeroALlamar);
    };
    return Celular;
}());
var celular1 = new Celular("Iphone", "13", "Dorado", "IOS", 2847890765, 60, false);
var respuesta1 = celular1.getMostrarMarca();
console.log("Marca: " + respuesta1);
var respuesta2 = celular1.getMostrarModelo();
console.log("Modelo: " + respuesta2);
var respuesta3 = celular1.getMostrarColor();
console.log("Color: " + respuesta3);
var respuesta4 = celular1.getMostrarSistemaOperativo();
console.log("Sistema Operativo: " + respuesta4);
var respuesta5 = celular1.getMostrarNumero();
console.log("Numero: " + respuesta5);
var respuesta6 = celular1.getMostrarBateria();
console.log("Bateria Actual: " + respuesta6 + " %");
celular1.prenderApagar();
celular1.hacerllamada(467483);
var respuesta7 = celular1.setCargarCelular();
console.log("Actualmente tiene " + respuesta7 + "% de bateria");
var respuesta8 = celular1.setCargarCelular();
console.log("Actualmente tiene " + respuesta8 + "% de bateria");
var respuesta9 = celular1.setCargarCelular();
console.log("Actualmente tiene " + respuesta9 + "% de bateria");
var respuesta10 = celular1.setCargarCelular();
console.log("Actualmente tiene " + respuesta10 + "% de bateria");
var respuesta11 = celular1.setCargarCelular();
console.log("Actualmente tiene " + respuesta11 + "% de bateria");
