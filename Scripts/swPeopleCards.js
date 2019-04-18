import { people } from '../data/people.js'
import { planets } from '../data/planets.js'

const getLastNumber = (url) => {
  let end = url.lastIndexOf('/')
  console.log(end)
  let start = end -2
 if(url.charAt(start) === '/'){
   start ++
 }
return (url.slice(start, end))
}

const allHomeWorlds = people.map(person => {
  let foundWorld = planets.find(planet =>{
    return planet.url === person.homeworld
  })
  let imageURL  = getLastNumber(person.url)
  return {
    name: person.name, 
    home: foundWorld.name,
    gender: person.gender,
    imagePath: `https://starwars-visualguide.com/assets/img/characters/${imageURL}.jpg`,
    force: person.force,
}
})

console.log(allHomeWorlds)

const men = allHomeWorlds.filter(person=> person.gender ==='male')
const women = allHomeWorlds.filter(person => person.gender ==='female')

const lightSide = allHomeWorlds.filter(person=> person.force ==='light')
const darkSide = allHomeWorlds.filter(person=> person.force === 'dark')

const mainContainer = document.createElement('div')
mainContainer.className = 'container'
document.body.appendChild(mainContainer)

var females = document.getElementById('females')
var males = document.getElementById('males')
var light_side = document.getElementById('light-side')
var dark_side = document.getElementById('dark-side')

//-----functions
function cardBackInfo(allHomeWorlds){
  let infoDiv = document.createElement('div')
  infoDiv.className = 'infoDiv'

  let swName = document.createElement('p')

  swName.textContent = allHomeWorlds.person.name
infoDiv.appendChild(swName)
return infoDiv

}
function cardBack(swData){
  let cardBack = document.createElement('div')

  cardBack.appendChild(cardBackInfo(swData))

}
function createSwCard(swdata) {
  let scene = document.createElement("div");
  scene.className = "scene";
  let card = document.createElement("div");
  card.className = "card";

  card.addEventListener("click", function() {
    card.classList.toggle("is-flipped");
  });
  card.appendChild(cardFront(swdata));
  card.appendChild(cardBack(swdata));

  scene.appendChild(card);
  mainContainer.appendChild(scene);
}
