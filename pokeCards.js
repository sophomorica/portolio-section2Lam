import { pokemon } from "./data/pokemon.js/"


console.log(pokemon)



const mainContainer = document.querySelector('.container')

  function createPokeCard(pokeData) {
    let card = document.createElement('div')
    card.className = 'box'
    let title = document.createElement('h2')
    let image = document.createElement('img')
    

    title.textContent(title) = pokeData.name
    image.src = pokeData.sprites.front_shiny
    card.appendChild(card)
  }

pokemon.forEach(singleMon => {
  fetch(singleMon.name)
  .then(function(response){
    return response.json()
  })
 .then(function(myJson){
   console.log(myJson)
 })
})

 