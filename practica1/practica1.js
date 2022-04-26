console.log('Hola Mundo');


// Trabajando con strings

let text = 'Lorem ipsum dolor sit amet.';
//console.log(text);

/*function ejercicio6(text) {
    console.log(text.length);
    console.log(text.indexOf('ipsum'));
}

ejercicio6(text);

for (let index = 1; index < 5; index++) {
    console.log(text.charAt(index));
}*/


// Trabajando con numeros

let A = Math.floor(Math.random() * (5 - 2 + 1)) + 2;
let B = Math.floor(Math.random() * (5 - 2 + 1)) + 2;
let C = Math.floor(Math.random() * (5 - 2 + 1)) + 2;

function ejercicio6(A, B, C) {
    let resultado = 1;
    const base = A + B;
    const exponente = C;
    for (let index = 0; index < exponente; index++) {
        resultado = resultado * base;
    }
    console.log('A + B elevado a la C:', resultado);
    console.log('Maximo:', Math.max(A, B, C));
}

// ejercicio6(A, B, C);


// Trabajando con Fechas

let fecha1 = new Date()
let fecha2 = +new Date(1575978300000)

function imprimirFecha(fecha) {
    const fecha1 = new Date(fecha)
    console.log(fecha1.getDate() + '/' + (fecha1.getMonth() + 1) + '/' + fecha1.getFullYear() + ' ' + fecha1.getHours() + ':' + fecha1.getMinutes())
}

function swap(fecha3, fecha4) {
    const fecha1 = new Date(fecha3)
    const fecha2 = new Date(fecha4)
    fecha2.setFullYear(fecha1.getFullYear())
    fecha1.setMonth(fecha2.getMonth())
    imprimirFecha(fecha1)
    imprimirFecha(fecha2)
}

//imprimirFecha(fecha1)
//swap(fecha1, fecha2)

function restarFechas(fecha1, fecha2) {
    return new Date((new Date(fecha1)) - (new Date(fecha2)))
}

imprimirFecha(restarFechas(fecha1, fecha2))
