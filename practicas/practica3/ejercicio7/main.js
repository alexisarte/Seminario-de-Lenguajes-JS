const pokemonContainer = document.querySelector(".pokemon-container");

function fetchPokemon(id) {
    const URL = 'https://pokeapi.co/api/v2/pokemon/' + id + '/';
    fetch(URL)
        .then((res) => res.json())
        .then((data) => {
            createPokemon(data)
        })
        .catch(err => console.log(err));

}

function fetchPokemons(number) {
    for (let i = 1; i < number; i++) {
        fetchPokemon(i);
    }
}

function createPokemon(pokemon) {
    const card = document.createElement('div');
    card.classList.add('pokemon-block');

    const spriteContainer = document.createElement('div');
    spriteContainer.classList.add('img-container');

    const sprite = document.createElement('img');
    sprite.src = pokemon.sprites.front_default

    spriteContainer.appendChild(sprite);

    const name = document.createElement('p');
    name.classList.add('name');
    name.textContent = pokemon.name;

    card.appendChild(spriteContainer);
    card.appendChild(name);
    pokemonContainer.appendChild(card);
}

fetchPokemons(10);