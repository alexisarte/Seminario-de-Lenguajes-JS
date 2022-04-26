function rickAndMorty() {
    let link = 'https://rickandmortyapi.com/api/episode';
    rickAndMortyRecursive(link);
}

function rickAndMortyRecursive(link) {
    if (link != null) {
        fetch(link)
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