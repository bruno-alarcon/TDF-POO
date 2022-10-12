export class Libro{
    private titulo:string;
    private autor:string;
    private genero:string;


    constructor(titulo:string, autor:string,genero?:string){
        this.titulo = titulo;
        this.autor = autor;
        if(genero !=undefined)
        this.genero = genero;

    }


    getTitulo():string{
        return this.titulo;
    }
    

    setTitulo(paramTitulo:string):void{

        this.titulo = paramTitulo;
    }

    getAutor():string{
        return this.autor;
    }

    setAutor(paramAutor:string):void{
        this.autor=paramAutor;
    }


    getGenero():string{
        if(this.genero != undefined)
            return this.genero;

        return " ";
    }


    setGenero(paramGenero:string):void{
        this.genero=paramGenero;
        

    }

    toString():string{
        return "titulo: " + this.titulo + " - Autor: " + this.autor +" - Genero: " +this.genero;
    }
}