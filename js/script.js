console.log("JS is working");
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

// const about_label = document.getElementById("About");
// const about_dropdown = document.getElementById("About_Dropdown");
// const aboutElems = document.querySelectorAll(".about");
// var inAbout = false;
// var inResources = false;

// aboutElems.addEventListener("click", function () {
//   console.log("click hamburger");
//   //Open About Menu
//   aboutElems.forEach(function (element) {
//     element.classList.add("unhide");
//     element.classList.remove("hide");
//   });
// });

// about_dropdown.addEventListener("mouseover", function () {
//   console.log("On Dropdown");
//   inAbout = true;
// });

// about_dropdown.addEventListener("mouseout", function () {
//   console.log("out of about");
//   fadeElems.forEach(function (element) {
//     element.classList.remove("fade-in");
//     element.classList.add("fade-out");
//   });
// });
