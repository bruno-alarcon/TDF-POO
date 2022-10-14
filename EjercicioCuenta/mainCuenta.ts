import { CuentaAhorro } from "./cuentaAhorro";
import { CuentaCorriente } from "./cuentaCorriente";
import { Persona } from "./Persona";


/* Actividad Obligatoria

Define una clase abstracta Cuenta con los siguientes atributos:
NumeroCuenta, saldo, cliente (atributo de la clase Persona (que tiene nombre, apellidos, y DNI))
y con los siguientes métodos:
- Constructor parametrizado que recibe un cliente y un número de cuenta
- Gets y Sets para los tres atributos
- ingresar: permitirá ingresar una cantidad en la cuenta. 
- abstract retirar(number): permitirá sacar una cantidad de la cuenta (si hay saldo). No se implementa, depende del tipo de cuenta  
-abstract actualizarSaldo(): actualizará el saldo de la cuenta, pero cada cuenta lo hace de una forma diferente

Define las subclases de Cuenta que se describen a continuación:  

CuentaCorriente: Cuenta normal con un interés fijo del 1.5%. Incluir constructor parametrizado y método toString().  

CuentaAhorro: Esta cuenta tiene como atributos el interés variable a lo largo del año y un saldo mínimo necesario. Al retirar dinero hay que tener en cuenta que no se sobrepase el saldo mínimo. Incluir constructor parametrizado, método toString() y método para cambiar el interés. 

Crea un programa que cree varias cuentas y pruebe sus características.  */

let alex:Persona = new Persona ("Alex","Perez", 132467676);
let ctaCorrienteAlex: CuentaCorriente = new CuentaCorriente(alex,567778);
let ctaAhorroAlex : CuentaAhorro = new CuentaAhorro(alex,456776);


let fabricio:Persona= new Persona("Fabricio" , "Gonzalez", 3674532)
let ctaCorrienteFabricio = new CuentaCorriente(fabricio,2345);
let ctaAhorroFabricio= new CuentaAhorro(fabricio,6785);


console.log("**********************************************");
console.log("Alex ingresa $1000 a su cuenta de Ahorro")
ctaAhorroAlex.ingresarDinero(1000);
ctaAhorroAlex.setInteres(2);
ctaAhorroAlex.actualizarSaldo();
console.log("Ingresa 2 de interes");
console.log(ctaAhorroAlex.getSaldo());
console.log("Ingresa su saldo minimo de $700")
ctaAhorroAlex.setSaldoMinimo(700);
console.log("Retira $500 de mi cuenta")
ctaAhorroAlex.retirarSaldo(500);
let saldo:number = ctaAhorroAlex.getSaldo();
console.log("Saldo actual de Alex es : $" + saldo);



console.log("**********************************************");
console.log("**********************************************");
console.log("Fabricio ingresa $20000 a su cuenta corriente");
ctaCorrienteFabricio.ingresarDinero(20000);
console.log("Consulta su saldo actual");
console.log(ctaCorrienteFabricio.getSaldo());
ctaCorrienteFabricio.actualizarSaldo();
console.log("Quiere retirar $40000 ");
ctaCorrienteFabricio.retirarSaldo(40000);


