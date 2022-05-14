const apiUrl = "https://pokeapi.co/api/v2/";
const pageUrl = apiUrl + 'pokemon/?limit=20&offset=';

const pokemonList = document.querySelector(".pokemon-list");
const pokemonData = document.querySelector(".pokemon-data");

function fetchPokemon(name) {
    const url = 'https://pokeapi.co/api/v2/pokemon/' + name;
    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            createPokemon(data)
        })
        .catch(err => console.log(err));

}

function fetchPokemons(url) {
    fetch(url)
        .then((res) => res.json())
        .then((data) => data.results.forEach(element => showPokemonName(element)))
        .catch(err => console.log(err));
}

function showPokemonName(pokemon) {
    const name = document.createElement('li');
    name.textContent = pokemon.name;
    name.addEventListener('click', showPokemon);
    pokemonList.appendChild(name);
}

let showPokemon = function () {
    while (pokemonData.firstChild != null) {
        pokemonData.removeChild(pokemonData.firstChild);
    }
    fetchPokemon(this.textContent);
}

function createPokemon(pokemon) {
    const card = document.createElement('div');
    const sprite = document.createElement('img');
    sprite.src = pokemon.sprites.front_default
    const name = document.createElement('p');
    name.classList.add('name');
    name.textContent = pokemon.name;
    card.appendChild(name);
    card.appendChild(sprite);
    pokemonData.appendChild(card);
}

function pages() {
    let options = document.querySelector('.options');
    for (let i = 0; i < 58; i++) {
        let option = document.createElement('option');
        option.value = i;
        option.textContent = 'Page ' + (i + 1);
        options.appendChild(option);
    }
}

function pokemonsList() {
    let options = document.querySelector('.options');
    pokemonList.innerHTML = '';
    let url = pageUrl + options.value * 20;
    fetchPokemons(url);
}

pages();
let options = document.querySelector('.options');
window.addEventListener('load', fetchPokemons('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20'));
options.addEventListener('change', pokemonsList);
