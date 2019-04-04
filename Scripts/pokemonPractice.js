import { pokemon } from '../data/pokemon.js'




  
  // const deleteForM = (name) =>{
  //   let end = name.lastIndexOf('-')
   
  //   let start = end -2
  //   if(name.charAt(start)==='-'){
  //     start ++
  //   }
  //  console.log(start + " " + end)
  // }


  const mainContainer = document.querySelector('.container')

  function createPokeCard(pokeData){
    let card = document.createElement('div')
    let title = document.createElement('h2')
    
    title.textContent = pokeData.name + " " + pokeData.id
    card.appendChild(title)
    mainContainer.appendChild(card)
  }

pokemon.forEach(singleMon=>{
  fetch(singleMon.url)
    .then(function(response){
      return response.json()
    })
    .then(function(myJson){
      createPokeCard(myJson)
    })
})
fetch("https://pokeapi.co/api/v2/pokemon/32/")
  .then(function(response_2){
    return response_2.json()
  })
  .then(function(myJson_2){
    console.log(myJson)
  })


  