// Ejercicio 13

// Dadas las siguientes definiciones de objetos

var alice = {
    name: "Alice",
    dob: new Date(2001, 3, 4),
    height: 165,
    weight: 68
};
var bob = {
    name: "Robert",
    dob: new Date(1997, 0, 31),
    height: 170,
    weight: 88
};
var charly = {
    name: "Charles",
    dob: new Date(1978, 9, 15),
    height: 188,
    weight: 102
};
var lucy = {
    name: "Lucía",
    dob: new Date(1955, 7, 7),
    height: 155,
    weight: 61
};
var peter = {
    name: "Peter",
    dob: new Date(1988, 2, 9),
    height: 165,
    weight: 99
};
var luke = {
    name: "Lucas",
    dob: new Date(1910, 11, 4),
    height: 172,
    weight: 75
};

var people = [alice, bob, charly, lucy, peter, luke];

// 1. Implemente una función que devuelva un arreglo con los nombres de las personas con un IMC mayor a 25.

function majorIndex(people, number) {
    return bodyMassIndex(people) > number;
}

function filterAndMap(filtro, mapeo, people) {
    return people.filter(filtro).map(mapeo);
}

function bodyMassIndex(people) {
    heightInMeters = people.height * 0.01;
    return people.weight / (Math.pow(heightInMeters, 2));
}

function namesOfOverweightPeople(people) {
    return filterAndMap(person => majorIndex(person, 25), person => person.name, people);
}


// 2. Implemente una función que devuelva un arreglo de las edades de las personas indexado por el
// nombre de cada una. (Por ejemplo algo de la forma["Bobby": 22, "Mark": 36]).

function getAge(dob) {
    const DATE = new Date(new Date().getTime() - dob.getTime());
    return DATE.getFullYear() - 1970;
}

function ages(people) {
    const INDEXED = people.reduce((acc, el) => { acc[el.name] = getAge(el.dob); return acc }, []);
    return INDEXED;
}

// 3. Implemente una función que devuelva un arreglo con el IMC de los mayores de 40.

function nombresPersonasMayores(people) {
    return filterAndMap(person => getAge(person.dob) > 40, person => bodyMassIndex(person), people);
}


// 4. Implemente una función que devuelva el IMC promedio de todas las personas.

function bodyMassIndexPromedio(people) {
    total = people.reduce((acc, el) => acc + bodyMassIndex(el), 0);
    return total / people.length;
}


// 5. Implemente una función que devuelva a la persona más joven.

function younger(people) {
    let younger = people[5];
    people.forEach(person => {
        if (getAge(person.dob) < getAge(younger.dob)) younger = person
    });
    return younger;
}


// 6. Implemente una función que devuelva un arreglo de personas ordenado por estatura.

function sortByHeight(people) {
    return people.sort((a, b) => a.height - b.height);
}

console.log(namesOfOverweightPeople(people));
console.log(ages(people));
// console.log(nombresPersonasMayores(people));
// console.log(bodyMassIndexPromedio(people));
// console.log(younger(people));
// console.log(sortByHeight(people));