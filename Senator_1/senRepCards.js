import{ senators } from './senators.js'
import{ representatives } from './representatives.js'



const mainContainer = document.createElement('div')
mainContainer.className = 'container'
document.body.appendChild(mainContainer)

const button_section = document.getElementsByClassName('button-section')



//function---------------------
const removeCards = () => {
  
  let removeDiv = document.querySelector(".container");
  
  while (removeDiv.firstChild) {
      removeDiv.removeChild(removeDiv.firstChild);
  }
}

//-----------------Filters-----------------------------------------------
const democratFilter = senators.filter(senator => {
  return senator.party === 'D' 
})
const republicanFilter = senators.filter(senator => senator.party === 'R')

const demFilterReps = representatives.filter(represent => {
  return represent.party ==='D'
})
const repFilterReps = representatives.filter(represent => {
  return represent.party ==='R'
})
//making a more digestable array of information--------------------------

const simpleReps = representatives.map(rep => {
  return {
    name: `${rep.first_name} ${rep.last_name}`,
    facebook: rep.facebook_account,
    hompage: rep.url,
    party: rep.party,
    imagePath: `https://www.congress.gov/img/member/114_rp_${rep.state.toLowerCase()}_${rep.district}_${rep.last_name.toLocaleLowerCase()}_${rep.first_name.toLowerCase()}_200.jpg`, 

  }
})
const simpleSen = senators.map(senator =>{
  return{
    name: `${senator.first_name} ${senator.last_name}`,
    facebook: senator.facebook_account,
    homepage: senator.url,
    party: senator.party,
    imagePath: `https://www.congress.gov/img/member/${senator.id.toLowerCase()}.jpg`
  }
})

// function cardFront (senatorArray){
//   let cardFront = document.createElement("div");
//   cardFront.className = "card__face card__face--front";
//   let figure = document.createElement("figure");
//   let caption = document.createElement("figcaption");
//   let image = document.createElement("img");
//   image.className = "senateImage";
// }
const allVotes = representatives.reduce((acc,rep) => {
  return acc + rep.total_votes 
},0) 
const allSenatorVotes = senators.reduce((acc,sen)=>{
  return acc + sen.total_votes
},0)
const allSentorMiss = senators.reduce((acc, sen)=>{
  return acc + sen.missed_votes
},0)
console.log(allSentorMiss)
console.log("missed Votes = " + allSenatorVotes)
console.log("All Votes = " + allVotes)
const allMissedvotes = representatives.reduce((acc, rep) =>{
  return acc + rep.missed_votes
},0)
console.log("Missed Votes = " +allMissedvotes)
const testArray = [5,10,15,20,25]

const testResults = testArray.reduce((acc,num)=> {
return acc + num
},0 )
console.log(testResults)
//-------Functions to create the cards------------------------------------
const createCardSen = ((senatorArray)=>{
  removeCards()
  // revealSBanner()

  //----------I wanted to create buttons dynamically but found out that the since the java script can't find the buttons before they are created I couldn't add any event listeners to it....perhaps node does-------------

//   let filterButtons = document.createElement('div')
//   filterButtons.className = "button_section"
// let filterButtonR = document.createElement('button')
// filterButtonR.id = 'republic'
// filterButtonR.textContent = 'Republicans'
// let filterButtonD = document.createElement('button')
// filterButtonD.textContent = 'Democrats'
// filterButtonD.id = ('D')
// filterButtonD.className = ('button is-info')
// filterButtonR.className = ('button is-danger')

// filterButtons.appendChild(filterButtonD)
// filterButtons.appendChild(filterButtonR)
// mainContainer.appendChild(filterButtons)

//------------------------------end--------------------------

  simpleSen.forEach((senator)=>{
    let personElement = document.createElement('div')
    let personName = document.createElement ('p')
    let imageElement = document.createElement ('img')


    if(senator.party === "R"){
      personElement.className = "box republican personBox"
    }
    if(senator.party ==="D"){
      personElement.className = "box democrat personBox"
    }
    if(senator.party ==="ID"){
      personElement.className = "box personBox"
    }

    if(senator.imgURL ===`https://www.congress.gov/img/member/j000300.jpg`){
      imageElement.src = `https://starwars-visualguide.com/assets/img/characters/21.jpg`
    }
     else if (senator.imgURL === `https://www.congress.gov/img/member/s001203.jpg`)
     {
      imageElement.src = `https://starwars-visualguide.com/assets/img/characters/21.jpg`
     } else 
    imageElement.src = senator.imagePath

 personName.textContent = senator.first_name +" " + senator.last_name
// personElement.textContent = senator.name
// imageElement.src = senator.imgURL

personElement.appendChild(personName)
personElement.appendChild(imageElement)
mainContainer.appendChild(personElement)

  })
 
})
const revealRBanner = () => {
  let rBanner = document.querySelector('.house')
  rBanner.classList.toggle('rBanner-hide')
 }
 const revealSBanner = () => {
  let rBanner = document.querySelector('.senate')
  rBanner.classList.toggle('sBanner-hide')
 }
