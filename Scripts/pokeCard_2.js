import { pokemon } from "../data/pokemon.js";


//-----trying to delete the dash m---------//

// const deleteForM = (name) =>{
//   let end = name.lastIndexOf('-')
 
//   let start = end -2
//   if(name.charAt(start)==='-'){
//     start ++
//   }
//  console.log(start + " " + end)
// }
//--------^^^^^trying to delete the dash^^^^^------------//

// foo = "nidorant-m" index = foo.indexOf('-') name = foo.slice(0, index)

const mainContainer = document.querySelector(".container");

function cardFront(pokeData){
  let cardFront = document.createElement("div")
  cardFront.className = 'card__face'
  let figure = document.createElement("figure")
  let caption = document.createElement("figcaption")
  let image = document.createElement("img")
  
  caption.textContent = pokeData.name;
  if (pokeData.id !== 0) {
    image.src = `../images/${pokeData.imageID}${pokeData.name}.png`;
  } else {
    image.src = `../images/pokeball.png`;
  }

    figure.appendChild(image)
    figure.appendChild(caption)
    cardFront.appendChild(figure)
    return cardFront
}
function cardBackInfo(pokeData){

  let infoDiv= document.createElement('div')
  infoDiv.className = 'infoDiv'
  let move1 = document.createElement('p')
  let move2 = document.createElement('p')
  let move3 = document.createElement('p')
  let move4 = document.createElement('p')


  move1.textContent = pokeData.moves[0].move.name
  move2.textContent = pokeData.moves[1].move.name
  move3.textContent = pokeData.moves[2].move.name
  move4.textContent = pokeData.moves[3].move.name
  infoDiv.appendChild(move1)
  infoDiv.appendChild(move2)
  infoDiv.appendChild(move3)
  infoDiv.appendChild(move4)

  return infoDiv

}
function cardBack(pokeData){
  let cardBack = document.createElement('div')
  let backImage = document.createElement('img')
  backImage.ClassName = 'backImage'
  backImage.src = `../images/pokeball.png`
  cardBack.className = 'card__face card__face--back'
  cardBack.appendChild(backImage)
  cardBack.appendChild(cardBackInfo(pokeData))
  return cardBack
}


function createPokeCard(pokeData) {
  let scene = document.createElement('div')
  scene.className = 'scene'
  let card = document.createElement("div")
  card.className = 'card'

  card.appendChild(cardFront(pokeData))
  card.appendChild(cardBack(pokeData))

  card.addEventListener( 'click', function() {
  card.classList.toggle('is-flipped');
});
  scene.appendChild(card)
  mainContainer.appendChild(scene)
}
const allFetchedPokemon = []

pokemon.forEach(singleMon => {
  fetch(singleMon.url)
  .then(function(response){
    return response.json()
  })
  .then(function(myJson){
    allFetchedPokemon.push(myJson)
    createPokeCard(matchIdToImage(myJson))
  }) 
})

function matchIdToImage(aPokemon){
  if (aPokemon.id === 0){
    aPokemon.id = 0
  }
  
  if (aPokemon.id < 10) {
    aPokemon.imageID = "00" + aPokemon.id;
  }

  if (aPokemon.id > 9 && aPokemon.id < 100) {
    aPokemon.imageID = "0" + aPokemon.id;
  }
  if (aPokemon.id > 99) {
    aPokemon.imageID = aPokemon.id;
  }
  //----this is trying to erase from the dash onwards
  let dashIndex = aPokemon.name.indexOf("-")
  if (dashIndex !== -1){
  
    //^^ this is trying to erase the dash------//
    aPokemon.name = aPokemon.name.slice(0, dashIndex)
  }
  aPokemon.name = aPokemon.name.charAt(0).toUpperCase() + aPokemon.name.slice(1);
  return aPokemon

}

function fetchSinglePokemon(id) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(function(response) {
      return response.json();
    })
    .then(function(aPokemon) {
  
      createPokeCard(matchIdToImage(aPokemon));
    });
}

class Pokemon {
  constructor(name) {
    this.id = 0;
    this.name = name
    this.moves = [
      {
        move: {
          name: "genius",
        },
      },{
        move: {
          name: "The Best"
        },
      },
      {
        move: {
          name: "Booyah"
        },
      },{
        move: {
          name: "slam-dunk"
        },
      },
    ]
  }
}

const newPokemonButton = document.querySelector("button");

newPokemonButton.addEventListener("click", function() {

  let pokeName = prompt("Enter a name for a new pokemon:");
  createPokeCard(new Pokemon(pokeName))
  fetchSinglePokemon(pokemonID);
});



const newPokemonButtonFetch = document.querySelector("button_2")

newPokemonButtonFetch.addEventListener('click',function(){
  let pokemonID = prompt('Enter the ID of an existing Pokemon:')
  fetchSinglePokemon(pokemonID)
})
// const newPokemonButtonFetch = document.querySelector('button_2')
//   newPokemonButtonFetch.addEventListener('click', function() {
//     let pokemonID = prompt('Enter an ID of an existing pokemon:')
//     fetchSinglePokemon(pokemonID)
//   });
