const fs = require('fs');
const rawdata = fs.readFileSync('./bls.json');
const bls = JSON.parse(rawdata);

function findIpc(month, year){
    return bls.find(e => ((e.month == month) && (e.year == year))).value;
}

function calculatePrice(datos){
    const ipc1 = findIpc(datos.month1, datos.year1);
    const ipc2 = findIpc(datos.month2, datos.year2);
    return datos.price1 * (ipc2/ipc1);
}

module.exports = {
    calculatePrice
}