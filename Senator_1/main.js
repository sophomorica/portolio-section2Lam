import{ senators } from './senators.js'
import{ representatives } from './representatives.js'

console.log(senators)
//filter examples

// functions
const removeCards = () => {
  let removeDiv = document.querySelector(".container");
  while (removeDiv.firstChild) {
      removeDiv.removeChild(removeDiv.firstChild);
  }
}



//variables----------

const democrats = senators.filter(senator => {
  return senator.party === 'D' 
})
const republicans = senators.filter(senator => senator.party === 'R')

// console.log(democrats, republicans)
// using the map function to create another array with specified parameters

const simpleReps = representatives.map(rep => {
  return {
    name: `${rep.first_name} ${rep.last_name}`,
    facebook: rep.facebook_account

  }
})
// console.log(simpleReps)

//template literals or string templates are the ${string} it can let you insert a variable within a string when you are trying to return a string value.

//"reducer" executes a reducer function results in a single output value. You can pass the whole reducer function then set the initial value.  It takes two values.  The accumulator and the initial value

const allVotes = representatives.reduce((acc,rep) => {
  return acc + rep.total_votes 
},0) 
const allMissedvotes = representatives.reduce((acc, rep) =>{
  return acc + rep.missed_votes
},0)

const testArray = [5,10,15,20,25]

const testResults = testArray.reduce((acc,num)=> {
return acc + num
},0 )



//  trying to make the pictures of senators

const senWithPics = senators.map(senator =>{
  
  senator.imgURL = `https://www.congress.gov/img/member/${senator.id.toLowerCase()}.jpg`
  return senator 
})
const repWithPics = representatives.map(rep=>{
  rep.imgURL = `https://www.congress.gov/img/member/114_rp_${rept.state.toLowerCase()}_${rep.district}_${rep.last_name.toLocaleLowerCase()}_${rep.first_name.toLowerCase()}_200.jpg`
})
// senator Palpatiene `https://starwars-visualguide.com/assets/img/characters/21.jpg`,
 

let pictureDiv = document.querySelector('.container')
console.log(senWithPics)


// function cardFront(senatorData) {
//   let cardFront = document.createElement("div");
//   cardFront.className = "card__face card__face--front";
//   let figure = document.createElement("figure");
//   let caption = document.createElement("figcaption");
//   let image = document.createElement("img");
//   image.className = "senatorImage";
function renderPictures(peopleArray){
senWithPics.forEach(senator =>{

  let senatorElement = document.createElement('div')
  let senatorPic = document.createElement( 'img')
  let senatorFig = document.createElement('figure')
  let senatorFigCap= document.createElement('figcaption')


  
  if(senator.imgURL ===`https://www.congress.gov/img/member/j000300.jpg`){
    senatorPic.src = `https://starwars-visualguide.com/assets/img/characters/21.jpg`
  }
  else if (senator.imgURL === `https://www.congress.gov/img/member/s001203.jpg`)
  {
    senatorPic.src = `https://starwars-visualguide.com/assets/img/characters/21.jpg`
  } else senatorPic.src = senator.imgURL
  

  senatorFigCap.textContent = `${senator.first_name} ${senator.last_name}`
  senatorFig.appendChild(senatorPic)
  senatorFig.appendChild(senatorFigCap)
  pictureDiv.appendChild(senatorFig)

})
}

