const API = "http://worldtimeapi.org/api/timezone/";
const select = (e) => document.querySelector(e);
const hourEl = document.querySelector(".hour");
const logo = document.querySelectorAll("#logo");

async function getTime() {
  const resp = await fetch(API + "Africa/Tunis");
  const respData = await resp.json();
  hourEl.innerText = `${respData.datetime.slice(11, 16)}`;
}
setInterval(() => {
  getTime();
}, 500);

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
gsap.from(".word", 0.75, {
  rotation: "6deg",
  y: 150,
  ease: Expo.easeOutIn,
  stagger: 0.02,
});
