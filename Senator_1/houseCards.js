import{ senators } from './senators.js'
import{ representatives } from './representatives.js'


const mainContainer = document.createElement('div')
mainContainer.className = 'container'
document.body.appendChild(mainContainer)

// const mainContainer = document.querySelector(".container");


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

//-----------------------filters---------------------------------

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
    hompage: rep.url,
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
  let webpage = document.createElement("p");
  

  facebook.textContent = senData.facebook
  webpage.textContent = senData.webpage
  

  infoDiv.appendChild(facebook);
  infoDiv.appendChild(webpage);


  return infoDiv;
}

function cardBack(senData){
  let cardBack = document.createElement("div");
  let backImage = document.createElement("img");
  let intro = document.createElement("h1");

  intro.className = 'party'
  intro.textContent = simpleSen.party
  backImage.className = "backImage";
  backImage.src = `/images/SenateStamp.png`;
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

  if(senData.party === "R"){
    card.className = "card republican personBox"
  }
  if(senData.party ==="D"){
    card.className = "card democrat personBox"
  }
  if(senData.party ==="ID"){
    card.className = "card personBox"
  }
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
  let webpage = document.createElement("p");
  

  facebook.textContent = repData.facebook
  webpage.textContent = repData.webpage
  

  infoDiv.appendChild(facebook);
  infoDiv.appendChild(webpage);


  return infoDiv;
}
function cardBackR(repData){
  let cardBackR = document.createElement("div");
  let backImage = document.createElement("img");
  let intro = document.createElement("h1");

  intro.className = 'party'
  intro.textContent = simpleSen.party
  backImage.className = "backImage";
  backImage.src = `/images/SenateStamp.png`;
  cardBackR.className = "card__face card__face--back";

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

  if(repData.party === "R"){
    card.className = "card republican personBox"
  }
  if(repData.party ==="D"){
    card.className = "card democrat personBox"
  }
  if(repData.party ==="ID"){
    card.className = "card personBox"
  }
  card.addEventListener("click", function() {
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