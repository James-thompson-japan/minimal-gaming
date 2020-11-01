const container = document.querySelector(".container");
const start = document.querySelector(".start");
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

const normalimages = [
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

const silhouetteimages = [
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

start.addEventListener("click", loadGame);

function loadGame() {
container.innerHTML = ``;
let gameContainer = document.createElement("div");
gameContainer.classList.add("gameContainer")
container.append(gameContainer);
gameContainer.innerHTML = `
    <div class="imageDiv">
      <img src="images/Duffman.png" alt="characterImage"/>
    </div>

    <div class="answersDiv">
      <div class="answerOne">Homer Simpson</div>
      <div class="answerTwo">Homer Simpson</div>
      <div class="answerThree">Homer Simpson</div>
    </div>
  `;
}
