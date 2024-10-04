//Variables contenedoras
var num1, num2;
//Undifined
var num1 = 50;
console.log(50 + 5);
console.log(num1 + 5);
// resta
num2 = 20;
console.log(num1 - num2);
//divicion 
console.log(250 / num1);
console.log(num1 / num2);
//Modulo
console.log(num1 % num2);
//prueba de procedencia
console.log('prueba de procedencia')
console.log(3 + 5 * 2 - 8)
console.log(3 / 2 + 5 * 4 - 3 + 100 / 2 * 4);
console.log(3 / 2 + 5 * 4 - 3 + 100 / 2 * 4 , "El resultado");
//Operador de composocion o relacionales
//Ejemplos <,>,<=,>=, == y !=
console.log("4 es mayor que 7: ", 4 > 7);
console.log("4 es menor que 7: ", 4 < 7);
console.log("4 es mayor o igual que 7: ", 4 >= 7);
console.log("4 es menor o igual que 7: ", 4 <= 7);
console.log("4 es igual que 7: ", 4 == 7);
console.log("4 es diferente a 7: ", 4 != 7);

//Operadores de asignacion o de igualdad o igualdada vs desiguladad
//=== estricta (verifica el tipo de dato y el valor) 
//== igualdad verifica el valor 
console.log("Igualdad")
console.log(3===3);
console.log(3==="3");
console.log(3==3);
console.log(3=="3");
//Actividad
console.log('Actividad')
var a = 50;
var b = 2;
var c = (a = b);
console.log(a);
console.log(b);
console.log(c);
console.log(16/2/4);
// Nota: las operaciones +, /, -, *, etc son de izquierda a derecha
//las igualdades son de derecha a izquierda.





//funciones en JS
console.log("funciones");
function sumaTres(x){
    console.log(x + 3);
}
sumaTres(5);


//Funciones en JS
// ejemplos1 declarando una funcion sin parametros
function saludar(){
    console.log('Hola como estas, usastes la funcion saludar');
} 
//ejemplo 1 usando la funcion
saludar();
//ejemplo 2 encapsular los ejercicios anteriores




//Ejemplo 1 usando la funcion
saludar();saludar();saludar();saludar();saludar();saludar();saludar();

//Ejemplo 2 Encapsular los ejercicios anteriores
function operacionesComparacion(){
    console.log("4 es mayor que 7: ", 4 > 7);
    console.log("4 es menor que 7: ", 4 < 7);
    console.log("4 es mayor o igual que 7: ", 4 >= 7);
    console.log("4 es nemor o igual que 7: ", 4 <= 7);
    console.log("4 es igual que 7: ", 4 == 7);
    console.log("4 es diferente a 7: ", 4 != 7);
}

operacionesComparacion();

function igualdadExtricta(){
    console.log("Igualdad extricta");
    console.log(3 == 3);
    console.log(3 === 3);
    console.log(3 == "3");
    console.log(3 === "3");
    console.log("BOB ESPONJA");
    console.log(0 == "0");
    console.log(0 == []);
    console.log("0" == []);
    console.log(true == 1);
    console.log("Estrella",false === 0);
}

igualdadExtricta();

function suma(a, b) {
    return a + b;
}

var sumaDos = (x, y) => {
    return x + y;
  }

var rsuma = suma(10,9);
console.log(rsuma);

var rsuma2 = sumaDos(50,60);
console.log(rsuma2);




//cuando se utilizen parametros se utiliza la palabra return 


// function es una palabra reservada y sumaTres es el nombre la funcion 
// dentro del () va el argumento o parametro
// {} son el cuerpo de la funcion 

//Primero
//function sumaTres(x){
//     return x + 3;
//}
//Segundo
//var sumaTres = function(x){
//    return x + 3;
//};
//Tercero
//var sumaTres = (x) => {
//    return x + 3;
//};

var animal = 'caballo';
console.log(animal);










//console.log('hola' + 'camilo');
//var nombre = 'camilo';
//var saludo = 'hola';
//console.log((3+5)*2-8);
// presedencia
//** potencia
// % mod para el resto de una operacion
// / divicion
//* multiplicacion
// 
// + suma
// - resta
// concatenar 