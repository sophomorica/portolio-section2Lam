import { pokemon } from '../scripts/pokemon.js'

const mainContainer = document.querySelector('.container')

function cardFront(pokeData) {
    let cardFront = document.createElement('div')
    cardFront.className = 'card__face card__face--front'
    let figure = document.createElement('figure')
    let caption = document.createElement('figcaption')
    let image = document.createElement('img')

    caption.textContent = pokeData.name
    if(pokeData.id !== 0) {
        image.src = `../images/${pokeData.imageID}${pokeData.name}.png`
    } else {
        image.src = `../images/pokeball.png`
    }
    
    figure.appendChild(image)
    figure.appendChild(caption)
    cardFront.appendChild(figure)
    return cardFront
}

function cardInfo(pokeData) {
    let infoDiv = document.createElement('div')
    infoDiv.className = 'infoDiv'
    let moveOne = document.createElement('p')
    let moveTwo = document.createElement('p')
    let moveThree = document.createElement('p')
    let moveFour = document.createElement('p')

    moveOne.textContent = pokeData.moves[0].move.name
    moveTwo.textContent = pokeData.moves[1].move.name
    moveThree.textContent = pokeData.moves[2].move.name
    moveFour.textContent = pokeData.moves[3].move.name
    
    infoDiv.appendChild(moveOne)
    infoDiv.appendChild(moveTwo)
    infoDiv.appendChild(moveThree)
    infoDiv.appendChild(moveFour)
    return infoDiv
}

function cardBack(pokeData) {
    let cardBack = document.createElement('div')
    let backImage = document.createElement('img')
    backImage.className = 'backImage'
    backImage.src = './pics/pokeball5.jpg'
    cardBack.className = 'card__face card__face--back'
    cardBack.appendChild(backImage)
    cardBack.appendChild(cardInfo(pokeData))
    return cardBack
}

function createPokeCard(pokeData) {
    let scene = document.createElement('div')
    scene.className = 'scene'
    let card = document.createElement('div')
    card.className = 'card'
    
    card.addEventListener( 'click', function() {
    card.classList.toggle('is-flipped');
    })

    card.appendChild(cardFront(pokeData))
    card.appendChild(cardBack(pokeData))

    scene.appendChild(card)
    mainContainer.appendChild(scene)
}

const allFetchedPokemon = []

pokemon.forEach(singleMon => {
    fetch(singleMon.url)
    .then(function(response) {
      return response.json()
    })
    .then(function(myJson) {
        allFetchedPokemon.push(myJson)
      createPokeCard(matchIdToImage(myJson))
    })
})

function matchIdToImage(aPokemon) {
    if (aPokemon.id === 0) {
        aPokemon.imageID = 0
    }
    if(aPokemon.id < 10) {
        aPokemon.imageID = "00" + aPokemon.id
    }
    if(aPokemon.id > 9 && aPokemon.id < 100 ) {
        aPokemon.imageID = "0" + aPokemon.id
    }
    if(aPokemon.id > 99) {
        aPokemon.imageID = aPokemon.id
    }

    if(aPokemon.name === "mr-mime") {
        aPokemon.name = "mr. Mime"
    }

    let dashIndex = aPokemon.name.indexOf('-')
    if (dashIndex !== -1) {
        // Found a few pokemon who have a dash in their name
        aPokemon.name = aPokemon.name.slice(0, dashIndex)
    }
    aPokemon.name = aPokemon.name.charAt(0).toUpperCase() + aPokemon.name.slice(1)
    return aPokemon
}

function fetchSinglePokemon(id) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then(function(response) {
        return response.json()
    })
    .then(function(retrievedPokemon) {
        createPokeCard(matchIdToImage(retrievedPokemon))
    })
}

class Pokemon {
    constructor(name) {
        this.id = 0,
        this.name = name,
        this.moves = [
          {
            move: {
              name: 'Falcon Punch',
            },
          },
          {
            move: {
              name: 'Fire Kick',
            },
          },
          {
            move: {
              name: 'Bouncing Blade',
            },
          },
          {
            move: {
              name: 'Shunpo',
            },
          },
        ]
    }
  }

const jagomonButton = document.querySelector('#jagomon')
const selectPokemonButton = document.querySelector('#fetchPokemon')
const poketypeButton = document.querySelector('#poketype')

jagomonButton.addEventListener('click', function() {
    createPokeCard(matchIdToImage(new Pokemon('jagomon')))
})

selectPokemonButton.addEventListener('click', function() {
    let pokemonID = prompt('Enter an ID of an existing pokemon:')
    fetchSinglePokemon(pokemonID)
})

poketypeButton.addEventListener('click', function() {
    const poisonTypes = allFetchedPokemon.filter(pokemon => pokemon.types[0].type.name === "poison")

console.log(poisonTypes)
})


// const newPokemonButton = document.querySelector('button')

// newPokemonButton.addEventListener('click', function() {
    
//     let pokeName = prompt('Enter a Name of an existing pokemon:')
//     createPokeCard(new Pokemon(pokeName))
//     // let pokemonID = prompt('Enter an ID of an existing pokemon:')
//     // fetchSinglePokemon(pokemonID)
//     // if (pokemonID.length ===1){
//     //   pokemonID ="00" +pokemonID
//     // }
//   });