const express = require('express');
const app = express();
const PORT = 3000;

const EMAIL = example@gmail.com; 
const USERNAME = pancracio;

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
    if (username == USERNAME && password == PASSWORD) {
        res.redirect('/exit');
    } else {
        res.redirect('/');
    }
    console.log('Username: ' + username);
    console.log('Password: ' + password);
    res.end();
});

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));
