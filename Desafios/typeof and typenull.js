/*Hola a todos, que tal, acá les traigo las siguientes prácticas*/

//La función de typeof

let carro = "Toyota"; 

console.log(typeof carro); //string

/*Para explicar un poco, typeof es un herramienta, en donde puedo utilizar
para saber el tipo de dato de dato, que tiene mi variables, es decir, la variable que le 
asigné. Y es un operador */

//Exercises 

let firsName = false;
let lastName = true;

console.log(typeof firsName); //boolean
console.log(typeof lastName); //boolean

let n_telefonico = 938232222;
console.log(typeof n_telefonico); //number

//Y así sucesivamente

/*Pero hay un detalle en free que presenta, y será en la siguiente declaración */

let ejemplo = null;

console.log(typeof ejemplo); //object

/*Según free, este es un error que se presenta en el lenguaje, y es por la siguiente razón: Desde los primeros comienzos
ciertos valores como null, se tiene como un tipo de valor object, como dice free, es confuso, pero forma parte del lenguaje
y tenemos que ser un poquito concientes de ello */ //Y así terminamos hoy.