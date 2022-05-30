const express = require('express');
const app = express();
const PORT = 3000;

const USERNAME = 'admin@mail.com';
const PASSWORD = '1234';

// Middlewares
app.use(express.static('practicas\\practica4\\loginForm\\public'));

app.use(express.urlencoded({
    extended: true
}));

//Routes
app.get('/successful', (req, res) => {
    res.send('SUCESSFUL!');
});

app.post('/submit-form', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    ((username == USERNAME) && (password == PASSWORD)) ? res.redirect('/successful') : res.redirect('/');
    console.log('Username: ' + username);
    console.log('Password: ' + password);
    res.end();
});

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));