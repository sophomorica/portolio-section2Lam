import { pokemon } from "../data/pokemon.js"


console.log(pokemon)



const mainContainer = document.querySelector('.container')

  function createPokeCard(pokeData) {
    let card = document.createElement('div')
    card.className = 'box'
    let title = document.createElement('h2')
    let image = document.createElement('img')
    
    let upperName = pokeData.name.charAt(0).toUpperCase()+ pokeData.name.slice(1)
    title.textContent = upperName
    image.src = pokeData.sprites.front_shiny
    card.appendChild(title)
    card.appendChild(image)
    mainContainer.appendChild(card)
  }

pokemon.forEach(singleMon => {
  fetch(singleMon.url)
  .then(function(response){
    return response.json()
  })
 .then(function(myJson){
 createPokeCard(myJson)
 })
})

 