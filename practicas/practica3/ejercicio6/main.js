function filterRecursive(URL) {
    let unorderedList = document.getElementById('unorderedList');
    if (URL != null && URL != 'https://rickandmortyapi.com/api/episode/?name=' && !URL.includes('page')) {
        while (unorderedList.firstChild != null) {
            unorderedList.removeChild(unorderedList.firstChild);
        }
    }
    if (URL != null && URL != 'https://rickandmortyapi.com/api/episode/?name=') {
        fetch(URL)
            .then(response => response.json())
            .then(response => {
                
                response.results.forEach(element => showEpisodes(element.name, element.air_date, element.episode));
                return response.info.next;
            })
            .then(response => filterRecursive(response))
            .catch(function () { unorderedList.innerHTML = 'The text entered does not match any title' });
    } else if (URL == 'https://rickandmortyapi.com/api/episode/?name='){
        unorderedList.innerHTML = 'The text entered does not match any title'
    }
}

function rickAndMorty() {
    const URL = 'https://rickandmortyapi.com/api/episode';
    rickAndMortyRecursive(URL);
}

function filter() {
    const VALUE = document.getElementById("filter").value;
    const url = 'https://rickandmortyapi.com/api/episode/?name=' + VALUE;
    filterRecursive(url);
}

function rickAndMortyRecursive(URL) {
    if (URL != null) {
        fetch(URL)
            .then(response => response.json())
            .then(response => {
                response.results.forEach(element => showEpisodes(element.name, element.air_date, element.episode));
                return response.info.next;
            })
            .then(response => rickAndMortyRecursive(response))
            .catch(err => console.log(err));
    }
}

function showEpisodes(name, air_date, episode) {
    let listElement = document.createElement('li');
    let br = document.createElement('br');
    listElement.innerHTML = 'Name: ' + name + '<br />Air date: ' + air_date + '<br />Episode: ' + episode;
    let unorderedList = document.getElementById('unorderedList');
    unorderedList.appendChild(listElement);
    unorderedList.appendChild(br);
}

function page() {
    while (unorderedList.firstChild != null) {
        unorderedList.removeChild(unorderedList.firstChild);
    }
    const URL = 'https://rickandmortyapi.com/api/episode?page=' + document.querySelector("select").value; 
    if (URL != null) {
        fetch(URL)
            .then(response => response.json())
            .then(response => response.results.forEach(element => showEpisodes(element.name, element.air_date, element.episode)))
            .catch(err => console.log(err));
    }
}

// como hacer que esto funcione???
// const select = document.getElementById("select");
// select.addEventListener('click', page());