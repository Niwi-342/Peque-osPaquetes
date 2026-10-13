/* Hola a todos Buenos días, hoy es un gran lunes, para entrar en un poco de contexto
en este día, realizaremos ciertos ejercicios, para consolidar lo aprendido con freecodecamp.org
brevemente les pasaré de que trata la plataforma, lo que estaremos consolidando hoy, será en la parte 
de la Introducción, de como se declará una variable, los tipos de datos, y en fin  
*/ 

//Práctica 1: Variables y tipos de datos. 

let Goku = "SuperSajajin"; 

let Vegeta = "Amigo de Goku, y también super Sajajin"; 

console.log(Goku);
console.log(Vegeta); 

/*Para explicar un poco, en mi github tengo una rama llamada Master, en donde explico lo que son
las variables. Y los tipos de datos, ahora. Lo que hice fue crear 2 variables, en donde almacenara 
el valor de: Goku y Vegeta, y les añadí una descripción en forma de string (cadena o texto) */ 

//Concadenación: 
/* La concadenación seria, la unión de ambas variables, les muestro los siguientes métodos utilizados
y la forma de hacerlo en forma de práctica.
 */

let nivel_fuerza_Goku = 100; 
let nivel_fuerza_Vegeta = 109; 

let ambas_fuerzas = nivel_fuerza_Goku + " " + nivel_fuerza_Vegeta; 

console.log(ambas_fuerzas); // Resultado: 100 109 

// Otra forma o método: 

let Jin_Woo = "Jugador del sistema"; 
Jin_Woo += (", tiene 24 años y quiere ser fuerte");

console.log(Jin_Woo); //Jugador del sistema, tiene 24 años y quiere ser fuerte

//tuve un pequeño al declarar, ya que const, no permite modificaciones o redeclaraciones 

//Último método: 

let frizer = "Villano"; 
let nivel_de_maldad = 124;
let muestra = frizer.concat(" ", nivel_de_maldad); 

const resultado_de_ambos = frizer.concat(" ",nivel_de_maldad); 
console.log(resultado_de_ambos); // Resultado: Villano 124  

//Tipo de datos: 

let numeros = (1, 3, 4); //Numeros enteros
let numeros_decimales = (1.3, 4,3);
let string = ("Hola esto es un texto, con valor string"); 
let booleanos = true; 
let booleanos_2 = false; 

let nada = null; //Nada no posee nada
let indefinida; // No pesee definición 

//fin de la práctica 1 
