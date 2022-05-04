function fetchRickAndMorty(url) {
    fetch(url)
        .then(response => {
            if (response.ok) {
                return response.json()
            } else
                throw new function () { unorderedList.innerHTML = 'Sorry, the resource was not found' }
        })
        .then(response => {
            response.results.forEach(element => showEpisodes(element.name, element.air_date, element.episode));
        })
        .catch(err => console.log(err));
}

function showEpisodes(name, air_date, episode) {
    let listElement = document.createElement('li');
    let br = document.createElement('br');
    listElement.innerHTML = 'Name: ' + name + '<br />Air date: ' + air_date + '<br />Episode: ' + episode;
    let unorderedList = document.getElementById('unorderedList');
    unorderedList.appendChild(listElement);
    unorderedList.appendChild(br);
}

function search() {
    let episodeName = document.getElementById("entry").value;   // por qué no funciona queryselector()?
    let url = 'https://rickandmortyapi.com/api/episode/?name=' + episodeName;
    if (episodeName != '') {
        remove();
        fetchRickAndMorty(url);
    } else {
        alert('Ingrese el nombre del episodio a buscar')
    }
}

function remove() {
    while (unorderedList.firstChild != null) {
        unorderedList.removeChild(unorderedList.firstChild);
    }
}

function page() {
    let url = 'https://rickandmortyapi.com/api/episode?page=' + selection.value;
    remove();
    fetchRickAndMorty(url);
}

window.addEventListener('load', fetchRickAndMorty('https://rickandmortyapi.com/api/episode'));
let button = document.querySelector('button');
button.addEventListener('click', search);
let selection = document.querySelector("select");
selection.addEventListener('change', page);