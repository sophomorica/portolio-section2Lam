import { people } from '../data/people.js'
import { planets } from '../data/planets.js'



//character act string funciton MDN
//Slice string method MDN "how to get a section of a string from an index" . We did thus 

const getLastNumber = (url) => {
  let end = url.lastIndexOf('/')
  console.log(end)
  let start = end -2
 if(url.charAt(start) === '/'){
   start ++
 }
return (url.slice(start, end))
}

//------------------------we are going to import from one array then within that loop we will do search into another array in order to find the homeworlds and then create a new array to be called on later ------------------------------


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


//----------push the Kylo Ren Array to  allHomeWorlds in order to get him on the array//
// command+D selects multiple of the same word. comnd + Opt + up or down makes more cursers 

allHomeWorlds.push({ 
  "name": "Kylo Ren",
  "gender": "male",
  "force": "dark",
  "homeworld":"Chandrilla",
  // "imagePath": "https://lumiere-a.akamaihd.net/v1/images/kylo-ren-db-main_e2e6f666.jpeg?region=0%2C0%2C1560%2C878", 
  "imagePath": "https://aa1a5178aef33568e9c4-a77ea51e8d8892c1eb8348eb6b3663f6.ssl.cf5.rackcdn.com/p/full/e76f93db-4c6b-4c70-b5a1-10c1bee4624d.jpg"
})


//https://starwars-visualguide.com/assets/img/characters/1.jpg
//----> now we insert into the DOM


//setting the variables of men women and other in order to later use them in functions
//each variable is assigned a value by reaching into the imported "people" js

const men = allHomeWorlds.filter(person=> person.gender ==='male')
const women = allHomeWorlds.filter(person => person.gender ==='female')
const other = allHomeWorlds.filter(person => (person.gender ==='n/a') || (person.gender ==='hermaphrodite') || (person.gender ==='other'))
// console.log(men, other,women)

const lightSide = allHomeWorlds.filter(person=> person.force ==='light')
const darkSide = allHomeWorlds.filter(person=> person.force === 'dark')




console.log(darkSide)





//This is just creating a mainContainer element to hold all of the people information

const mainContainer = document.createElement('div')
mainContainer.className = 'container'
document.body.appendChild(mainContainer)

const removeCards = () => {
  let removeDiv = document.querySelector(".container");
  while (removeDiv.firstChild) {
      removeDiv.removeChild(removeDiv.firstChild);
  }
}

//------pulling the HTML id to assign variables to use in the event listener on the buttons------

var females = document.getElementById('females')
var males = document.getElementById('males')
var light_side = document.getElementById('light-side')
var dark_side = document.getElementById('dark-side')


const createCards = ((personArray) => {
  removeCards()
  
  personArray.forEach((person) => {
  
  let personElement = document.createElement('div')
  let planetElement = document.createElement ('p')
  let imageElement = document.createElement ('img')
  

  if (person.force ==='light'){
    personElement.className = 'box lightSide personBox'
  } 
  if (person.force ==='dark'){
    personElement.className = 'box darkSide personBox'
  }
  if (person.force ==='yellow'){
    personElement.className = 'box yellow personBox'
  }
 

  // personElement.className = 'personBox'
  personElement.textContent = person.name
  planetElement.textContent = person.home
  
 

  imageElement.src = person.imagePath

  
  personElement.appendChild(planetElement)
  personElement.appendChild(imageElement)
  mainContainer.appendChild(personElement)
  
})
})

// mouse event for the button to filter out just the males--------------------

males.addEventListener('click', createCards.bind(this, men))
females.addEventListener('click', createCards.bind(this, women))
light_side.addEventListener('click', createCards.bind(this, lightSide))
dark_side.addEventListener('click', createCards.bind(this, darkSide))
function filterMales(){

  men.forEach((man) => {
  let manElement = document.createElement('div')
  let imageElement = document.createElement('img')

manElement.className = 'personBox'
manElement.textContent = man.name

imageElement.src= imagePath

manElement.appendChild(imageElement)
mainContainer.appendChild(manElement)
})
males.removeEventListener('click', filterMales)

}



//----------event listener to filter out the females----------------------------------

// females.addEventListener('click', filterFemales)
// function filterFemales(){ 
// women.forEach((woman) => { 
//   let womanElement = document.createElement('div')
//   let imageElement = document.createElement('img')
//   // let planetElement = document.createElement('p')
  
// womanElement.className = 'box'
// womanElement.textContent = woman.name


// imageElement.src= woman.imagePath

// womanElement.appendChild(imageElement)

// mainContainer.appendChild(womanElement)
// }) 
// females.removeEventListener('click',filterFemales, false );
// if (false){
//   location.reload()
// }
// }

//end of my trials-----------------------------------------------------------------



// women.forEach((woman)=> {
//   let womanElement = document.createElement('div')
  
// womanElement.className = 'box'
// womanElement.textContent = woman.name
// mainContainer.appendChild(womanElement)
// })







//removeCards()
