/*La clase 2: Tratara sobre let y const pero mas, profundo 
en la clase 1 (variables2 y variables) */ 

//como mencione antes let se puede reasignar su valor

let puntos_total = ("100 puntos en total ganados");
console.log(puntos_total); // 100 puntos en total ganados

puntos_total = ("0 puntos, sin puntos");
console.log(puntos_total); //ambas formas, se imprimieron

//ahora los const o constantes

const max_puntaje = 100; 
console.log(max_puntaje); //100 

/*max_puntaje = 222;
console.log(max_puntaje);*/ //TypeError: Assignment to constant variable.
// nos muestra error, ya que una vez declarada con const, ya no se puede cambiar

//la ventaja con let es que puede cambiar mas tarde.
//ejem:

 let lista_de_compras;
 lista_de_compras = ('leche, pan, cafe');
 console.log(lista_de_compras); //tal para cual leche, pan etc.

 //let es muy amigable mientras que const, nunca cambia 

 //ahora no puedes  redeclararla 

 //let numero_telefono = (99993423222); 
 //let numero_telefono = (87732419740);

 //console.log(numero_telefono);//SyntaxError: Identifier 'numero_telefono' has already been declared
 //error  

 //ahora los conts no pueden dejarse indefinidos

 //const valores; //error

 var hola = ("Hola");
console.log(hola);
 var hola = ("Chao")
 console.log(hola); // bueno var si permite redeclarar variables, pero ambos se imprime
 // ahora en bucles y funciones y condicionales, causa ciertos problemas, ya que escapa de sus limites 
 hola = ("Mi nombre");
 console.log(hola); //no pasa nada, igual se puede cambiar de valor y todo
 //clase 2 finalizada 