const createCardRep = ((repArray)=>{
  removeCards()
  // revealRBanner()
  simpleReps.forEach((rep)=>{
    let personElement = document.createElement('div')
    let personName = document.createElement ('p')
    let imageElement = document.createElement ('img')
    
    if(rep.party === "R"){
      personElement.className = "box republican personBox"
    }
    if(rep.party ==="D"){
      personElement.className = "box democrat personBox"
    }

   
    imageElement.src = rep.imagePath
    personName.textContent = rep.first_name + " " + rep.last_name
    personElement.appendChild(personName)
    personElement.appendChild(imageElement)
    mainContainer.appendChild(personElement)
  
      })

  })
const senWithPics = senators.map(senator =>{
  
  senator.imgURL = `https://www.congress.gov/img/member/${senator.id.toLowerCase()}.jpg`
  return senator 
})

const repWithPics = representatives.map(rep=>{
  rep.imgURL = `https://www.congress.gov/img/member/114_rp_${rep.state.toLowerCase()}_${rep.district}_${rep.last_name.toLocaleLowerCase()}_${rep.first_name.toLowerCase()}_200.jpg`
})

// function renderPictures(peopleArray) {
//   peopleArray.forEach(senator => {
//   let senatorPic = document.createElement('img')
//   let senatorFig = document.createElement('figure')
//   let senatorCap = document.createElement('figcaption')
//   senatorCap.textContent = `${senator.name}`
//   senatorPic.src = senator.imgURL
//   senatorFig.appendChild(senatorPic)
//   senatorFig.appendChild(senatorCap)
//   mainContainer.appendChild(senatorFig)
// })
// }
//variables to make the buttons later
var allSenators = document.getElementById('senators')
var allReps = document.getElementById('reps')
var allDems = document.querySelector('#D')
var allRepubs = document.getElementById('R')
var allRepRBtn = document.getElementById('r')
var allRepDBtn = document.getElementById('d')
var clearBtn = document.querySelector('#clearBtn')

allSenators.addEventListener('click', function(){
  removeCards()
  createCardSen(senators)
  allDems.classList.toggle('is-hidden')
  allRepubs.classList.toggle('is-hidden')
})

allReps.addEventListener('click', function(){
removeCards()
createCardRep(representatives)
// if (allDems.className !== 'is-hidden'){
//   allDems.classList.toggle('is-hidden')
// }
// if( allRepubs.className !=='is-hidden'){
//   allRepubs.classList.toggle('is-hidden')
// }
allRepRBtn.classList.toggle('is-hiddenR')
allRepDBtn.classList.toggle('is-hiddenR')
})

allDems.addEventListener('click', function(){
  removeCards()
  createCardSen(democratFilter)
})
allRepubs.addEventListener('click', function(){
  removeCards()
  createCardSen(republicanFilter)
  
})
allRepRBtn.addEventListener('click', function(){
  removeCards()
  createCardRep(repFilterReps)
})
allRepDBtn.addEventListener('click', function(){
  removeCards()
  createCardRep(demFilterReps)
})
const removeBtns = () => {
  let hiddenD = document.getElementById("D");
  let hiddenR = document.getElementById("R");
  let hiddenRep = document.getElementById('r')
  let hiddenDem = document.getElementById('d')
  let removeRepBtnDiv = document.querySelector('repBtns')
  let removeSenBtnDiv = document.querySelector(".senatorFilterBtns")
  
  
  if (removeSenBtnDiv.firstChild) {
      // hidden.classList.toggle('is-hidden');
      hiddenD.classList.add('is-hidden')
      hiddenR.classList.add('is-hidden')
  }
   if (removeRepBtnDiv.firstChild){
     hiddenRep.classList.add('is-hiddenR')
     hiddenDem.classList.add('is-hiddenR')
   }
}
// clearBtn.addEventListener('click',function(){
//   removeCards()
//   removeBtns()
  
// })
