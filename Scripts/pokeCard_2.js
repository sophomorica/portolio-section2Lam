import { pokemon } from "../data/pokemon.js";

class Pokemon {
  constructor(id) {
    this.id = id;
  }
}

const mainContainer = document.querySelector(".container");

function cardFront(pokeData){

}

function createPokeCard(pokeData) {
  let card = document.createElement("div")
  card.className = "box"
  let figure = document.createElement("figure")
  let caption = document.createElement("figcaption")
  let image = document.createElement("img")

  // let upperName = pokeData.name.charAt(0).toUppercase() + pokeData.name.slice(1)

caption.textContent = pokeData.name;

  if (pokeData.id !== 0) {
    image.src = `../images/${pokeData.imageID}${pokeData.name}.png`;
  } else {
    image.src = `../images/pokeball.png`;
  }

    figure.appendChild(image)
    figure.appendChild(caption)
    card.appendChild(figure)
    mainContainer.appendChild(card)

}

function matchIdToImage(aPokemon){
  if (aPokemon.id < 10) {
    aPokemon.imageID = "00" + aPokemon.id;
  }

  if (aPokemon.id > 9 && aPokemon.id < 100) {
    aPokemon.imageID = "0" + aPokemon.id;
  }
  if (aPokemon.id > 99) {
    aPokemon.imageID = aPokemon.id;
  }
  aPokemon.name = aPokemon.name.charAt(0).toUpperCase() + aPokemon.name.slice(1);
  return aPokemon
}

pokemon.forEach(singleMon => {
  fetch(singleMon.url)
  .then(function(response){
    return response.json()
  })
  .then(function(myJson){
    createPokeCard(matchIdToImage(myJson))
  })
})



function fetchSinglePokemon(id) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(function(response) {
      return response.json();
    })
    .then(function(matchIdToImage) {
      console.log(matchIdToImage.id);
      if (matchIdToImage.id < 10) {
        matchIdToImage.imageID = "00" + matchIdToImage.id;
      }

      if (matchIdToImage.id > 9 && matchIdToImage.id < 100) {
        matchIdToImage.imageID = "0" + matchIdToImage.id;
      }
      if (matchIdToImage.id > 99) {
        matchIdToImage.imageID = matchIdToImage.id;
      }
      matchIdToImage.name = matchIdToImage.name.charAt(0).toUpperCase() + matchIdToImage.name.slice(1);
      createPokeCard(matchIdToImage);
    });
}

const newPokemonButton = document.querySelector("button");

newPokemonButton.addEventListener("click", function() {
  let pokemonID = prompt("Enter an ID of an existing pokemon:");
  fetchSinglePokemon(pokemonID);
});
