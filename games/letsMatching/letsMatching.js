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
const cardsToPlayWith = [];
const cardsToPlayWithImages = [];

let remainingAnimals = 6;

function selectToPlayWith() {
  const cards = document.querySelectorAll("img");
  let id = this.getAttribute("data-id");
  cardsToPlayWithImages.push(cards[id],cards[id])
  cards[id].style.visibility = "hidden";
  console.log(cardsToPlayWithImages);
  remainingAnimals--;
  console.log(remainingAnimals);

  if (remainingAnimals !== 1) {
    gridOneHeading.textContent = `Please choose ${remainingAnimals} more animals.`;
  } else if (remainingAnimals === 1) {
    gridOneHeading.textContent = `Please choose ${remainingAnimals} more animal.`;
  }
  if (remainingAnimals === 0) {
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
  const button = document.createElement("button")
  gridOne.innerHTML = ""
  button.innerHTML = "START!"
  button.classList.add()
  gridOne.append(button)
  gridOneHeading.textContent = "Find all the matching pairs. Good luck!"
}

initialLoad();
