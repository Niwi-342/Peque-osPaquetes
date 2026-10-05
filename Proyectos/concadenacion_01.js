/*Clase 1: Concadenación
En esta parte, aconpañaremos el aprendizaje 
con freecodecamp, y cada cambio los publicaremos
 */

//Para entender que es una concadenación, es unir ciertos fragmentos de texto o variables

//de la siguiente forma:

let nombre = "Marcos";
let apellido = "Velazquez"; 

let completo_nombre = nombre + " " + apellido; 
console.log(completo_nombre); //Resultado: Marcos Velazquez

/*La razón por la cuál se elige este " " es simplemente para dar
espacio al Marcos Velazquez, solo por eso lo utilice, ahora la forma de 
concadenación, se da por el signo +, si no agregas en este signo las comillas
pueder ver, que no hay espacio entre la cadena de texto */ 

//La siguiente forma: 

let saludo_hombre = "Holaaa";
saludo_hombre += ", Jonas"; 

console.log(saludo_hombre); 

let amiga = "Jois"; 
amiga += ", Te extraño muchisimo ❤️"; 

console.log(amiga); 

//con +=, también es util para hacerlo más rápido solo que siempre hay que 
//dejar espacio siempre es lo primordial

let saludo_inicial = "Hola a todos! I'm Learning Programing";
let saludo_principal = "Thanks a todos!!!";

let saludo_total = saludo_inicial.concat(" ", saludo_principal);
console.log(saludo_total); //Hola a todos! I'm Learning Programing Thanks a todos!!!

/*Esta es en la forma en la que también podemos en donde incluye un método
con concat(" ", variable), y de esa, según free hay muchas funciones en javascript  */ 

//y esto es todo por hoy 