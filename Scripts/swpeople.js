import { people } from '../data/people.js'
import { planets } from '../data/planets.js'

//setting the variables of men women and other in order to later use them in functions
//each variable is assigned a value by reaching into the imported "people" js

const men = people.filter(person => person.gender ==='male')
const women = people.filter(person => person.gender ==='female')
const other = people.filter(person => (person.gender ==='n/a') || (person.gender ==='hermaphrodite') || (person.gender ==='other'))
console.log(men, women, other)


//we are trying to resolve the url of the homeworld from Person to the actual planet name on the internets :)

const allHomeWorlds = people.map(person=> {
  let foundWorld = planets.find(element => {
   element.url === person.homeworld
  })
  return { name: person.name, home: foundWorld}
})

console.log(allHomeWorlds)

//This is just creating a mainContainer element to hold all of the people information

const mainContainer = document.createElement('div')
mainContainer.className = 'container'

men.forEach((man) => {

  let manElement = document.createElement('div')
  manElement.className = 'box'
  manElement.textContent = man.name
  let eyeColor = document.createElement('p')
  eyeColor.textContent = man.eye_color
  manElement.appendChild(eyeColor)
  mainContainer.appendChild(manElement)
  
})

women.forEach((woman)=> {
  let womanElement = document.createElement('div')
  
womanElement.className = 'box'
womanElement.textContent = woman.name
mainContainer.appendChild(womanElement)
})


// women.forEach((man) => {

//   let manElement = document.createElement('div')
//   manElement.className = 'box'
//   manElement.textContent = man.name
//   let eyeColor = document.createElement('p')
//   eyeColor.textContent = man.eye_color
//   manElement.appendChild(eyeColor)
//   mainContainer.appendChild(manElement)
  
// })

document.body.appendChild(mainContainer)