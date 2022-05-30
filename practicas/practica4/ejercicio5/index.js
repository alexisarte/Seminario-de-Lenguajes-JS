const express = require('express');
const fs = require('fs');

const app = express();
const PORT = 3000;

const rawdata = fs.readFileSync('./practicas/practica4/ejercicio5/usuarios.json');
const people = JSON.parse(rawdata);

// Middlewares
app.use(express.static('public'));

app.use(express.urlencoded({
    extended: true
}));

//Routes
app.get('/exit', (req, res) => {
    res.send('EXIT!');
});

app.post('/submit-form', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    people.find(p => ((p.username == username) && (p.password == password))) ? res.redirect('/exit') : res.redirect('/'); 
    console.log('Username: ' + username);
    console.log('Password: ' + password);
    res.end();
});

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));