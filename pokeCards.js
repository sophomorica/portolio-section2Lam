import { pokemon } from "./data/pokemon.js"


console.log(pokemon)



const mainContainer = document.querySelector('.container')

  function createPokeCard(pokeData) {
    let card = document.createElement('div')
    let title = document.createElement('h2')

    title.textContent(title) = pokeData.name
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

 