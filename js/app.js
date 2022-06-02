const humberger = document.querySelector(".navigation__humburger");
const humbergerLines = document.querySelectorAll(
  ".navigation__humburger-line "
);
const navigationNav = document.querySelector(".navigation__nav");

const btnBack = document.querySelector(".services__back");
const btnForward = document.querySelector(".services__forward");
const btnIcon = document.querySelectorAll(".services__icon");

const cards = document.querySelectorAll(".services__card");

const testamonialPicture = document.querySelectorAll(".testamonial__img");
const testamonialText = document.querySelectorAll(".testamonial__content");
const testamonialForward = document.querySelector(".testamonial__forward");
const testamonialBack = document.querySelector(".testamonial__back");

const formInputs = document.querySelectorAll(".form__input");
const formInputsTexts = document.querySelectorAll(".form__input-text");

let currClick = 0;
let clickCount = 0;

// FUNTIONS USED IN EVENT HANDLERES
const transformCards = function () {
  cards.forEach((item) => {
    const itemWidth = parseFloat(getComputedStyle(item).width);
    item.style.transform = `translateX(${-itemWidth * clickCount}px)`;
  });
};

const addActiveToBtn = function (btn) {
  btn.children[0].classList.add("services__active");
};

testamonialText.forEach((item, i) => {
  if (currClick !== i) testamonialText[i].classList.add("hidden");
  if (currClick === i) testamonialText[i].classList.remove("hidden");
});
const contentTransform = function () {
  testamonialPicture.forEach(
    (item) => (item.style.transform = `translateX(${-100 * currClick}%)`)
  );
  testamonialText.forEach((item, i) => {
    if (currClick !== i) testamonialText[i].classList.add("hidden");
    if (currClick === i) testamonialText[i].classList.remove("hidden");
  });
};

// Mobile Navigation Functionality
humberger.addEventListener("click", function (e) {
  humbergerLines.forEach((item, i) => item.classList.toggle("active"));
  navigationNav.classList.toggle("active");
  humberger.classList.toggle("active");
});

// Services Slider Functionality

btnForward.addEventListener("click", function (e) {
  clickCount++;

  if (clickCount > 3) {
    clickCount = 3;
    return;
  }

  if (clickCount > 0) addActiveToBtn(btnBack);
  if (clickCount > 2) {
    e.target.closest(".services__active").classList.remove("services__active");
  }
  transformCards();
});

btnBack.addEventListener("click", function (e) {
  clickCount--;
  if (clickCount < 0) {
    clickCount = 0;
    return;
  }
  if (clickCount < 3) addActiveToBtn(btnForward);
  if (clickCount <= 0) {
    e.target.closest(".services__active").classList.remove("services__active");
  }

  transformCards();
});

// TESTAMONIAL SLIDER FUNCTIONALITY

testamonialForward.addEventListener("click", function () {
  currClick++;
  if (currClick >= testamonialPicture.length) {
    currClick = 0;
  }
  contentTransform();
});

testamonialBack.addEventListener("click", function () {
  currClick--;
  if (currClick < 0) {
    currClick = testamonialPicture.length - 1;
  }
  contentTransform();
});

// Focus on input
formInputs.forEach((item) =>
  item.addEventListener("focus", function () {
    item.previousElementSibling.classList.add("active");
    item.setAttribute("placeholder", "");
  })
);
