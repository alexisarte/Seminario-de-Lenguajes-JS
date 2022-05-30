const express = require('express');
const app = express();
const PORT = 3000;

// Middlewares
app.use(express.static('practicas\\practica4\\loginForm\\public'));

app.use(express.urlencoded({
    extended: true
}));

//Routes
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.post('/submit-form', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    console.log('Username: ' + username);
    console.log('Password: ' + password);
    res.end();
});

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));