// 1. Implemente una función que devuelva un arreglo con los nombres de las personas con un IMC mayor a 25.

function majorIndex(people, number) {
    return bodyMassIndex(people) >= number;
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

function getAge(person) {
    // Me quedo solo con la fecha de nacimiento y no todo el string
    const dob = person.dob.substring(9, person.dob.length - 1);
    const DATE = new Date(new Date().getTime() - new Date(dob).getTime());
    return DATE.getFullYear() - 1970;
}

function ages(people) {
    return people.reduce((accumulator, current) => { accumulator[current.name] = getAge(current); return accumulator }, {});
}


// 3. Implemente una función que devuelva un arreglo con el IMC de los mayores de 40.

function nombresPersonasMayores(people) {
    return filterAndMap(person => getAge(person) > 40, person => bodyMassIndex(person), people);
}


// 4. Implemente una función que devuelva el IMC promedio de todas las personas.

function bodyMassIndexPromedio(people) {
    total = people.reduce((accumulator, current) => accumulator + bodyMassIndex(el), 0);
    return total / people.length;
}


// 5. Implemente una función que devuelva a la persona más joven.

function younger(people) {
    let younger = people[5];
    people.forEach(person => {
        if (getAge(person) < getAge(younger)) younger = person
    });
    return younger;
}


// 6. Implemente una función que devuelva un arreglo de personas ordenado por estatura.

function sortByHeight(people) {
    return people.sort((a, b) => a.height - b.height);
}

module.exports = {
    overweight_people: namesOfOverweightPeople,
    people_by_age: ages,
    imc_over_40: nombresPersonasMayores,
    average_imc: bodyMassIndexPromedio,
    youngest: younger,
    people_by_height: sortByHeight
}

