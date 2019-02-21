import{ films } from './films.js'
// import{people} from './people.js'
// import {planets} from './planets.js'
// import {species} from './species.js'
// import {starships} from './species.js'
// import {vehicles} from './vehicles'
const result = films.filter(film => film.episode_id)
console.log(result)
// const intro = document.querySelector('.intro')
// films.sort(function(episode_id){
//   return episode_id
// }
films.forEach((film) => {
 let titleElement = document.createElement('h1')
 let crawlElement = document.createElement('h3')
 titleElement.textContent = film.title
 crawlElement.textContent = film.opening_crawl
 intro.appendChild(titleElement)
 intro.appendChild(crawlElement)
 
})
// let titleElement = document.querySelector(".title")
// let crawlElement = document.querySelector(".crawl")

// titleElement.textContent = films[0].title
// crawlElement.textContent = films[0].opening_crawl