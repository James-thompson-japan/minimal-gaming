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
const grids = document.querySelector(".grids");
let cardsToPlayWith = [];
let cardsToPlayWithImages = [];
let chosenCards = [];
let remainingAnimals = 6;
let showingStartButton = false;
let cardsWon = [];
let chosenCardsIds = [];

function selectToPlayWith() {
  if (remainingAnimals !== 0) {
    const cards = document.querySelectorAll("img");
    let id = this.getAttribute("data-id");
    cardsToPlayWithImages.push(cardsToChooseFrom[id], cardsToChooseFrom[id]);
    cardsToPlayWith.push(cardsToChooseFrom[id]);
    cards[id].style.visibility = "hidden";
    remainingAnimals--;
    if (remainingAnimals !== 1) {
      gridOneHeading.textContent = `Please choose ${remainingAnimals} more animals.`;
    } else if (remainingAnimals === 1) {
      gridOneHeading.textContent = `Please choose ${remainingAnimals} more animal.`;
    }
  }
  if (remainingAnimals === 0 && !showingStartButton) {
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
  let button = document.createElement("button");
  button.innerHTML = "START!";
  button.classList.add("start");
  grids.append(button);
  gridOneHeading.textContent = "Find all the matching pairs. Good luck!";
  showingStartButton = true;
  button.addEventListener("click", loadGame);
}

function loadGame() {
  gridOne.innerHTML = "";
  document.querySelector("button").style.display = "none";
  // cardsToPlayWithImages.sort(() => Math.random() - 0.5);
  for (let i = 0; i < cardsToPlayWithImages.length; i++) {
    let card = document.createElement("img");
    card.setAttribute("src", "./images/question.png");
    card.setAttribute("data-id", i);
    card.addEventListener("click", flipCard);
    gridOne.append(card);
  }
}

function flipCard() {
  let id = this.getAttribute("data-id");
  this.setAttribute("src", cardsToPlayWithImages[id].img);
  chosenCards.push(cardsToPlayWithImages[id]);
  chosenCardsIds.push(id);
  if (chosenCards.length === 2) {
    setTimeout(() => {
      checkForMatch();
    }, 1000);
  }
  console.log(chosenCards);
}

function checkForMatch() {
  let cards = document.querySelectorAll("img");
  let cardOne = chosenCards[0];
  let cardTwo = chosenCards[1];
  let idOne = chosenCardsIds[0];
  let idTwo = chosenCardsIds[1];
  console.log(idOne, idTwo);

  if (idOne === idTwo) {
    alert("You clicked on the same card!");
    cards[idOne].setAttribute("src", "./images/question.png");
  } else if (cardOne.name === cardTwo.name) {
    cardsWon.push(chosenCards);
    cards[idOne].style.visibility = "hidden";
    cards[idTwo].style.visibility = "hidden";
    alert("Well done! You found a matching pair.");
  } else if (cardOne.name !== cardTwo.name) {
    alert("They didn't match. Try again!");
    cards[idOne].setAttribute("src", "./images/question.png");
    cards[idTwo].setAttribute("src", "./images/question.png");
  }

  if (cardsWon.length === cardsToPlayWithImages.length / 2) {
    gridOneHeading.textContent = "Well done. You have completed the game!"
    let button = document.querySelector("button");
    button.style.display = "block";
    button.innerHTML = "Play again."
    button.addEventListener("click",() => {location.reload();})
  }

  chosenCards = [];
  chosenCardsIds = [];
}

initialLoad();
