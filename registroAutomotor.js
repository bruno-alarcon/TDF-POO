var RegistroAutomotor = /** @class */ (function () {
    function RegistroAutomotor(listadoParametro) {
        this.listadoDeAutos = listadoParametro;
    }
    RegistroAutomotor.prototype.consultarSiExisteVehiculo = function (paramAuto) {
        var respuesta = false;
        var posicion = -1;
        for (var i = 0; i < this.listadoDeAutos.length; i++) {
            if (this.listadoDeAutos[i].getPatente() === paramAuto.getPatente()) {
                posicion = i;
                respuesta = true;
            }
        }
        console.log(posicion);
        return respuesta;
    };
    RegistroAutomotor.prototype.registrarVehiculo = function (paramAuto) {
        this.listadoDeAutos.push(paramAuto);
    };
    RegistroAutomotor.prototype.eliminarVehiculo = function (paramAuto) {
        for (var i = 0; i < this.listadoDeAutos.length; i++) {
            if (this.listadoDeAutos[i].getPatente() === paramAuto.getPatente()) {
                this.listadoDeAutos.splice(i, 1);
            }
        }
    };
    RegistroAutomotor.prototype.editarVehiculo = function (posicion, patenteParametro, modeloParametro) {
        this.listadoDeAutos[posicion].setPatente(patenteParametro);
        this, this.listadoDeAutos[posicion].setModelo(modeloParametro);
    };
    return RegistroAutomotor;
}());
var Auto = /** @class */ (function () {
    function Auto(patenteParametro, marcaParametro, modeloParametro, anioParametro) {
        this.patente = patenteParametro;
        this.marca = marcaParametro;
        this.modelo = modeloParametro;
        this.anio = anioParametro;
    }
    Auto.prototype.setAnio = function (paramAnio) {
        this.anio = paramAnio;
    };
    Auto.prototype.getAnio = function () {
        return this.anio;
    };
    Auto.prototype.setPatente = function (paramPatente) {
        this.patente = paramPatente;
    };
    Auto.prototype.getPatente = function () {
        return this.patente;
    };
    Auto.prototype.setMarca = function (paramMarca) {
        this.marca = paramMarca;
    };
    Auto.prototype.getMarca = function () {
        return this.marca;
    };
    Auto.prototype.setModelo = function (paramModelo) {
        this.modelo = paramModelo;
    };
    Auto.prototype.getModelo = function () {
        return this.modelo;
    };
    return Auto;
}());
var auto1 = new Auto("AAA111", "Ford", "Fiesta", 2010);
var auto2 = new Auto("BBB222", "Peugeot", "206", 2008);
var auto3 = new Auto("CCC333", "Chevrolet", "Corsa", 2018);
var auto4 = new Auto("DDD444", "Fiat", "Cronos", 2019);
var arregloDeAutos = [auto1, auto2, auto3, auto4];
var registroAutomotorDeTDF = new RegistroAutomotor(arregloDeAutos);
var auto5 = new Auto("EEE555", "Renault", "Clio", 2020);
var respuestaRecibida = registroAutomotorDeTDF.consultarSiExisteVehiculo(auto5);
console.log(respuestaRecibida);
console.log("No existe el vehiculo");
console.log("registro el auto renault");
registroAutomotorDeTDF.registrarVehiculo(auto5);
console.log("respuesta a la segunda consulta");
var respuestaRecibida2 = registroAutomotorDeTDF.consultarSiExisteVehiculo(auto5);
console.log(respuestaRecibida2);
console.log(auto5);
console.log("Edito el modelo renault porque lo registre mal");
registroAutomotorDeTDF.editarVehiculo(4, "FFF666", "Stepway");
console.log(auto5);
console.log("Elimino el auto Renault");
registroAutomotorDeTDF.eliminarVehiculo(auto5);
console.log("Consulto nuevamente si existe el auto Renault");
var respuestaRecibida3 = registroAutomotorDeTDF.consultarSiExisteVehiculo(auto5);
console.log(respuestaRecibida3);
console.log("No existe el vehiculo");
