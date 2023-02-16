console.log("JS is working");

// Hamburger menu
const btnHamburger = document.querySelector("#btnHamburger");
const body = document.querySelector("body");
// const header = document.querySelector(".header");
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

// Select the button
const testimonies = document.querySelector("#testimonyList");
const leftbtn = document.querySelector("#left");
const rightbtn = document.querySelector("#right");

// left button listen for click
leftbtn.addEventListener("click", function () {
  console.log("left click");
  // determine where the sliding panel is currently (aka if a left, right  or neither class is applied)
  if (testimonies.classList.contains("right_three")) {
    // remove moreright class
    testimonies.classList.remove("right_three");
    // add right class
    testimonies.classList.add("right_two");
  } else if (testimonies.classList.contains("right_two")) {
    // remove moreright class
    testimonies.classList.remove("right_two");
    // add right class
    testimonies.classList.add("right_one");
  } else if (testimonies.classList.contains("right_one")) {
    // remove right class
    testimonies.classList.remove("right_one");
    // add center class
    testimonies.classList.add("center");
  } else if (testimonies.classList.contains("center")) {
    // remove center
    testimonies.classList.remove("center");
    // add left
    testimonies.classList.add("left_one");
  } else if (testimonies.classList.contains("left_one")) {
    //remove left class
    testimonies.classList.remove("left_one");
    // add moreleft class
    testimonies.classList.add("left_two");
  } else if (testimonies.classList.contains("left_two")) {
    //remove left class
    testimonies.classList.remove("left_two");
    // add moreleft class
    testimonies.classList.add("left_three");
  }
});

// right button listen for click
rightbtn.addEventListener("click", function () {
  // determine where the sliding panel is currently
  if (testimonies.classList.contains("left_three")) {
    // remove moreleft class
    testimonies.classList.remove("left_three");
    // add left class
    testimonies.classList.add("left_two");
  } else if (testimonies.classList.contains("left_two")) {
    // remove moreleft class
    testimonies.classList.remove("left_two");
    // add left class
    testimonies.classList.add("left_one");
  } else if (testimonies.classList.contains("left_one")) {
    // remove left
    testimonies.classList.remove("left_one");
    // add center
    testimonies.classList.add("center");
  } else if (testimonies.classList.contains("center")) {
    // remove center
    testimonies.classList.remove("center");
    // add right
    testimonies.classList.add("right_one");
  } else if (testimonies.classList.contains("right_one")) {
    // remove right class
    testimonies.classList.remove("right_one");
    // add moreright class
    testimonies.classList.add("right_two");
  } else if (testimonies.classList.contains("right_two")) {
    // remove right class
    testimonies.classList.remove("right_two");
    // add moreright class
    testimonies.classList.add("right_three");
  }
});

// Timed Change of Hero Image
// const heroImage = document.querySelector("#HeroImage");
// console.log(heroImage.src);

// function changeImageClass() {
//   if (heroImage.src == "http://127.0.0.1:5500/church-worship.jpg") {
//     heroImage.src = "praising-god.jpg";
//   } else if (heroImage.src == "http://127.0.0.1:5500/praising-god.jpg") {
//     heroImage.src = "church-worship.jpg";
//   }
// }

// setInterval(changeImageClass, 10000);

// const pslider = document.querySelectorAll(".parallax-slider");
// var bool = false;

// function changeImage() {
//   bool = !bool;
//   let imgSrc = bool ? "church-worship.jpg" : "praising-god.jpg"; // Toggle image
//   pslider.addClass("transition-src"); // Add class to begin transision
//   setTimeout(() => {
//     pslider
//       .attr("src", "http://127.0.0.1:5500/${imgSrc}")
//       .removeClass("transitioning-src");
//   }, 400); // Ensure timeout matches transition time, remove transisition class
// }

// setInterval(changeImage(), 6000);
