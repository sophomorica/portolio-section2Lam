import { people } from '../data/people.js'
import { planets } from '../data/planets.js'



//character act string funciton MDN
//Slice string method MDN "how to get a section of a string from an index"
const getLastNumber = (url) => {
  let end = url.lastIndexOf('/')
  console.log(end)
  let start = end -2
 if(url.charAt(start) === '/'){
   start ++
 }
return (url.slice(start, end))
}
//we are going to import from one array then within that loop we will do search into another array
const allHomeWorlds = people.map(person => {
  let foundWorld = planets.find(planet =>{
    return planet.url === person.homeworld
  })
  let imageURL  = getLastNumber(person.url)
  return {
    name: person.name, 
    home: foundWorld.name,
    imagePath: `https://starwars-visualguide.com/assets/img/characters/${imageURL}.jpg`,
  }
})

// console.log(allHomeWorlds)



//https://starwars-visualguide.com/assets/img/characters/1.jpg
//----> now we insert into the DOM



//setting the variables of men women and other in order to later use them in functions
//each variable is assigned a value by reaching into the imported "people" js

const men = people.filter(person => person.gender ==='male')
const women = people.filter(person => person.gender ==='female')
const other = people.filter(person => (person.gender ==='n/a') || (person.gender ==='hermaphrodite') || (person.gender ==='other'))
console.log(men, other,women)






//This is just creating a mainContainer element to hold all of the people information

const mainContainer = document.createElement('div')
mainContainer.className = 'container'

allHomeWorlds.forEach((person) => {
  
  let personElement = document.createElement('div')
  let planetElement = document.createElement ('p')
  let imageElement = document.createElement ('img')


  personElement.className = 'box'
  personElement.textContent = person.name
  planetElement.textContent = person.home

  imageElement.src = person.imagePath


  personElement.appendChild(imageElement)
  personElement.appendChild(planetElement)
  mainContainer.appendChild(personElement)
  
})

// women.forEach((woman)=> {
//   let womanElement = document.createElement('div')
  
// womanElement.className = 'box'
// womanElement.textContent = woman.name
// mainContainer.appendChild(womanElement)
// })

women.forEach((woman)=>{
  let womanButton = document.createElement('button')

  mainContainer.appendChild(womanButton)
})


document.body.appendChild(mainContainer)