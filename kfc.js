const sliderContainer = document.querySelector("#sliderContainer");
const sliderContainerImges = document.querySelectorAll(
  "#sliderContainer img"
).length;
const next = document.querySelector("#next");
const prev = document.querySelector("#prev");

let track = 0;
function slideImage() {
  sliderContainer.style.transform = `translateX(-${track * 100}%)`;
}

function manualSlide(sign) {
  if (sign == "+") {
    track = (track + 1) % sliderContainerImges;
  } else if (sign == "-") {
    track = (track - 1) % sliderContainerImges;
  }
}

next.addEventListener("click", () => {
  manualSlide("+");
  slideImage();
});

prev.addEventListener("click", () => {
  if (track < 0) track = sliderContainerImges;
  console.log(track);
  manualSlide("-");
  slideImage();
});
setInterval(() => {
  track = (track + 1) % sliderContainerImges;
  slideImage();
}, 10000);

sliderContainer.addEventListener("swipe", console.log("object"));

// favorite
const faHeart = document.querySelectorAll(".fa-heart");

faHeart.forEach((heart, index) => {
  heart.addEventListener("click", function () {
    this.classList.toggle("fa-solid");
  });
});


const popup = document.querySelector(".loginform");
const loginBtn = document.querySelector(".login-btn");

loginBtn.addEventListener("click", (event)=>{
  event.stopPropagation()
  popup.style.display = "flex"
})

document.addEventListener("click", (event) => {
  if (!popup.contains(event.target) && event.target !== loginBtn) {
    popup.style.display = "none";
  }
});