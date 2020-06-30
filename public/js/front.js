$(document).ready(function () {
  $(".fadein").hide();

  $(window).on("scroll", function () {
    let y = $(this).scrollTop();
    console.log(y);
    if (y > 600) {
      $(".fadein").each(function (i) {
        $(this)
          .delay(500 * i)
          .fadeIn(1000);
      });
    }
  });
});

window.addEventListener("resize", function () {
  let slide = document.querySelector("#slide1");
  let newWidth = window.innerWidth;
  console.log(newWidth);
  if (newWidth <= 666) {
    slide1.classList.remove("moveSlide1");
    slide1.style.textAlign = "center";
    slide2.classList.remove("moveSlide2");
    slide2.style.textAlign = "center";
    slide3.classList.remove("moveSlide3");
    slide3.style.textAlign = "center";
    slide4.classList.remove("moveSlide4");
    slide4.style.textAlign = "center";
  } else if ((newWidth) => 666) {
    slide1.classList.add("moveSlide1");
    slide1.style.removeProperty("text-align");
    slide2.classList.add("moveSlide2");
    slide2.style.removeProperty("text-align");
    slide3.classList.add("moveSlide3");
    slide3.style.removeProperty("text-align");
    slide4.classList.add("moveSlide4");
    slide4.style.removeProperty("text-align");
  }
});
