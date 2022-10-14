"use strict";
exports.__esModule = true;
exports.Cuenta = void 0;
var Cuenta = /** @class */ (function () {
    function Cuenta(paramCliente, paramCuenta) {
        this.saldo = 0;
        this.cliente = paramCliente;
        this.nroCuenta = paramCuenta;
    }
    Cuenta.prototype.getNroCuenta = function () {
        return this.nroCuenta;
    };
    Cuenta.prototype.setNroCuenta = function (parmamCuenta) {
        this.nroCuenta = parmamCuenta;
    };
    Cuenta.prototype.getCliente = function () {
        return this.cliente;
    };
    Cuenta.prototype.setCliente = function (paramCliente) {
        this.cliente = paramCliente;
    };
    Cuenta.prototype.getSaldo = function () {
        return this.saldo;
    };
    Cuenta.prototype.setSaldo = function (paramSaldo) {
        this.saldo = paramSaldo;
    };
    Cuenta.prototype.ingresarDinero = function (paramIngreso) {
        console.log(paramIngreso);
        this.saldo += paramIngreso;
    };
    Cuenta.prototype.toString = function () {
        return "Nombre del cliente: " + this.cliente + " -- Nro. De Cuenta: " + this.nroCuenta + " -- Saldo: " + this.saldo;
    };
    return Cuenta;
}());
exports.Cuenta = Cuenta;
