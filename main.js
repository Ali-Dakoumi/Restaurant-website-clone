const API = "http://worldtimeapi.org/api/timezone/Africa/Tunis";
const select = (e) => document.querySelector(e);
const hourEl = document.querySelector(".hour");
const logo = document.querySelectorAll("#logo");

let currentDate = new Date();
let time = currentDate.getHours() + ":" + currentDate.getMinutes();
setInterval(() => {
  hourEl.innerText = `${time}`;
}, 1000);

// Smoooth Scrollbar
let bodyScrollBar = Scrollbar.init(select("#viewport"), { damping: 0.09 });
bodyScrollBar.track.xAxis.element.remove();

// let hour = document.querySelector(".hour");
var scrollToTop = document.querySelector(".top");
scrollToTop.addEventListener("click", () => {
  bodyScrollBar.scrollTo(0, 0);
});
const toggleBtn = document.querySelector(".hamburger");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("lightmode");
  logo.forEach((logo) => {
    logo.classList.toggle("blacklogo");
  });
});
var mySpan = document.querySelector(".letters");
var textWrapper = document.querySelector(".letters").textContent;
let myString = " ";
let myarray = textWrapper.split(" ");
myarray.forEach((el) => {
  myString =
    myString + `<span class="m7"><span class="word">\u00A0${el}</span></span>`;
});
mySpan.innerHTML = myString;

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
  y: 100,
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
