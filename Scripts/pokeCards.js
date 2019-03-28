import { pokemon } from "../data/pokemon.js"

class Pokemon {
  constructor(id){
      this.id= id
  }
}

console.log(pokemon)
//hello my name is patrick
//coming to myself


const mainContainer = document.querySelector('.container')

function createPokeCard(pokeData) {
  let card = document.createElement('div')
  card.className = 'box'
  let figure = document.createElement('figure')
  let caption = document.createElement('figcaption')
  // let title = document.createElement('h2')
  let image = document.createElement('img')
  
  let upperName = pokeData.name.charAt(0).toUpperCase()+ pokeData.name.slice(1)

  caption.textContent = upperName
  image.src = pokeData.sprites.front_shiny
  if(pokeData.id !==0){
      image.src = `../PokeImages/images/${pokeData.id}${upperName}.png`
  } else {
    image.src = `../PokeImages/images/pokeball.png`
  }
  figure.appendChild(image )
  figure.appendChild(caption)
  card.appendChild(figure)
  
  mainContainer.appendChild(card)
}

// pokemon.forEach(singleMon => {
//   fetch(singleMon.url)
//   .then(function(response){
//     return response.json()
//   })
//  .then(function(myJson){
//   createPokeCard(myJson)
//  })
// })

//this is the same as above but better
function fetchSinglePokemon(id){
  fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
  .then(response => response.json())
  .then(myJson => createPokeCard(myJson))
}
 const newPokemonButton = document.querySelector('button')
 newPokemonButton.addEventListener('click', function(){
   let pokemonID = prompt('Enter the ID of an existing Pokemon')
   fetchSinglePokemon(pokemonID)
   if(pokemonID.length ===1){
     pokemonID = "00" + pokemonID
   }
   
  //  createPokeCard( new Pokemon(pokemonID))
 });