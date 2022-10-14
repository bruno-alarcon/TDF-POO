import { Cuenta } from "./Cuenta";
import { Persona } from "./Persona";

export class CuentaCorriente extends Cuenta{
   

    constructor(paramCliente:Persona,paramCuenta:number){
        super(paramCliente,paramCuenta);
        
    }


    retirarSaldo(paramRetiro:number):void{
        if(this.saldo >paramRetiro){
            this.saldo -= paramRetiro;
            console.log("Usted retiro " + paramRetiro);
        }else{
            console.log("Saldo insuficiente");
        }

   
    }

    actualizarSaldo(): void {
        this.saldo= this.saldo * 1.5;
    }


}