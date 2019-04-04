import { pokemon } from '../data/pokemon.js'




  //-----Below is an attempt at editing the pokemon name fetched from the API.  Some of the names have a dash('-') which disrupts the get image function.------------//

  // const deleteForM = (name) =>{
  //   let end = name.lastIndexOf('-')
   
  //   let start = end -2
  //   if(name.charAt(start)==='-'){
  //     start ++
  //   }
  //  console.log(start + " " + end)
  // }

//--------Below is the the functions that add elements to the actual document/HTML site.--------------//


  const mainContainer = document.querySelector('.container')

  function createPokeCard(pokeData){
    let card = document.createElement('div')
    let title = document.createElement('h2')
    let image = document.createElement('img')
    card.className = 'box'
    let upperName = pokeData.name.charAt(0).toUpperCase() + pokeData.name.slice(1)
    title.textContent = upperName
    image.src = pokeData.sprites.front_shiny
    card.appendChild(image)
    card.appendChild(title)
   
    mainContainer.appendChild(card)
  }


//---this sets the initial 25 pokemon found in my pokemon.js file and makes a card for each of the URLs found in the file--------------


pokemon.forEach(singleMon=>{
  fetch(singleMon.url)
    .then(function(response){
      return response.json()
    })
    .then(function(myJson){
      createPokeCard(myJson)
    })
})

//---this is for reference to what is accessable in the array of information---//


fetch("https://pokeapi.co/api/v2/pokemon/32/")
  .then(function(response){
    return response.json()
  })
  .then(function(myJson_2){
    console.log(myJson_2)
  })

//-------below is the code that first creates a fetch function to dig into all of the hidden elements from the api in the URL,--------------


function fetchSinglePokemon(id){
  fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
  .then(function(response){
    return response.json()
  })
  .then(function(myJson){
    createPokeCard(myJson)
  })
}

//----this is the button function that uses the fetch from the api URL then let's you add a new card from the pokemon ID-----------------//


const newPokeButton = document.querySelector('button')

newPokeButton.addEventListener('click', function(){
  let pokemonID = prompt("Enter the number of a Pokemon:")
  fetchSinglePokemon(pokemonID)
})