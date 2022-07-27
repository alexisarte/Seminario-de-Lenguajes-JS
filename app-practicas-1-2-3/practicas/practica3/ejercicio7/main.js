const API_URL = 'https://pokeapi.co/api/v2/';
const QUANTITY = 20;
const PAGE_URL = API_URL + `pokemon/?limit=${QUANTITY}&offset=`;
const COUNT = 1154;

const pokemonList = document.querySelector('.pokemon-list');
const pokemonData = document.querySelector('.pokemon-data');

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
        .then(data => data.results.forEach(element => showPokemonName(element)))
        .catch(err => console.log(err));
}

function showPokemonName(pokemon) {
    const name = document.createElement('li');
    name.textContent = pokemon.name;
    name.addEventListener('click', showPokemon);
    pokemonList.appendChild(name);
}

function showPokemon() {
    while (pokemonData.firstChild != null) {
        pokemonData.removeChild(pokemonData.firstChild);
    }
    fetchPokemon(this.textContent);
    document.querySelector('#pokemon-container2').style.visibility = 'visible';
}

function createPokemon(pokemon) {
    const card = document.createElement('div');
    const sprite = document.createElement('img');
    sprite.src = pokemon.sprites.front_default;
    const name = document.createElement('p');
    name.id = 'pokemonName';
    name.textContent = pokemon.name;

    // habilidades
    const abilitiesText = document.createElement('p');
    abilitiesText.innerHTML = 'Abilities: ';
    pokemon.abilities.forEach(a => abilitiesText.innerHTML += a.ability.name + ', ');

    // peso y altura
    const pokemonWandH = document.createElement('p');
    pokemonWandH.innerHTML = `Weight: ${pokemon.weight} height: ${pokemon.height}`;

    //Appends
    card.appendChild(sprite);
    card.appendChild(name);
    card.appendChild(abilitiesText);
    card.appendChild(pokemonWandH);

    pokemonData.appendChild(card);
}

function pages() {
    let options = document.querySelector('.options');
    for (let i = 0; i < COUNT / QUANTITY; i++) {
        let option = document.createElement('option');
        option.value = i;
        option.textContent = 'Page ' + (i + 1);
        options.appendChild(option);
    }
}

function pokemonsList() {
    let options = document.querySelector('.options');
    pokemonList.innerHTML = '';
    let url = PAGE_URL + options.value * QUANTITY;
    fetchPokemons(url);
}

window.onload = () => {
    fetchPokemons(`${PAGE_URL}0`);
    pages();
    let options = document.querySelector('.options');
    options.addEventListener('change', pokemonsList);
    document.querySelector('.buttons').addEventListener('click', e => {
        const items = document.querySelectorAll('li');
        let index = 0;
        for (let i = 0; i < items.length; i++) {
            if (items[i].textContent === window.pokemonName.textContent) {
                index = i;
            }
        }
        while (pokemonData.firstChild != null) {
            pokemonData.removeChild(pokemonData.firstChild);
        }
        e.target.id === 'next' ? index++ : index--;
        console.log('ID', e.target.id);
        console.log('index', index);
        fetchPokemon(items[index].textContent);
    });
};
