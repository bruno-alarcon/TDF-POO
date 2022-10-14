import { Persona } from "./Persona";


export abstract class Cuenta{

    protected  nroCuenta:number;
    protected saldo:number;
    protected cliente:Persona ;

    constructor(paramCliente:Persona ,paramCuenta:number){
        this.saldo=0;
        this.cliente = paramCliente;
        this.nroCuenta= paramCuenta;
    }

    public getNroCuenta():number{
        return this.nroCuenta;

    }

    public setNroCuenta(parmamCuenta:number):void{
        this.nroCuenta=parmamCuenta;
    }

    public getCliente():Persona{
        return this.cliente;

    }

    public setCliente(paramCliente:Persona):void{
        this.cliente=paramCliente;

    }

    public getSaldo():number{
        return this.saldo;
    }

    public setSaldo(paramSaldo:number):void{
        this.saldo = paramSaldo;

    }

    public ingresarDinero(paramIngreso:number):void{
        console.log(paramIngreso);
        this.saldo += paramIngreso; 

    }

    public toString():string{
        return "Nombre del cliente: " + this.cliente + " -- Nro. De Cuenta: " + this.nroCuenta + " -- Saldo: " + this.saldo;
    }


    abstract retirarSaldo(paramRetiro:number):void;
    abstract actualizarSaldo():void;





}
