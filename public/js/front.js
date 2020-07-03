$(document).ready(function () {
  $(".fadein").hide();

  $(window).on("scroll", function () {
    let y = $(this).scrollTop();
    console.log(y);
    if (y > 600) {
      $(".fadein").each(function (i) {
        $(this)
          .delay(500 * i)
          .fadeIn(500);
      });
    }
  });
});

let slide = document.querySelectorAll(".slide");

window.addEventListener("resize", function () {
  let newWidth = window.innerWidth;
  console.log(newWidth);
  if (newWidth <= 666) {
    slide.forEach((el) => {
      el.classList.add("resPonsive");
    });
  } else if ((newWidth) => 666) {
    slide.forEach((el) => {
      el.classList.remove("resPonsive");
    });
  }
});

let logo = document.getElementById("rainbow");
let elem = document.createElement("span");

logo.addEventListener("mouseenter", transition);
logo.addEventListener("mouseleave", reset);

function reset() {
  logo.innerHTML = "MYPORTFOLIO";
}

function transition() {
  let words = logo.textContent.split("");
  logo.innerHTML = "";
  words.forEach((word) => {
    var current = document.createElement("span"); // Create element
    current.style.color = getRandomColor();
    current.classList.add("rfade");
    current.innerHTML = word;
    logo.appendChild(current);
  });
}

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

let navbar = document.querySelectorAll(".navbar");
if(window.innerWidth >= 400){
	console.log("HERE!");
	navbar.classList.replace("bg-dark", "switch");
}