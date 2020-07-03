$(document).ready(function () {
  $(".fadein").hide();

  $(window).on("scroll", function () {
    let y = $(this).scrollTop();
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

	let navbar = document.querySelector("#mainnav");
window.addEventListener("scroll", function(event) {

	let trackScroll = this.scrollY;
	
	
	
if(trackScroll >= 386){
	navbar.classList.add("switch");
}else{
	navbar.classList.remove("switch");
}
	})




let navItems = document.querySelectorAll(".nav-item");

const removeSelected = active => navItems.forEach(elem => {
  if (elem != active) elem.classList.remove("active");
})

navItems.forEach(navitem => {
  navitem.addEventListener("click", function() {
    navitem.classList.toggle("active"); // or add if something has to be selected
    removeSelected(navitem);
  });

})
