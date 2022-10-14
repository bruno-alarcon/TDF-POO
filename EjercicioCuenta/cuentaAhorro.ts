import { Cuenta } from "./Cuenta";
import { Persona } from "./Persona";

export class CuentaAhorro extends Cuenta{
     
    protected interes: number;
    protected saldoMinimo:number;

    constructor(paramCliente:Persona,paramCuenta:number){
        super(paramCliente,paramCuenta);

    }

    public getSaldoMinimo():number{
        return this.saldoMinimo;
    }

    public setSaldoMinimo(paramSaldoMinimo:number):void{
        this.saldoMinimo = paramSaldoMinimo;
    }

    public getinteres():number{
        return this.interes;
    }

    public setInteres(paramInteres:number):void{
        this.interes = paramInteres;
    }

    retirarSaldo(paramRetiro: number): void {
        let auxiliar = this.saldo - this.saldoMinimo;

        if(auxiliar>paramRetiro){
            this.saldo -=paramRetiro;
            console.log("Usted retiro: " + paramRetiro);
        }else{
            console.log("Saldo insuficiente");
        }

        
    }

    actualizarSaldo(): void {   
        this.saldo =this.saldo * this.interes;
    }







}