// Ejercicio 1

// Dadas las siguientes definiciones de variables, imprima en la consola el resultado que arroja el operador
// typeof para cada una.

// let a = 1;
// let b = true;
// let c = "Hola";
// let d = null;
// let e;
// let f = 2n ** 60n;
// let g = new Date();
// let h = [1, 2, 3, 4];
// let i = 'Hola';
// let j = { x: 2.0, y: -3.6 };
// let k = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9 -]+)* $ /;

// console.log(typeof a);
// console.log(typeof b);
// console.log(typeof c);
// console.log(typeof d);
// console.log(typeof e);
// console.log(typeof f);
// console.log(typeof g);
// console.log(typeof h);
// console.log(typeof i);
// console.log(typeof j);
// console.log(typeof k);


// Ejercicio 2

// En cada invocación console.log, analice qué valor que debería imprimir.Luego verifique ejecutando el script.

// let a = 25;
// console.log(++a);   // 26
// console.log(a++);   // 26
// console.log(a == '27');     // true
// console.log(a === '27');    // false


// // Ejercicio 3

// // Defina las funciones max, min, avg, sum de manera que reciban un arreglo de números como parámetro.

// function max(values) {
//     return validate(values) ? Math.max(...values) : -32768;
// }

// function min(values) {
//     return validate(values) ? Math.min(...values) : 32767;
// }
// function avg(values) {
//     return validate(values) ? values.reduce((a, b) => a + b) / values.length : 32767;
// }

// function sum(values) {
//     return validate(values) ? values.reduce((a, b) => a + b) : -32768;
// }

// function validate(values) {
//     if ((values.length > 0) && (values.every((value) => typeof value == 'number'))) {
//         return true;
//     }
//     return false;
// }

// // ¿Cómo puede manejar el caso en que el arreglo no tenga ningún elemento ?
// // ¿Cómo puede manejar el caso en que el arreglo contenga un elemento que no sea numérico ?
// //     Realice pruebas con diferentes valores.

// var prices = [1.2, 2, 22, -33, 12, 0.0, "13", Math.PI];
// // var prices = [1, 2, 3, 12, 0, 13];
// var names = ["John", "Paul", "George", "Ringo"];

// console.log(max(prices));
// console.log(min(prices));
// console.log(avg(prices));
// console.log(sum(prices));

// console.log(max(names));
// console.log(min(names));
// console.log(avg(names));
// console.log(sum(names));

// console.log(max([]));
// console.log(min([]));
// console.log(avg([]));
// console.log(sum([]));


// Ejercicio 4

// Dada la siguiente función concat que devuelve la concatenación de dos strings,

// function concat(left, right) {
//     return left.concat(right);
// }

// // ¿qué imprime la siguiente sentencia? JohnPaulGeorgeRingo
// var names = ["John", "Paul", "George", "Ringo"];
// console.log(names.reduce(concat));


// Ejercicio 5

// Implemente la función de igualdad entre arreglos y realice las pruebas que se indican.

// function arrayEquals(a, a2) {
//     if (a === null || a2 === null)
//         return false;
//     if (a === a2)
//         return true;

//     let length = a.length;
//     if (a2.length != length)
//         return false;

//     for (let index = 0; index < a.length; index++) {
//         if (a[index] != a2[index])
//             return false;
//     }
//     return true;
// }

// var a = [1, 2, 3, 4];
// var b = [1, 2, 3, 4];
// var c = [1, 2, 3, 4, 5];
// var d = "Hola";
// var e = null;
// console.log(arrayEquals(a, a));
// console.log(arrayEquals(a, b));
// console.log(arrayEquals(b, c));
// console.log(arrayEquals(e, c));
// console.log(arrayEquals(c, d));
// console.log(arrayEquals(e, e));

// ¿Utilizó == o === para comparar los elementos?
// Nota: dos arreglos son iguales si tienen la misma longitud y elementos iguales en cada posición.


