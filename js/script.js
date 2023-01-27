console.log("JS is working");

// Hamburger menu
const btnHamburger = document.querySelector("#btnHamburger");
const body = document.querySelector("body");
const header = document.querySelector(".header");
const fadeElms = document.querySelectorAll(".has-fade");
const background = document.querySelector("#bgoverlay");

btnHamburger.addEventListener("click", function () {
  console.log("hamburger click");

  if (body.classList.contains("open")) {
    // Close hamburger menu
    body.classList.remove("noscroll");
    body.classList.remove("open");
    background.classList.add(".fade-out-background");
    background.classList.remove(".fade-in-background");
    fadeElms.forEach(function (element) {
      element.classList.remove("fade-in");
      element.classList.add("fade-out");
    });
  } else {
    // Open hamburger menu
    body.classList.add("noscroll");
    body.classList.add("open");
    background.classList.remove(".fade-out-background");
    background.classList.add(".fade-in-background");
    fadeElms.forEach(function (element) {
      element.classList.remove("fade-out");
      element.classList.add("fade-in");
    });
  }
});

// Quote grows with scroll
console.log("window width: " + window.innerWidth);

if (window.innerWidth > 1334) {
  var cont = document.getElementById("content");

  window.addEventListener("scroll", function () {
    const current = window.scrollY;

    if (current < 100) {
      cont.style.fontSize = "30px";
    } else if (current > 900) {
      cont.style.fontSize = "45px";
    } else {
      cont.style.fontSize = 27 + current / 48 + "px";
    }
  });
}
