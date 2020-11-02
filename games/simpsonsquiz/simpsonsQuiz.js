// VARIABLES

const container = document.querySelector(".container");
const gameContainer = document.querySelector(".gameContainer");
const start = document.querySelector(".start");
const imageDivImg = document.querySelector(".imageDivImg");
const firstScreenItems = document.querySelector(".firstScreenItems");

const answerOne = document.querySelector(".answerOne");
const answerTwo = document.querySelector(".answerTwo");
const answerThree = document.querySelector(".answerThree");
const answers = document.querySelectorAll(".answer")

// DATA ARRAYS

const names = [
  "Apu Nahasapeemapetilon",
  "Bart Simpson",
  "Chief Wiggum",
  "Comic Book Guy",
  "Duffman",
  "Groundskeeper Willie",
  "Homer Simpson",
  "Lisa Simpson",
  "Marge Simpson",
  "Mayor Quimby",
  "Milhouse VanHouten",
  "Moe Szyslak",
  "Dr Nick",
  "Otto Mann",
  "Ralph Wiggum",
  "Seymour Skinner",
  "Waylon Smithers",
];

let normalimages = [
  "images/ApuNahasapeemapetilon.png",
  "images/BartSimpson.png",
  "images/ChiefWiggum.png",
  "images/ComicBookGuy.png",
  "images/Duffman.png",
  "images/GroundskeeperWillie.png",
  "images/HomerSimpson.png",
  "images/LisaSimpson.png",
  "images/MargeSimpson.png",
  "images/MayorQuimby.png",
  "images/MilhouseVanHouten.png",
  "images/MoeSzyslak.png",
  "images/DrNick.png",
  "images/OttoMann.png",
  "images/RalphWiggum.png",
  "images/SeymourSkinner.png",
  "images/WaylonSmithers.png",
];

let silhouetteimages = [
  "images/BLKApuNahasapeemapetilon.png",
  "images/BLKBartSimpson.png",
  "images/BLKChiefWiggum.png",
  "images/BLKComicBookGuy.png",
  "images/BLKDuffman.png",
  "images/BLKGroundskeeperWillie.png",
  "images/BLKHomerSimpson.png",
  "images/BLKLisaSimpson.png",
  "images/BLKMargeSimpson.png",
  "images/BLKMayorQuimby.png",
  "images/BLKMilhouseVanHouten.png",
  "images/BLKMoeSzyslak.png",
  "images/BLKDrNick.png",
  "images/BLKOttoMann.png",
  "images/BLKRalphWiggum.png",
  "images/BLKSeymourSkinner.png",
  "images/BLKWaylonSmithers.png",
];

// LOADING EVENT LISTENER

start.addEventListener("click", loadGame);

// GAME LOAD FUNCTION

function insertAnswers(correctAnswer) {
  // INSERT CORRECT ANSWER
let randomNo = Math.floor(Math.random() * 3)
answers[randomNo].innerHTML = correctAnswer
let unusedNames = names.filter(name => name !== correctAnswer)

let wrongAnswerOne = names[Math.floor(Math.random() * names.length)]
unusedNames = names.filter(name => name !== wrongAnswerOne)
let wrongAnswerTwo = names[Math.floor(Math.random() * names.length)]

console.log(unusedNames)

for(let i = 0;i < 2;i++){
  let answer
if( i === 0 ){
  answer = wrongAnswerOne
} else {answer = wrongAnswerTwo}

if(answerOne.innerHTML === ""){
  answerOne.innerHTML = answer;
} else if(answerTwo.innerHTML === ""){
  answerTwo.innerHTML = answer
} else {answerThree.innerHTML = answer}
console.log(i)
}



}

function loadGame() {

  firstScreenItems.remove();
  gameContainer.style.display = "block";

  let randomNo = Math.floor(Math.random() * silhouetteimages.length);
  let firstImage = silhouetteimages[randomNo];
  let correctAnswer = names[randomNo];

  silhouetteimages = silhouetteimages.filter(image => image !== firstImage);
  
  insertAnswers(correctAnswer)

  imageDivImg.setAttribute("src",firstImage)
}

