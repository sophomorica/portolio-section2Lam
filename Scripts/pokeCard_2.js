import { pokemon } from "../data/pokemon.js"
console.log(pokemon)

const mainContainer = document.querySelector('container')


function createPokeCard(pokeData){
  console.log(pokeData.id)
  let card = document.createElement('div')
  card.className = 'box'
  let figure = document.createElement('figure')
  let caption = document.createElement('figcaption')
  let image = document.createElement('img')
  
  let upperName = pokeData.name.charAt(0).toUppercase() + pokeData.name.slice(1)

  caption.textContent = upperName

  figure.appendChild(image)
  figure.appendChild(figcaption)
  card.appendChild(figure)
  mainContainer.appendChild(card)
}


function fetchSinglePokemon(id){
  fetch(`"https://pokeapi.co/api/v2/pokemon/${id}`)
  .then(response => response.json())
  .then(myJson => createPokeCard(myJson))
}


const newPokemonButton = document.querySelector('button')

newPokemonButton.addEventListener('click', function(){
  let pokemonID = prompt ('Enter an ID of an existing pokemon:')
  if(pokemonID.length ===1){
    pokemonID = '00' + pokemonID
  }
fetchSinglePokemon(pokemonID)
})