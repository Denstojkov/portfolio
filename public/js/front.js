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
      this.classList.remove("slide");
    });
  } else if ((newWidth) => 666) {
    slide.forEach((el) => {
      this.classList.add("slide");
    });
  }
});
