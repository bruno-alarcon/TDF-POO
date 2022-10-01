class Celular{

    marca:string ;
    modelo:string;
    color:string;
    sistemaOperativo:string;
    numeroCelular:number;
    bateria: number;
    prendidoApagado:boolean;


    constructor(paramMarca:string,paramModelo:string,paramColor:string,paramSistemaOperativo:string,paramNumeroCelular:number,paramBateria:number,paramPrendidoApagado:boolean){
        this.marca = paramMarca;
        this.modelo = paramModelo;
        this.color= paramColor;
        this.sistemaOperativo = paramSistemaOperativo;
        this.numeroCelular = paramNumeroCelular;
        this.bateria= paramBateria;
        this.prendidoApagado= paramPrendidoApagado;

    }

    getMostrarModelo():string{
        return this.modelo;
    }

    getMostrarMarca():string{
        return this.marca;
    }

    getMostrarSistemaOperativo():string{
        return this.sistemaOperativo;
    }

    getMostrarColor():string{
        return this.color;
    }
    getMostrarBateria():number{
        return this.bateria;
    }

    getMostrarNumero():number{
        return this.numeroCelular;
    }

    setCargarCelular():number{
        if(this.bateria<100){
            this.bateria= this.bateria + 10;
        }else {
            console.log("El celular ya se cargo completamente");
        }
         return (this.bateria);
    }

     prenderApagar():void{
        if(this.prendidoApagado==true){
            this.prendidoApagado = false;
            console.log("El celular se apago");
        }else{
            console.log("El celular se prendio");
        }
    }

    hacerllamada(paramNumeroALlamar:number){
        console.log("Llamando al numero " + paramNumeroALlamar);

    }

}

let celular1:Celular = new Celular("Iphone","13","Dorado","IOS",2847890765,60,false);


let respuesta1 :string=celular1.getMostrarMarca();
console.log("Marca: " + respuesta1);
let respuesta2:string=celular1.getMostrarModelo();
console.log("Modelo: " + respuesta2);
let respuesta3:string=celular1.getMostrarColor();
console.log("Color: " + respuesta3);
let respuesta4:string=celular1.getMostrarSistemaOperativo();
console.log("Sistema Operativo: " +respuesta4);

let respuesta5:number=celular1.getMostrarNumero();
console.log("Numero: " + respuesta5);
let respuesta6:number=celular1.getMostrarBateria();
console.log("Bateria Actual: " + respuesta6 +  " %");


celular1.prenderApagar();
celular1.hacerllamada(467483);
let respuesta7:number = celular1.setCargarCelular();
console.log("Actualmente tiene " +respuesta7 + "% de bateria" );
let respuesta8:number = celular1.setCargarCelular();
console.log("Actualmente tiene " +respuesta8 + "% de bateria" );
let respuesta9:number = celular1.setCargarCelular();
console.log( "Actualmente tiene " +respuesta9+ "% de bateria" );
let respuesta10:number = celular1.setCargarCelular();
console.log("Actualmente tiene " +respuesta10 + "% de bateria" );
let respuesta11:number = celular1.setCargarCelular();
console.log("Actualmente tiene " +respuesta11 + "% de bateria" );



 

