var Electrodomestico = /** @class */ (function () {
    function Electrodomestico(paramNombre, paramPrecioBase, paramColor, paramConsumoEnergetico, paramPeso) {
        this.nombre = paramNombre;
        this.precioBase = paramPrecioBase;
        this.color = paramColor;
        this.consumoEnergetico = paramConsumoEnergetico;
        this.peso = paramPeso;
    }
    Electrodomestico.prototype.getObtenerNombre = function () {
        return this.nombre;
    };
    Electrodomestico.prototype.getObtenerPrecio = function () {
        return this.precioBase;
    };
    Electrodomestico.prototype.getObtenerColor = function () {
        return this.color;
    };
    Electrodomestico.prototype.getEsDeBajoConsumo = function () {
        return this.consumoEnergetico;
    };
    Electrodomestico.prototype.getObtenerPeso = function () {
        return this.peso;
    };
    Electrodomestico.prototype.setCalcularBalance = function () {
        var balance;
        balance = this.precioBase / this.peso;
        if (balance > 3) {
            return "Es un producto de alta gama";
        }
        else {
            return "No es un producto de alta gama";
        }
    };
    return Electrodomestico;
}());
var heladera = new Electrodomestico("Philco", 40000, "Blanco", true, 10);
var nombreElectrodomestico = heladera.getObtenerNombre();
