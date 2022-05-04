const API = "http://worldtimeapi.org/api/timezone/Africa/Tunis";
const select = (e) => document.querySelector(e);
const hourEl = document.querySelector(".hour");
const logo = document.querySelectorAll("#logo");

// get current time
let currentDate = new Date();
let hours =
  currentDate.getHours() < 10
    ? `0${currentDate.getHours()}`
    : currentDate.getHours();
let minutes =
  currentDate.getMinutes() < 10
    ? `0${currentDate.getMinutes()}`
    : currentDate.getMinutes();
let time = hours + ":" + minutes;
setInterval(() => {
  hourEl.innerText = `${time}`;
}, 1000);

// Smoooth Scrollbar
let bodyScrollBar = Scrollbar.init(select("#viewport"), { damping: 0.09 });
bodyScrollBar.track.xAxis.element.remove();
var scrollToTop = document.querySelector(".top");
scrollToTop.addEventListener("click", () => {
  bodyScrollBar.scrollTo(0, 0);
});

// dark mode
const toggleBtn = document.querySelector(".hamburger");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("lightmode");
  logo.forEach((logo) => {
    logo.classList.toggle("blacklogo");
  });
});

// Animations
window.addEventListener("load", () => {
  const mySpan = document.querySelector(".letters");
  const textWrapper = document.querySelector(".letters").textContent;
  let myString = " ";
  let myarray = textWrapper.split(" ");
  myarray.forEach((el) => {
    myString =
      myString +
      `<span class="m7"><span class="word">\u00A0${el}</span></span>`;
  });
  mySpan.innerHTML = myString;

  const paragraphs = document.querySelectorAll(".two p");
  console.log(paragraphs);

  gsap.set(".letters", { autoAlpha: 1 });
  gsap.from(".word", 1.2, {
    opacity: 0.7,
    rotation: "8deg",
    y: 150,
    ease: Expo.easeOut,
    stagger: 0.04,
  });
  gsap.set(".herosvg", { autoAlpha: 1 });
  gsap.from(".herosvg", 1.6, {
    opacity: 0,
    y: 60,
    ease: Expo.easeOut,
  });
  gsap.set(".two .big", { autoAlpha: 1 });
  gsap.from(".two .big", 1.8, {
    opacity: 0,
    scale: 1.2,
    ease: Expo.easeOut,
  });
  gsap.set(".two .small", { autoAlpha: 1 });
  gsap.from(".two .small", 1.8, {
    opacity: 0,
    scale: 1.2,
    ease: Expo.easeOut,
  });

  gsap.set(paragraphs, { autoAlpha: 1 });
  gsap.from(paragraphs, 1.8, {
    opacity: 0,
    y: 20,
    ease: Expo.easeOut,
  });
});
