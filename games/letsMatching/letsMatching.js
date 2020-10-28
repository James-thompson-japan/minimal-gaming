const cardsToChooseFrom = [
  {
    name: "Badger",
    img: "images/Badger.png",
  },
  {
    name: "Bear",
    img: "images/Bear.png",
  },
  {
    name: "Bird",
    img: "images/Bird.png",
  },
  {
    name: "Cat",
    img: "images/Cat.png",
  },
  {
    name: "Elephant",
    img: "images/Elephant.png",
  },
  {
    name: "Frog",
    img: "images/Frog.png",
  },
  {
    name: "Giraffe",
    img: "images/Giraffe.png",
  },
  {
    name: "Gorilla",
    img: "images/Gorilla.png",
  },
  {
    name: "Lion",
    img: "images/Lion.png",
  },
  {
    name: "Panda",
    img: "images/Panda.png",
  },
  {
    name: "Pig",
    img: "images/Pig.png",
  },
  {
    name: "Sheep",
    img: "images/Sheep.png",
  },
];

const gridOne = document.querySelector(".gridOne");
const gridOneHeading = document.querySelector(".gridOneHeading");
const container = document.querySelector(".container");
const grids = document.querySelector(".grids")
const cardsToPlayWith = [];
const cardsToPlayWithImages = [];
let remainingAnimals = 6;
let showingStartButton = false

function selectToPlayWith() {
  if(remainingAnimals !== 0){
  const cards = document.querySelectorAll("img");
  let id = this.getAttribute("data-id");
  cardsToPlayWithImages.push(cardsToChooseFrom[id], cardsToChooseFrom[id]);
  cardsToPlayWith.push(cardsToChooseFrom[id])
  cards[id].style.visibility = "hidden";
  remainingAnimals--;
  if (remainingAnimals !== 1) {
    gridOneHeading.textContent = `Please choose ${remainingAnimals} more animals.`;
  } else if (remainingAnimals === 1) {
    gridOneHeading.textContent = `Please choose ${remainingAnimals} more animal.`;
  }
}
  if ((remainingAnimals === 0) && (!showingStartButton) ) {
    startTheGame();
  }
}

function initialLoad() {
  for (let i = 0; i < cardsToChooseFrom.length; i++) {
    let card = document.createElement("img");
    card.setAttribute("src", cardsToChooseFrom[i].img);
    card.setAttribute("data-id", i);
    card.addEventListener("click", selectToPlayWith);
    gridOne.append(card);
  }
  gridOneHeading.textContent = `Please choose ${remainingAnimals} animals.`;
}

function startTheGame() {
  const button = document.createElement("button");
  button.innerHTML = "START!";
  button.classList.add("start");
  grids.append(button);
  gridOneHeading.textContent = "Find all the matching pairs. Good luck!";
  showingStartButton = true
  button.addEventListener("click", loadGame)
}

function loadGame() {
  gridOne.innerHTML = ""
  for(let i = 0;i < cardsToPlayWithImages.length; i++){
    let card = document.createElement("img")
    card.setAttribute("src","./images/question.png") 
    gridOne.append(card)
  }
}

initialLoad();
