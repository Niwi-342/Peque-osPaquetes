/*Hola a todos!! hoy estaré hablando sobre los tipos de datos
(clase 4 o 5 en fin) en donde explicaré que son los tipos datos
y en que aplican */

/*Recuerdan los ejemplos sobre las variables, sobre lo que almacenan
y su función, en fin, la variable seria el contenedor de un dato, asignado
como un numero, sea decimal, entero, negativo, estos serian del tipo Number, ahora
estan los textos, que almacena en forma de textos, "" atraves de las comillas
para que pueda comprenderse mejor, mostraré la forma en la que se pueden asignar */

const numero = 1; //un entero 
let numero_decimal = 24.3; //un decimal, al los decimales se le dicen floats
numero_decimal = -43.5; // un decimal negativo

let mensaje = ("Tengo nuevos commits"); //Un string o texto
mensaje = ('O con comillas simples'); // de ambas formas

//y por ahora los Boolean, te dicen que es True, verdadero, y que es False, falso

let a = true;
let b = false;

console.log(a); //True
console.log(b);  // False 

/*Ahora hay ciertos tipos de datos más complejos */
//BigInt
//Object, Symbol, Undefined, null

let _Identificación = null; // Declaro que la variables no posee nada absolutamente nada

console.log(_Identificación); //null

let limpio; 
console.log(limpio); //undefined o sea no definida, no posee un valor 

//object

{
    nombre = "Cloude"
    modelo = "GPT"
    parametros = 3.2
};

//no lo imprimo jeje ya que solo se un poco de object

Symbol("Mi única etiqueta especial"); //Symbol es un tipo de dato que crea, o asigna valores unicos, para etiquetas o identificadores

// BigInt

let ip = 234347578353435563553n; //este valor de BigInt, es para normalmente para números grandes

console.log(ip); // el numero 

//y así termina la clase anterior (sorry)