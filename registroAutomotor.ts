class RegistroAutomotor {

    public listadoDeAutos:Auto []

    constructor(listadoParametro:Auto[]){ 
        this.listadoDeAutos = listadoParametro;
    }


    consultarSiExisteVehiculo(paramAuto:Auto):boolean{
        let respuesta:boolean = false;
        let posicion: number=-1;

        for(let i:number= 0;i<this.listadoDeAutos.length;i++){
            if(this.listadoDeAutos[i].getPatente() === paramAuto.getPatente()){
                posicion = i;
                respuesta = true;
            }
        }
        console.log(posicion);
        return respuesta;

    }


    registrarVehiculo(paramAuto:Auto):void{
        this.listadoDeAutos.push(paramAuto);
    }

    eliminarVehiculo(paramAuto:Auto):void{
        for(let i:number= 0;i<this.listadoDeAutos.length;i++){
            if(this.listadoDeAutos[i].getPatente() === paramAuto.getPatente()){
                this.listadoDeAutos.splice(i,1);
        }
    }

}

    editarVehiculo(posicion:number,patenteParametro:string,modeloParametro:string):void{
        this.listadoDeAutos[posicion].setPatente(patenteParametro) ; 
        this,this.listadoDeAutos[posicion].setModelo(modeloParametro);
}


}

class Auto{
    private patente : string;
    private marca : string;
    private modelo : string;
    private anio : number;

    constructor(patenteParametro:string,marcaParametro:string,modeloParametro:string,anioParametro:number){
        this.patente = patenteParametro;
        this.marca = marcaParametro;
        this.modelo = modeloParametro;
        this.anio = anioParametro;

    }


    public setAnio(paramAnio:number){
        this.anio = paramAnio;
    }

    public getAnio():number{
        return this.anio;

    }

    public setPatente(paramPatente:string){
        this.patente = paramPatente;
    }

    public getPatente():string{
        return this.patente;

    }

    public setMarca(paramMarca:string){
        this.marca = paramMarca;
    }

    public getMarca():string{
        return this.marca;

    }

    public setModelo(paramModelo:string){
        this.modelo = paramModelo;
    }

    public getModelo():string{
        return this.modelo;

    }
}


let auto1:Auto = new Auto("AAA111","Ford","Fiesta",2010);
let auto2:Auto = new Auto("BBB222","Peugeot","206",2008);
let auto3:Auto = new Auto("CCC333","Chevrolet","Corsa",2018);
let auto4:Auto = new Auto("DDD444","Fiat","Cronos",2019);

let arregloDeAutos:Auto[] = [auto1,auto2,auto3,auto4];
let registroAutomotorDeTDF:RegistroAutomotor = new RegistroAutomotor(arregloDeAutos);

let auto5:Auto = new Auto("EEE555","Renault","Clio",2020);


let respuestaRecibida:boolean= registroAutomotorDeTDF.consultarSiExisteVehiculo(auto5);
console.log(respuestaRecibida);
console.log("No existe el vehiculo");
console.log("registro el auto renault");

registroAutomotorDeTDF.registrarVehiculo(auto5);


console.log("respuesta a la segunda consulta");
let respuestaRecibida2:boolean= registroAutomotorDeTDF.consultarSiExisteVehiculo(auto5);
console.log(respuestaRecibida2);
console.log(auto5)

console.log("Edito el modelo renault porque lo registre mal");
registroAutomotorDeTDF.editarVehiculo(4,"FFF666","Stepway");

console.log(auto5);


console.log("Elimino el auto Renault");
registroAutomotorDeTDF.eliminarVehiculo(auto5);

console.log("Consulto nuevamente si existe el auto Renault");

let respuestaRecibida3:boolean  = registroAutomotorDeTDF.consultarSiExisteVehiculo(auto5);
console.log(respuestaRecibida3);
console.log("No existe el vehiculo");




