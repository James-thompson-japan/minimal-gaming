const container = document.querySelector(".container");
const cross = document.querySelector(".cross");
const about = document.querySelector(".about");

container.addEventListener("click", (e) => {
  console.log()
  if(e.target.classList.contains("aboutButton")){
    about.style.display = "block"
  } if(e.target.classList.contains("cross")){
    about.style.display = "none"
  }
})