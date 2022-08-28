const express = require('express');
const fs = require('fs');
const people = require('./peopleModule');

const app = express();
const PORT = 3000;

const rawdata = fs.readFileSync('./people.json');
const p = JSON.parse(rawdata);

// Middlewares
app.use(express.static('public'));

// app.use(express.urlencoded({
//     extended: true
// }));

//Routes
app.get('/', (req, res) => {
    res.send('<h1>Body Mass Index</h1>');
});

app.get('/overweight_people', (req, res) => {
    res.json({ names: people.overweight_people(p) });
});

app.get('/people_by_age', (req, res) => {
    res.json({ ages: people.people_by_age(p) });
});

app.get('/imc_over_40', (req, res) => {
    res.json({ imc_over_40: people.imc_over_40(p) });
});

app.get('/average_imc', (req, res) => {
    res.json({ avg: people.average_imc(p) });
});

app.get('/youngest', (req, res) => {
    res.json({ youngest: people.youngest(p) });
});

app.get('/people_by_height', (req, res) => {
    res.json({ people_by_height: people.people_by_height(p) });
});

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));