// Ejercicio 1

// Verifique qué imprimen estas sentencias

// const elements = [22, 44, 78, -43, 89];

// const point1 = { x: 0.0, y: 0.0 };
// const point2 = { x: 3.0, y: 0.0 };
// const point3 = { x: 0.0, y: 3.0 };

// let triangle = {
//     corners: [point1, point2, point3]
// };

// console.log(JSON.stringify(elements));
// console.log(JSON.stringify(point1));
// console.log(JSON.stringify(triangle));


// Ejercicio 2

// Dada la siguiente asignación

var jsonStr = '['
    + '{"name":"Alice","dob": "2001-03-04T00:00:00.000Z","h": 165,"w": 68},'
    + '{"name":"Robert","dob": "1997-01-31T00:00:00.000Z","h": 170,"w": 88},'
    + '{"name":"Charles","dob": "1978-10-15T00:00:00.000Z","h": 188,"w": 102}, '
    + '{"name":"Lucía","dob": "1955-08-07T00:00:00.000Z","h": 155,"w": 61},'
    + '{"name":"Peter","dob": "1988-03-09T00:00:00.000Z","h": 165,"w": 99},'
    + '{"name":"Lucas","dob": "1910-12-04T00:00:00.000Z","h": 172,"w": 75}]';

// y la función overweightNames que sigue

function overweightNames(people) {
    return people.filter(p => (p.w / Math.pow(p.h / 100, 2)) > 25)
        .map(p => p.name)
        .reduce((n1, n2) => n1 + ", " + n2);
}

// a) Utilice el objeto JSON para invocar overweightNames e imprimir en la consola el resultado que debería ser el que sigue.
//     Robert, Charles, Lucía, Peter, Lucas

let people = JSON.parse(jsonStr);
console.log();
console.log(overweightNames(people))


// b) Imprima en la consola el nombre de la próxima persona en cumplir años.

// function fechaValida(people) {
//     let actualDate = new Date();
//     return (people.dob.getMonth() > actualDate.getDate()) || (people.dob.getMonth() == actualDate.getDate()) && (people.dob.getDate() > actualDate.getDate()) ? true : false;
// }

function nextBirthdayBoy(people) {
    let actualDate = new Date();
    let currentMonth = actualDate.getMonth();
    let dayOfTheCurrentMonth = actualDate.getDate();
    
    let person = people
        .map(p => ({ "name": p.name, "dob": new Date(p.dob) }))
        .filter(p => (p.dob.getMonth() >= currentMonth))
        .reduce((p1, p2) => ((p1.dob.getMonth() < p2.dob.getMonth())
            || ((p1.dob.getMonth() == p2.dob.getMonth()) && (p1.dob.getDate() < p2.dob.getDate()))) ? p1 : p2)
    return person.name;
}

// console.log(overweightNames(JSON.parse(jsonStr)));
console.log(nextBirthdayBoy(JSON.parse(jsonStr)));



