import { pokemon } from "../data/pokemon.js";

class Pokemon {
  constructor(id) {
    this.id = id;
  }
}

const mainContainer = document.querySelector(".container");

function createPokeCard(pokeData) {
  let card = document.createElement("div")
  card.className = "box"
  let figure = document.createElement("figure")
  let caption = document.createElement("figcaption")
  let image = document.createElement("img")

  // let upperName = pokeData.name.charAt(0).toUppercase() + pokeData.name.slice(1)

caption.textContent = pokeData.name;

  if (pokeData.id !== 0) {
    image.src = `../PokeImages/images/${pokeData.imageID}${pokeData.name}.png`;
  } else {
    image.src = `../PokeImages/images/pokeball.png`;
  }

    figure.appendChild(image)
    figure.appendChild(caption)
    card.appendChild(figure)
    mainContainer.appendChild(card)

}

function fetchSinglePokemon(id) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(function(response) {
      return response.json();
    })
    .then(function(retrievePokemon) {
      console.log(retrievePokemon.id);
      if (retrievePokemon.id < 10) {
        retrievePokemon.imageID = "00" + retrievePokemon.id;
      }

      if (retrievePokemon.id > 9 && retrievePokemon.id < 100) {
        retrievePokemon.imageID = "0" + retrievePokemon.id;
      }
      if (retrievePokemon.id > 99) {
        retrievePokemon.imageID = retrievePokemon.id;
      }
      retrievePokemon.name = retrievePokemon.name.charAt(0).toUpperCase() + retrievePokemon.name.slice(1);
      createPokeCard(retrievePokemon);
    });
}

const newPokemonButton = document.querySelector("button");

newPokemonButton.addEventListener("click", function() {
  let pokemonID = prompt("Enter an ID of an existing pokemon:");
  fetchSinglePokemon(pokemonID);
});