// Ejercicio 6

// Implemente una función que reciba un parámetro y que retorne si es un número entero.

// function isInteger(value) {
//     return Number.isInteger(value);
// }

// isInteger(2); // retorna true
// isInteger(2.0); // retorna true
// isInteger(2.1); // retorna false
// isInteger(-10); // retorna true
// isInteger([1]); // retorna false
// isInteger("2"); // retorna false
// isInteger(true); // retorna false
// isInteger(null); // retorna false
// var num;
// isInteger(num); // retorna false

// console.log(isInteger(2));
// console.log(isInteger(2.0));
// console.log(isInteger(2.1));
// console.log(isInteger(-10));
// console.log(isInteger([1]));
// console.log(isInteger("2"));
// console.log(isInteger(true));
// console.log(isInteger(null));
// console.log(isInteger(num));


// Ejercicio 7

// Implemente una función que reciba un String y retorne si es numérico.

// function isNumeric(value) {
//     return (typeof value == 'string') && !isNaN(value);
// }

// isNumeric("2"); // retorna true
// isNumeric("2a"); // retorna false
// isNumeric(2); // retorna false

// console.log(isNumeric("2"));
// console.log(isNumeric("2a"));
// console.log(isNumeric(2));


// Ejercicio 8

// Dadas las siguientes asignaciones.

// var prices = {
//     MILK: 48.90,
//     BREAD: 90.50,
//     BUTTER: 130.12
// };

// var amounts = {
//     MILK: 1,
//     BREAD: 0.5,
//     BUTTER: 0.2
// }

// // Verifique qué devuelven las siguientes expresiones

// console.log(typeof prices); // Object
// console.log(prices.BREAD);  // 90.5
// console.log(amounts["MILK"]); // 1

// // Implemente una función que retorne el valor total de amounts de acuerdo a los valores de prices
// // suponiendo que prices tiene los precios por unidad(kilo o litro) y amounts tiene la cantidad comprada de
// // cada producto.

// function total(prices, amounts) {
//     let keys = Object.keys(amounts)
//     let total = 0;
//     for (let index = 0; index < keys.length; index++) {
//         total = total + prices[keys[index]] * amounts[keys[index]];
//     }
//     return total;
// }

// console.log(total(prices, amounts)); // imprime 120.174

// // Verifique el resultado de la siguiente invocación

// var amounts2 = {
//     BREAD: 1.5
// };

// console.log(total(prices, amounts2)); // imprime 135.75


// Ejercicio 9

// Dado el siguiente arreglo de palabras, imprímalo en orden alfbético y en orden alfabético inverso.

// var words = ['perro', 'gato', 'casa',
//     'árbol', 'nube', 'día', 'noche',
//     'zanahoria', 'babuino'];

// words.sort((a, b) => a.localeCompare(b));
// console.log(words);
// words.reverse();
// console.log(words);


// // Ejercicio 10

// // Dado el arreglo de palabras del ejercicio 9, imprímalo ordenado por la longitud de cada palabra de manera
// // que la primera palabra sería día y la última zanahoria.

// words.sort((a, b) => a.length - b.length);
// console.log(words);


// Ejercicio 11

// Dadas las sentencias que siguen a continuación

// function identity(x) {
//     return x;
// }

// var id = function (x) {
//     return x;
// }

// var iden = x => x;

// var identidad = identity;

// // compruebe el typeof de cada una.

// console.log(typeof identity);
// console.log(typeof id);
// console.log(typeof iden);
// console.log(typeof identidad);

// // Compruebe el resultado de las siguientes sentencias.

// console.log(identity('Hola'));
// console.log(id('Hello'));
// console.log(iden('Buen día'));
// console.log(identidad('Buen día'));


// Ejercicio 12

// Implemente una función equivalente al método reduce de los Arrays(ver ejercicio 4).

