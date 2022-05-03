function fetchRickAndMorty() {
    fetch('https://rickandmortyapi.com/api/episode')
        .then(response => response.json())
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

function filter() {
    let VALUE = document.querySelector("filter").value;
    let url = 'https://rickandmortyapi.com/api/episode/?name=' + VALUE;
    while (unorderedList.firstChild != null) {
        unorderedList.removeChild(unorderedList.firstChild);
    }
    fetchRickAndMorty(url);
}

window.addEventListener('load', fetchRickAndMorty);
