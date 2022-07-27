const API_URL = 'https://pokeapi.co/api/v2/';
const LIMIT = 20;
const PAGE_URL = API_URL + `pokemon/?limit=${LIMIT}&offset=`;
const POKEMONES = 1154;

const $ = s => document.querySelector(s);

function fetchPokemon(name) {
    const url = `${API_URL}pokemon/${name}`;
    fetch(url)
        .then(res => res.json())
        .then(data => {
            createPokemon(data);
        })
        .catch(err => console.log(err));
}

function fetchPokemons(url) {
    fetch(url)
        .then(res => res.json())
        .then(data => {
            data.results.forEach(pokemon => showPokemonName(pokemon.name));
            $('.pokemon-list').addEventListener('click', showPokemon);
        })
        .catch(err => console.log(err));
}

function showPokemonName(pokemonName) {
    const name = document.createElement('li');
    name.textContent = pokemonName;
    $('.pokemon-list').appendChild(name);
}

function removePokemon() {
    const pokemonData = $('.pokemon-data');
    while (pokemonData.firstChild != null) {
        pokemonData.removeChild(pokemonData.firstChild);
    }
}

function showPokemon(e) {
    if (e.target.tagName === 'LI') {
        removePokemon();
        fetchPokemon(e.target.textContent);
        $('#pokemon-container').style.visibility = 'visible';
    }
}

function createPokemon(pokemon) {
    // imagen y nombre
    const imgContainer = document.createElement('div');
    imgContainer.classList.add('img-container');
    const sprite = document.createElement('img');
    sprite.src = pokemon.sprites.front_default;
    const name = document.createElement('p');
    name.id = 'pokemonName';
    name.textContent = pokemon.name;

    // habilidades
    const abilities = document.createElement('p');
    abilities.innerHTML = 'Abilities: ';
    pokemon.abilities.forEach(a => (abilities.innerHTML += a.ability.name + ', '));

    // peso y altura
    const weightAndHeight = document.createElement('p');
    weightAndHeight.innerHTML = `Weight: ${pokemon.weight} height: ${pokemon.height}`;
    imgContainer.appendChild(sprite);

    $('.pokemon-data').append(imgContainer, name, abilities, weightAndHeight);
}

function pages() {
    let options = $('.options');
    for (let i = 0; i < POKEMONES / LIMIT; i++) {
        let option = document.createElement('option');
        option.value = i;
        option.textContent = 'Page ' + (i + 1);
        options.appendChild(option);
    }
}

function pokemonsList() {
    let options = $('.options');
    $('.pokemon-list').innerHTML = '';
    let url = PAGE_URL + options.value * LIMIT;
    fetchPokemons(url);
}

function nextOrPrevious(e) {
    if (e.target.tagName === 'BUTTON') {
        const items = document.querySelectorAll('li');
        let index = 0;
        for (let i = 0; i < items.length; i++) {
            if (items[i].textContent === window.pokemonName.textContent) {
                index = i;
            }
        }
        removePokemon();
        e.target.id === 'next' ? index++ : index--;
        fetchPokemon(items[index].textContent);
    }
}

window.onload = () => {
    fetchPokemons(`${PAGE_URL}0`);
    pages();
    $('.options').addEventListener('change', pokemonsList);
    $('.buttons').addEventListener('click', nextOrPrevious);
};
