//Opciones para select de mes (1-12)
function addMonths() {
    let selects = document.querySelectorAll('.month')
    selects.forEach(select => {
        for (let i = 1; i <= 12; i++) {
            let option = document.createElement('option');
            option.textContent = i;
            option.value = i;
            select.appendChild(option);
        }
    });
}

function months(select) {
    for (let i = 1; i <= 12; i++) {
        let option = document.createElement('option');
        option.textContent = i;
        option.value = i;
        select.appendChild(option);
    }
}

//Opciones para select de año (1913-2022)
function addYears() {
    let selects = document.querySelectorAll('.year')
    selects.forEach(select => {
        for (let i = 1913; i <= 2022; i++) {
            let option = document.createElement('option');
            option.textContent = i;
            option.value = i;
            select.appendChild(option);
        }
    });
}

function showPrice(data) {
    document.getElementById('price2').value = data.precio;
}

function postFetch() {
    const data = {
        month1: document.getElementById("month1").value,
        month2: document.getElementById("month2").value,
        year1: document.getElementById("year1").value,
        year2: document.getElementById("year2").value,
        price1: document.getElementById("price1").value
    }
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    fetch('/api', options)
        .then(response => response.json())
        .then(json => showPrice(json))
        .catch(err => console.log(err));
}

const changeMonths = () => {
    let month1 = document.getElementById('month1');
    while (month1.firstChild != null) {
        month1.firstChild.remove();
    }
    const year1 = document.getElementById('year1').value;
    if (year1 == 2022) {
        for (let i = 1; i <= 3; i++) {
            let option = document.createElement('option');
            option.textContent = i;
            option.value = i;
            month1.appendChild(option);
        }
    } else {
        months(month1);
    }
}

window.onload = function () {
    addMonths();
    addYears();
}

document.getElementById('year1').addEventListener('change', changeMonths);
document.getElementById('enviar').addEventListener('click', postFetch);