const express = require('express');
const fs = require('fs');

const app = express();
const PORT = 3000;

const rawdata = fs.readFileSync('./practicas/practica4/loginForm/usuarios.json');
const people = JSON.parse(rawdata);

// Middlewares
app.use(express.static('practicas\\practica4\\loginForm\\public'));

app.use(express.urlencoded({
    extended: true
}));

//Routes
app.get('/successful', (req, res) => {
    res.send('SUCCESSFUL!');
});

app.post('/submit-form', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    people.find(p => ((p.username == username) && (p.password == password))) ? res.redirect('/successful') : res.redirect('/');
    console.log('Username: ' + username);
    console.log('Password: ' + password);
    res.end();
});

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));