const express = require('express');
const ipc = require('./ipcModule');
const app = express();

//Settings
app.set('appName', 'Dollar calculator')
app.set('port', '3000');

// Middlewares
app.use(express.static('public'));
app.use(express.json({limit: '1mb'}));

//Rutas
app.post('/api', (req, res) => {
    const datos = req.body;
    const datosRes = {precio: ipc.calculatePrice(datos)};
    console.log(datosRes);
    res.json(datosRes);
});

app.listen(app.get('port'), () => {
    console.log(app.get('appName'));
    console.log('Server on port', app.get('port'));
});