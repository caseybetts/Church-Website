console.log("JS is working");

// Hamburger menu
const btnHamburger = document.querySelector("#btnHamburger");
const body = document.querySelector("body");
// const header = document.querySelector(".header");
const fadeElms = document.querySelectorAll(".has-fade");
const background = document.querySelector("#bgoverlay");
const close_button = document.querySelectorAll(".close");
var right_end = false;
// Testimony "Read More" buttons
const testimony1 = document.querySelector("#testimony1");
const testimony2 = document.querySelector("#testimony2");
const testimony3 = document.querySelector("#testimony3");
const testimony4 = document.querySelector("#testimony4");
const testimony5 = document.querySelector("#testimony5");
const testimony6 = document.querySelector("#testimony6");
const testimony7 = document.querySelector("#testimony7");
const testimony8 = document.querySelector("#testimony8");
const testimony9 = document.querySelector("#testimony9");
const testimony10 = document.querySelector("#testimony10");
const testimony11 = document.querySelector("#testimony11");
const testimony12 = document.querySelector("#testimony12");
const testimony13 = document.querySelector("#testimony13");
const testimony14 = document.querySelector("#testimony14");
const testimony15 = document.querySelector("#testimony15");
const testimony16 = document.querySelector("#testimony16");

// Testimony carousel left and right buttons
const testimonies = document.querySelector("#testimonyList");
const leftbtn = document.querySelector("#left");
const rightbtn = document.querySelector("#right");

// Hamburger menu for mobile click to open, click to close
btnHamburger.addEventListener("click", function () {
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

// Testimony is displayed when "Read More" button is clicked
testimony1.addEventListener("click", function () {
  console.log("Read More");
  // Open full testimony text and hide the summary
  document.querySelector("#t1_summary").classList.add("no_display");
  document.querySelector("#t1_full").classList.add("flex_display");
  document.querySelector("#t1_full").classList.remove("no_display");
  // Unhide the background overlay
  document.querySelector("#t_overlay").classList.remove("no_display");
  // Stop scrolling
  body.classList.add("noscroll");
});

// Remove the full testimony when the background is clicked
document.querySelector("#t_overlay").addEventListener("click", function () {
  // Hide the full testimony
  document.querySelector("#t1_full").classList.add("no_display");
  document.querySelector("#t1_full").classList.remove("flex_display");
  // Unhide the summary
  document.querySelector("#t1_summary").classList.remove("no_display");
  // Hide the overlay
  document.querySelector("#t_overlay").classList.add("no_display");
  // Re-enable scrolling
  body.classList.remove("noscroll");
});

function close_testimony() {
  // Hide the full testimony
  document.querySelector("#t1_full").classList.add("no_display");
  document.querySelector("#t1_full").classList.remove("flex_display");
  // Unhide the summary
  document.querySelector("#t1_summary").classList.remove("no_display");
  // Hide the overlay
  document.querySelector("#t_overlay").classList.add("no_display");
  // Re-enable scrolling
  body.classList.remove("noscroll");
}

// Remove the full testimony when the "x" is clicked
document.querySelectorAll(".close").forEach((item) => {
  item.addEventListener("click", close_testimony);
});

// Testimony 2 is displayed when "Read More" button is clicked
testimony2.addEventListener("click", function () {
  console.log("test 2");
  // Open full testimony text
  document.querySelector("#t2_summary").classList.add("no_display");
  document.querySelector("#t2_full").classList.remove("no_display");
  // Change button
  document.querySelector("#testimony2").classList.add("no_display");
  document.querySelector("#testimony2-l").classList.remove("no_display");
  // Increase box size
  document.querySelector("#t_2").classList.add("full");
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

function moveleft() {
  // determine where the sliding panel is currently (aka if a left, right  or neither class is applied)
  if (testimonies.classList.contains("p_8")) {
    // remove moreright class
    testimonies.classList.remove("p_8");
    // add right class
    testimonies.classList.add("p_7");
  } else if (testimonies.classList.contains("p_7")) {
    // remove moreright class
    testimonies.classList.remove("p_7");
    // add right class
    testimonies.classList.add("p_6");
  } else if (testimonies.classList.contains("p_6")) {
    // remove right class
    testimonies.classList.remove("p_6");
    // add center class
    testimonies.classList.add("p_5");
  } else if (testimonies.classList.contains("p_5")) {
    // remove center
    testimonies.classList.remove("p_5");
    // add left
    testimonies.classList.add("p_4");
  } else if (testimonies.classList.contains("p_4")) {
    //remove left class
    testimonies.classList.remove("p_4");
    // add moreleft class
    testimonies.classList.add("p_3");
  } else if (testimonies.classList.contains("p_3")) {
    //remove left class
    testimonies.classList.remove("p_3");
    // add moreleft class
    testimonies.classList.add("p_2");
    right_end = false;
  } else if (testimonies.classList.contains("p_2")) {
    //remove left class
    testimonies.classList.remove("p_2");
    // add moreleft class
    testimonies.classList.add("p_1");
    right_end = false;
  }
}

// left button listen for click
leftbtn.addEventListener("click", moveleft);

function moveright() {
  // determine where the sliding panel is currently
  if (testimonies.classList.contains("p_1")) {
    // remove moreleft class
    testimonies.classList.remove("p_1");
    // add left class
    testimonies.classList.add("p_2");
  } else if (testimonies.classList.contains("p_2")) {
    // remove moreleft class
    testimonies.classList.remove("p_2");
    // add left class
    testimonies.classList.add("p_3");
  } else if (testimonies.classList.contains("p_3")) {
    // remove left
    testimonies.classList.remove("p_3");
    // add center
    testimonies.classList.add("p_4");
  } else if (testimonies.classList.contains("p_4")) {
    // remove center
    testimonies.classList.remove("p_4");
    // add right
    testimonies.classList.add("p_5");
  } else if (testimonies.classList.contains("p_5")) {
    // remove right class
    testimonies.classList.remove("p_5");
    // add moreright class
    testimonies.classList.add("p_6");
  } else if (testimonies.classList.contains("p_6")) {
    // remove right class
    testimonies.classList.remove("p_6");
    // add moreright class
    testimonies.classList.add("p_7");
    right_end = true;
  } else if (testimonies.classList.contains("p_7")) {
    // remove right class
    testimonies.classList.remove("p_7");
    // add moreright class
    testimonies.classList.add("p_8");
    right_end = true;
  }
}

// right button listen for click
rightbtn.addEventListener("click", moveright);

// Timed motion of the testimony caousel
setInterval(function () {
  if (right_end) {
    moveleft();
  } else {
    moveright();
  }
}, 1000000);

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
