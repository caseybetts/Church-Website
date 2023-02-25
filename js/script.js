console.log("JS is working");

////////////////// Variables ///////////////////////////////
// Hamburger menu
const btnHamburger = document.querySelector("#btnHamburger");
const body = document.querySelector("body");
const fadeElms = document.querySelectorAll(".has-fade");
const background = document.querySelector("#bgoverlay");

// Testimony Section
const close_button = document.querySelectorAll(".close");
const full_testimony = document.querySelectorAll(".full_testimony");
const read_more = document.querySelectorAll(".read_more");
var right_end = false;
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

// Testimony carousel left and right buttons
const testimonies = document.querySelector("#testimonyList");
const leftbtn = document.querySelector("#left");
const rightbtn = document.querySelector("#right");

////////////// Testemony Section ////////////////////////
// Defining functions
function close_testimony() {
  full_testimony.forEach((item) => {
    if (item.classList.contains("flex_display")) {
      // Hide the full testimony
      item.classList.remove("flex_display");
      item.classList.add("no_display");
    }
    // Hide the overlay
    document.querySelector("#t_overlay").classList.add("no_display");
    // Re-enable scrolling
    body.classList.remove("noscroll");
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

// "Read More" Button Functionality
read_more.forEach((item) => {
  item.addEventListener("click", function () {
    console.log("Button", item.id, " was clicked");
    if (item.id == "testimony1") {
      // Make The Full Testemony div flex display
      document.querySelector("#t1_full").classList.add("flex_display");
      document.querySelector("#t1_full").classList.remove("no_display");
    } else if (item.id == "testimony2") {
      // Make The Full Testemony div flex display
      document.querySelector("#t2_full").classList.add("flex_display");
      document.querySelector("#t2_full").classList.remove("no_display");
    } else if (item.id == "testimony3") {
      // Make The Full Testemony div flex display
      document.querySelector("#t3_full").classList.add("flex_display");
      document.querySelector("#t3_full").classList.remove("no_display");
    } else if (item.id == "testimony4") {
      // Make The Full Testemony div flex display
      document.querySelector("#t4_full").classList.add("flex_display");
      document.querySelector("#t4_full").classList.remove("no_display");
    } else if (item.id == "testimony5") {
      // Make The Full Testemony div flex display
      document.querySelector("#t5_full").classList.add("flex_display");
      document.querySelector("#t5_full").classList.remove("no_display");
    } else if (item.id == "testimony6") {
      console.log(item.id);
      // Make The Full Testemony div flex display
      document.querySelector("#t6_full").classList.add("flex_display");
      document.querySelector("#t6_full").classList.remove("no_display");
    } else if (item.id == "testimony7") {
      console.log(item.id);
      // Make The Full Testemony div flex display
      document.querySelector("#t7_full").classList.add("flex_display");
      document.querySelector("#t7_full").classList.remove("no_display");
    } else if (item.id == "testimony8") {
      // Make The Full Testemony div flex display
      document.querySelector("#t8_full").classList.add("flex_display");
      document.querySelector("#t8_full").classList.remove("no_display");
    } else if (item.id == "testimony9") {
      // Make The Full Testemony div flex display
      document.querySelector("#t9_full").classList.add("flex_display");
      document.querySelector("#t9_full").classList.remove("no_display");
    } else if (item.id == "testimony10") {
      // Make The Full Testemony div flex display
      document.querySelector("#t10_full").classList.add("flex_display");
      document.querySelector("#t10_full").classList.remove("no_display");
    } else if (item.id == "testimony11") {
      // Make The Full Testemony div flex display
      document.querySelector("#t11_full").classList.add("flex_display");
      document.querySelector("#t11_full").classList.remove("no_display");
    } else if (item.id == "testimony12") {
      // Make The Full Testemony div flex display
      document.querySelector("#t12_full").classList.add("flex_display");
      document.querySelector("#t12_full").classList.remove("no_display");
    } else if (item.id == "testimony13") {
      // Make The Full Testemony div flex display
      document.querySelector("#t13_full").classList.add("flex_display");
      document.querySelector("#t13_full").classList.remove("no_display");
    } else if (item.id == "testimony14") {
      // Make The Full Testemony div flex display
      document.querySelector("#t14_full").classList.add("flex_display");
      document.querySelector("#t14_full").classList.remove("no_display");
    } else if (item.id == "testimony15") {
      // Make The Full Testemony div flex display
      document.querySelector("#t15_full").classList.add("flex_display");
      document.querySelector("#t15_full").classList.remove("no_display");
    }
    // Unhide the background overlay
    document.querySelector("#t_overlay").classList.remove("no_display");
    // Prevent the page from scrolling
    body.classList.add("noscroll");
  });
});

// Testimony Background Overlay Click Functionality
document.querySelector("#t_overlay").addEventListener("click", close_testimony);

// Full Testimony "X" Close Button Functionality
document.querySelectorAll(".close").forEach((item) => {
  item.addEventListener("click", close_testimony);
});

// "<" Left Button Functionality
leftbtn.addEventListener("click", moveleft);

// ">" Right Button Functionality
rightbtn.addEventListener("click", moveright);

// Timed motion of the testimony caousel
setInterval(function () {
  if (right_end) {
    moveleft();
  } else {
    moveright();
  }
}, 10000);

///////////////////// Header Section //////////////////////
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

// Mobile Menu Background Overlay Functionality
background.addEventListener("click", function () {
  // Close hamburger menu
  body.classList.remove("noscroll");
  body.classList.remove("open");
  background.classList.add(".fade-out-background");
  background.classList.remove(".fade-in-background");
  fadeElms.forEach(function (element) {
    element.classList.remove("fade-in");
    element.classList.add("fade-out");
  });
});

/////////// Quote Section /////////////
// Quote grows with scroll

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
