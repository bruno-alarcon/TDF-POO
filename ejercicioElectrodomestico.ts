class Electrodomestico{

    private nombre:string;
    private precioBase:number;
    private color:string;
    private consumoEnergetico:boolean;
    private peso:number;

    
    constructor (paramNombre:string,paramPrecioBase:number,paramColor:string,paramConsumoEnergetico:boolean,paramPeso:number){
        this.nombre=paramNombre;
        this.precioBase=paramPrecioBase;
        this.color=paramColor;
        this.consumoEnergetico=paramConsumoEnergetico;
        this.peso=paramPeso;    

    }

    public getObtenerNombre():string{
        return this.nombre;
    }

    public getObtenerPrecio():number{
        return this.precioBase;
    }

    public getObtenerColor():string{
        return this.color;
    }

    public getEsDeBajoConsumo():boolean{
        return this.consumoEnergetico;
    }

    public getObtenerPeso():number{
        return this.peso;
    }

    public setCalcularBalance():string {
        
        let balance:number;
    
         balance =this.precioBase / this.peso
        
         if (balance>3){
            return "Es un producto de alta gama"
         }else{
            return "No es un producto de alta gama"
         }

        }

        public gamaProducto()

}

let heladera = new Electrodomestico("Philco",40000,"Blanco",true,10);


let nombreElectrodomestico:string =heladera.getObtenerNombre()
console.log(nombreElectrodomestico);