// function reduce(array, binaryOperation, initialValue) {
//     for (let index = 0; index < array.length - 1; index++) {
//         initialValue = initialValue + binaryOperation(array[index], array[++index]);
//     }
//     return initialValue;
// }

// // Por ejemplo las siguientes invocaciones a numbers.reduce y reduce deben retornar el mismo valor.

// var numbers = [1, 3, 4, 6, 23, 56, 56, 67, 3,
//     567, 98, 45, 480, 324, 546, 56];

// var sum = (x, y) => x + y;

// console.log(numbers.reduce(sum, 0));
// console.log(reduce(numbers, sum, 0));


// Ejercicio 13

// Dadas las siguientes definiciones de objetos

// var alice = {
//     name: "Alice",
//     dob: new Date(2001, 3, 4),
//     height: 165,
//     weight: 68
// };
// var bob = {
//     name: "Robert",
//     dob: new Date(1997, 0, 31),
//     height: 170,
//     weight: 88
// };
// var charly = {
//     name: "Charles",
//     dob: new Date(1978, 9, 15),
//     height: 188,
//     weight: 102
// };
// var lucy = {
//     name: "Lucía",
//     dob: new Date(1955, 7, 7),
//     height: 155,
//     weight: 61
// };
// var peter = {
//     name: "Peter",
//     dob: new Date(1988, 2, 9),
//     height: 165,
//     weight: 99
// };
// var luke = {
//     name: "Lucas",
//     dob: new Date(1910, 11, 4),
//     height: 172,
//     weight: 75
// };

// var people = [alice, bob, charly, lucy, peter, luke];

// function filterAndMap(filtro, mapeo, people) {
//     return people.filter(filtro).map(mapeo);
// }

// // 1. Implemente una función que devuelva un arreglo con los nombres de las personas con un IMC mayor a 25.

// function majorIndex(people, number) {
//     return bodyMassIndex(people) > number;
// }

// function bodyMassIndex(people) {
//     heightInMeters = people.height * 0.01;
//     return people.weight / (Math.pow(heightInMeters, 2));
// }

// function namesOfOverweightPeople(people) {
//     return filterAndMap(person => majorIndex(person, 25), person => person.name, people);
// }


// // 2. Implemente una función que devuelva un arreglo de las edades de las personas indexado por el
// // nombre de cada una. (Por ejemplo algo de la forma["Bobby": 22, "Mark": 36]).

// function getAge(dob) {
//     const DATE = new Date(new Date().getTime() - dob.getTime());
//     return DATE.getFullYear() - 1970;
// }

// function ages(people) {
//     const INDEXED = people.reduce((acc, el) => ({ ...acc, [el.name]: getAge(el.dob), }), {});
//     return INDEXED;
// }

// // 3. Implemente una función que devuelva un arreglo con el IMC de los mayores de 40.

// function nombresPersonasMayores(people) {
//     return filterAndMap(person => getAge(person.dob) > 40, person => bodyMassIndex(person), people);
// }


// // 4. Implemente una función que devuelva el IMC promedio de todas las personas.

// function bodyMassIndexPromedio(people) {
//     total = people.reduce((acc, el) => acc + bodyMassIndex(el), 0);
//     return total / people.length;
// }


// // 5. Implemente una función que devuelva a la persona más joven.

// function younger(people) {
//     let younger = people[5];
//     people.forEach(person => {
//         if (getAge(person.dob) < getAge(younger.dob)) younger = person
//     });
//     return younger;
// }


// // 6. Implemente una función que devuelva un arreglo de personas ordenado por estatura.

// function sortByHeight(people) {
//     return people.sort((a, b) => a.height - b.height);
// }

// console.log(namesOfOverweightPeople(people));
// console.log(ages(people));
// console.log(nombresPersonasMayores(people));
// console.log(bodyMassIndexPromedio(people));
// console.log(younger(people));
// console.log(sortByHeight(people));

