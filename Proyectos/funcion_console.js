/*Hola a todos, esta será una clase especialmente dedicada a la función de console.log
es una función, simple, pero de acuerdo a freecodecamp. Es útil para algunos programadores 
ya que les permite depurar código, permite mostrar los mensajes  */

//como el valor de una variable

let numero_de_serie = (2235);
console.log(numero_de_serie); //justito con el numero de serie

//ahora que tal con una concadenación

const nombre_del_usuario = "Rodríguez";
let apellido_del_usuario = "Mendez"; 

//aquí viene:

const resultado = numero_de_serie + " " + nombre_del_usuario + " " + apellido_del_usuario;
console.log(resultado); // 2235 Rodríguez Mendez 

//o el siguiente método 

let matricula = (34103); 

matricula += " Hola señor, esta es nueva matricula que usted a solicitado, muchas gracias"; 

console.log(matricula);

//provemos con concat: 

let n_de_cedula = (98422); 
let mensaje_usuario = "Lo siento mucho pero esta es la cedula actual"; 
const output = mensaje_usuario.concat(mensaje_usuario," " + " " + n_de_cedula);
console.log(output);

//resultado lo mismo. 