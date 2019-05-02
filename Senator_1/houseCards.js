import{ senators } from './senators.js'
import{ representatives } from './representatives.js'


const mainContainer = document.createElement('div')
mainContainer.className = 'container'
document.body.appendChild(mainContainer)

// const mainContainer = document.querySelector(".container");



const removeCards = () => {
  let removeDiv = document.querySelector(".container");
  while (removeDiv.firstChild) {
      removeDiv.removeChild(removeDiv.firstChild);
  }
}

const simpleSen = senators.map(senator =>{
  return{
    name: `${senator.first_name} ${senator.last_name}`,
    facebook: senator.facebook_account,
    homepage: senator.url,
    party: senator.party,
    imagePath: `https://www.congress.gov/img/member/${senator.id.toLowerCase()}.jpg`
  }
})

const simpleReps = representatives.map(rep => {
  return {
    name: `${rep.first_name} ${rep.last_name}`,
    facebook: rep.facebook_account,
    homepage: rep.url,
    party: rep.party,
    imagePath: `https://www.congress.gov/img/member/114_rp_${rep.state.toLowerCase()}_${rep.district}_${rep.last_name.toLocaleLowerCase()}_${rep.first_name.toLowerCase()}_200.jpg`, 

  }
})
//-----------------------------SENATE CARDS----------------------------
function cardFront(senData) {
  let cardFront = document.createElement("div");
  cardFront.className = "card__face card__face--front";
  let figure = document.createElement("figure");
  let caption = document.createElement("figcaption");
  let image = document.createElement("img");
  image.className = "senImage";

  caption.textContent = senData.name
  if(senData.party === "R"){
    cardFront.className = "card__face card__face--front republican"
  }
  if(senData.party ==="D"){
    cardFront.className = "card__face card__face--front democrat"
  }
  if(senData.party ==="ID"){
    cardFront.className = "card__face card__face--front personBox"
  }
 
  image.src= senData.imagePath

  figure.appendChild(image);
  figure.appendChild(caption);
  cardFront.appendChild(figure);
  return cardFront;
}
function cardBackInfo(senData) {
  let infoDiv = document.createElement("div");
  infoDiv.className = "infoDiv";

  let facebook = document.createElement("p");
  let webpage = document.createElement("a");

  webpage.href = senData.homepage
  webpage.target="_blank"
  webpage.textContent = "Website: "+senData.name
  

  facebook.textContent = "Facebook: " + senData.facebook
  // webpage.textContent = senData.webpage
  

  infoDiv.appendChild(webpage);
  infoDiv.appendChild(facebook);


  return infoDiv;
}

function cardBack(senData){
  let cardBack = document.createElement("div");
  let backImage = document.createElement("img");
  let intro = document.createElement("h1");

  intro.className = 'party'
  intro.textContent = simpleSen.party
  backImage.className = "backImage";
  backImage.src = `./images/SenateStamp.png`;
  cardBack.className = "card__face card__face--back";

  cardBack.appendChild(intro);
  cardBack.appendChild(backImage);
  cardBack.appendChild(cardBackInfo(senData));
  return cardBack;
}
const createCardSen = ((senators)=>{
  removeCards()
  senators.forEach((senData)=>{
  let scene = document.createElement("div");
  scene.className = "scene";
  let card = document.createElement("div");
  card.className = "card";


  card.addEventListener("click", function() {
    card.classList.toggle("is-flipped");
  });
  card.appendChild(cardFront(senData));
  card.appendChild(cardBack(senData));

  scene.appendChild(card);
  mainContainer.appendChild(scene);
})})


var allSenators = document.getElementById('senators')

allSenators.addEventListener('click', function(){
  removeCards()
  createCardSen(simpleSen)
 
})

//--------------------------HOUSE CARDS-------------------

function cardFrontR(repData){
  let cardFrontR = document.createElement("div");
  cardFrontR.className = "card__face card__face--front";
  let figure = document.createElement("figure");
  let caption = document.createElement("figcaption");
  let image = document.createElement("img");
  image.className = "senImage";

  caption.textContent = repData.name
  if(repData.party === "R"){
    cardFrontR.className = "card__face card__face--front republican"
  }
  if(repData.party ==="D"){
    cardFrontR.className = "card__face card__face--front democrat"
  }
  if(repData.party ==="ID"){
    cardFrontR.className = "card__face card__face--front personBox"
  }
 
  image.src= repData.imagePath

  figure.appendChild(image);
  figure.appendChild(caption);
  cardFrontR.appendChild(figure);
  return cardFrontR;

}
function cardBackInfoR(repData) {
  let infoDiv = document.createElement("div");
  infoDiv.className = "infoDiv";

  let facebook = document.createElement("p");
  let webpage = document.createElement("a");

  webpage.href = repData.homepage
  webpage.target="_blank"
  webpage.textContent = "Website: " +repData.name



  facebook.textContent =  "Facebook: " +repData.facebook

  infoDiv.appendChild(webpage);
  infoDiv.appendChild(facebook);


  return infoDiv;
}
function cardBackR(repData){
  let cardBackR = document.createElement("div");
  let backImage = document.createElement("img");
  let intro = document.createElement("h1");

  intro.className = 'party'
  intro.textContent = simpleSen.party
  backImage.className = "backImage";
  backImage.src = `./images/repsSeal.png`;
  cardBackR.className = "card__face card__face--back";

  // cardBackR.addEventListener('click',function(){
  //   cardBackR.classList.add('is-flip')
  // })

  cardBackR.appendChild(intro);
  cardBackR.appendChild(backImage);
  cardBackR.appendChild(cardBackInfoR(repData));
  return cardBackR;
}

const createCardRep = ((representatives)=>{
  removeCards()
  representatives.forEach((repData)=>{
  let scene = document.createElement("div");
  scene.className = "scene";
  let card = document.createElement("div");
  card.className = "card";

 
  // scene.addEventListener("dblclick",function() {
  //   card.classList.remove("is-flipped");
  // });
  card.addEventListener("click",function() {
    card.classList.toggle("is-flipped");
  });
  
  
  
  card.appendChild(cardFrontR(repData));
  card.appendChild(cardBackR(repData));

  scene.appendChild(card);
  mainContainer.appendChild(scene);
})})

var allReps = document.getElementById('reps')

allReps.addEventListener('click', function(){
  removeCards()
  createCardRep(simpleReps)
 
  })
//----------------BUTTONS----------------
var allDems = document.getElementById('D')
var allRepubs = document.getElementById('R')
var allRepRBtn = document.getElementById('r')
var allRepDBtn = document.getElementById('d')

const democratFilter = simpleSen.filter(senator => {
  return senator.party === 'D' 
})
allDems.addEventListener('click', function(){
  removeCards()
  createCardSen(democratFilter)

})

const republicanFilter = simpleSen.filter(senator => senator.party === 'R')
allRepubs.addEventListener('click', function(){
  removeCards()
  createCardSen(republicanFilter)
  
  
})

const demFilterReps = simpleReps.filter(represent => {
  return represent.party ==='D'
})
const repFilterReps = simpleReps.filter(represent => {
  return represent.party ==='R'
})
allRepRBtn.addEventListener('click', function(){
  removeCards()
  createCardRep(repFilterReps)
})
allRepDBtn.addEventListener('click', function(){
  removeCards()
  createCardRep(demFilterReps)
})

  