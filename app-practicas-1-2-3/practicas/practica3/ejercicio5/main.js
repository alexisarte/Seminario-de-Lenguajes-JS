function fetchRickAndMorty(url) {
    fetch(url)
        .then(response => {
            if (response.ok) {
                return response.json()
            } else 
                throw new function () { unorderedList.innerHTML = 'The text entered does not match any title' }
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
    while (unorderedList.firstChild != null) {  // let como variable global??
        unorderedList.removeChild(unorderedList.firstChild);
    }
    fetchRickAndMorty(url);
}

window.addEventListener('load', fetchRickAndMorty('https://rickandmortyapi.com/api/episode'));
let button = document.querySelector('button');
button.addEventListener('click', search);
