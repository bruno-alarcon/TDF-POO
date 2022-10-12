import { GestorDeLibro } from "./GestorDeLibro";
import { Libro } from "./Libro";


let biblioteca = new GestorDeLibro("Biblioteca");

let libro_1= new Libro("Harry Potter 1", "J.K Rowling" , "Fantasia" );

let libro_2= new Libro("Harry Potter 2", "J.K Rowling" , "Fantasia" );

let libro_3= new Libro("Harry Potter 3", "J.K Rowling" , "Fantasia" );

let libro_4= new Libro("Harry Potter 4", "J.K Rowling" , "Fantasia" );

let libro_5= new Libro("Harry Potter 5", "J.K Rowling" , "Fantasia" );


biblioteca.insertarLibro(libro_1);
biblioteca.insertarLibro(libro_2);
biblioteca.insertarLibro(libro_3);
biblioteca.insertarLibro(libro_4);
biblioteca.insertarLibro(libro_5);


console.log(biblioteca.toString());
