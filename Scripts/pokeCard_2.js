import { pokemon } from "../data/pokemon.js";

/** */
const mainContainer = document.querySelector(".container");

function cardFront(pokeData) {
  let cardFront = document.createElement("div");
  cardFront.className = "card__face card__face--front";
  let figure = document.createElement("figure");
  let caption = document.createElement("figcaption");
  let image = document.createElement("img");
  image.className = "pokeImage";

  caption.textContent = pokeData.name;
  if (pokeData.id !== 0) {
    image.src = `../images/${pokeData.imageID}${pokeData.name}.png`;
  } else {
    image.src = `../images/pokeball_1.png`;
  }

  figure.appendChild(image);
  figure.appendChild(caption);
  cardFront.appendChild(figure);
  return cardFront;
}
function cardBackInfo(pokeData) {
  let infoDiv = document.createElement("div");
  infoDiv.className = "infoDiv";

  let move1 = document.createElement("p");
  let move2 = document.createElement("p");
  let move3 = document.createElement("p");
  let move4 = document.createElement("p");

  move1.textContent = pokeData.moves[0].move.name;
  move2.textContent = pokeData.moves[1].move.name;
  move3.textContent = pokeData.moves[2].move.name;
  move4.textContent = pokeData.moves[3].move.name;

  infoDiv.appendChild(move1);
  infoDiv.appendChild(move2);
  infoDiv.appendChild(move3);
  infoDiv.appendChild(move4);

  return infoDiv;
}
function cardBack(pokeData) {
  let cardBack = document.createElement("div");
  let backImage = document.createElement("img");
  let intro = document.createElement("h1");
  let classes = cardBack.classList;
  intro.className = "attack-moves";
  backImage.className = "backImage";
  backImage.src = `../images/pokeball_1.png`;
  intro.textContent = "Pokemon Moves";
  cardBack.className = "card__face card__face--back";

  cardBack.appendChild(intro);
  cardBack.appendChild(backImage);
  cardBack.appendChild(cardBackInfo(pokeData));
  return cardBack;
}

function createPokeCard(pokeData) {
  let scene = document.createElement("div");
  scene.className = "scene";
  let card = document.createElement("div");
  card.className = "card";

  card.addEventListener("click", function() {
    card.classList.toggle("is-flipped");
  });
  card.appendChild(cardFront(pokeData));
  card.appendChild(cardBack(pokeData));


  scene.appendChild(card);
  mainContainer.appendChild(scene);
 
}
const allFetchedPokemon = [];

pokemon.forEach(singleMon => {
  fetch(singleMon.url)
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
      allFetchedPokemon.push(myJson);
      createPokeCard(matchIdToImage(myJson));
    });
});

function matchIdToImage(aPokemon) {
  if (aPokemon.id === 0) {
    aPokemon.imageID = 0;
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

  if (aPokemon.name === "mr-mime") {
    aPokemon.name = "mr_Mime";
  }
  if (aPokemon.name === "mime-jr") {
    aPokemon.name = "mime_jr";
  }

  let dashIndex = aPokemon.name.indexOf("-");
  if (dashIndex !== -1) {
    // Found a few pokemon who have a dash in their name
    aPokemon.name = aPokemon.name.slice(0, dashIndex);
  }
  aPokemon.name =
    aPokemon.name.charAt(0).toUpperCase() + aPokemon.name.slice(1);
  return aPokemon;
}

function fetchSinglePokemon(id) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(function(response) {
      return response.json();
    })
    .then(function(retrievedPokemon) {
      createPokeCard(matchIdToImage(retrievedPokemon));
    });
}

class Pokemon {
  constructor(name,move_1,move_2,move_3,move_4) {
    this.id = 0;
    this.name = name;
    this.moves = [
      {
        move: {
          name: move_1
        }
      },
      {
        move: {
          name: move_2
        }
      },
      {
        move: {
          name: move_3
        }
      },
      {
        move: {
          name: move_4
        }
      }
    ];
  }
}
//trying to erase all the values in the form

const newPokemonButton = document.querySelector(".button_1");
const pokeModal = document.querySelector('.modal')
const closeModal = document.querySelector('.delete')
const cancel = document.querySelector('#cancel')
const newPokemonCreate = document.querySelector('#createButton')



//that things value make a constructor for the move create an ID and then queryselector get the value and add it into the constructor
cancel.addEventListener('click',function(){
  pokeModal.classList.toggle('is-active')
})

closeModal.addEventListener('click',function(){
  pokeModal.classList.toggle('is-active')
})

newPokemonButton.addEventListener("click", function() {
  //let pokeName = prompt("Enter a name for a new pokemon:");
pokeModal.classList.toggle('is-active')
});
function eraseVal(){
  move_1.value = ''
  move_2.value = ''
  move_3.value = ''
  move_4.value = ''
  newPokemon.value = ''
}



newPokemonCreate.addEventListener('click',function(){
  let move_1 = document.getElementById('move_1').value
  let move_2 = document.getElementById('move_2').value
  let move_3 = document.getElementById('move_3').value
  let move_4 = document.getElementById('move_4').value
  let pokeName = document.getElementById('newPokemon').value
  // console.log(move_2, move_1,move_3, move_4, pokeName)
  eraseVal()
  
createPokeCard(new Pokemon(pokeName,move_1,move_2,move_3,move_4));
pokeModal.classList.toggle('is-active')
})


const fetchPokemonbyID = document.querySelector(".button_2");

fetchPokemonbyID.addEventListener("click", function() {
  let pokemonID = prompt("Enter the ID of an existing Pokemon:");
  fetchSinglePokemon(pokemonID);
});

//  function eraseVal() {
//   txt.value = "";
// }
// function getVal() {
//   var txt = document.getElementById("move_1").value;
//   eraseVal()
//   alert(txt);
// }

// git remote -v
// git remote add "URL" adds an upstream
