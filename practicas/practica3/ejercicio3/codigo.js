// Ejercicio 3

// a) Use la función predefinida Fetch para hacer una página HTML que muestre una imagen de temática felina
// obtenida de https://aws.random.cat/meow o de https://api.thecatapi.com/v1/images/search.

const MAX_HEIGHT = 800;
const DELAY_SECONDS = 2;

function michi() {
    //fetch devuelve un objeto promise
    fetch('https://api.thecatapi.com/v1/images/search')
        .then(response => response.json())
        .then(cats => cats[0])
        .then(cat => showMeTheCat(cat.url, cat.width, cat.height))
        .catch(err => console.log(err));
    //el metodo Then recibe una funcion callback, que es la funcion que se va a ejecutar cuando se reciba el fetch,
    // por eso es asincronico, no se sabe cuando llegara la informacion pero cuando llegue se ejecuta la funcion
}


//Muestra la imagen recibida de la api, setea el timer para recibir la proxima
function showMeTheCat(url, width, height) {
    //Crea un elemento imagen!!
    let img = document.createElement('img');
    //Manejar los tamaños
    if (height > MAX_HEIGHT) {
        let factor = height / MAX_HEIGHT;
        img.width = width / factor;
        img.height = height / factor;
    } else {
        img.width = width;
        img.height = height;
    }

    //Salvar url en la propiedad src del elemento IMG creado
    img.src = url;

    //salva el elemento frame en una variable llamada frame
    let frame = document.getElementById('frame');


    //Si hay una imagen, quitarla
    while (frame.firstChild != null) {
        frame.removeChild(frame.firstChild);
    }

    //Darle un event listener a la img, cuando se carga ejecuta un settimeout, el timer para generar la proxima imagen
    img.addEventListener('load', function () { setTimeout(michi, DELAY_SECONDS * 1000) });

    //Agregar la nueva imagen
    frame.appendChild(img);
}