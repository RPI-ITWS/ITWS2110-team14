// Shows or hides text (based on current state) for text in constitution, articles, and amendments.html
$(document).ready(function () {
  // $("a.hideText").click(function () {
  //   $(".textContainer p").hide(400);
  // });
  // $("a.showText").click(function () {
  //   $(".textContainer p").show(400);
  // });
  $(".article1Text").hide();
  $("a.hideTextA1").on("click", function () {
      var txt = $(".article1Text").is(':visible') ? 'Read More' : 'Read Less';
      $("a.hideTextA1").text(txt);
      $(this).next('.article1Text').slideToggle(200);
  });
  $(".article2Text").hide();
  $("a.hideTextA2").on("click", function () {
      var txt = $(".article2Text").is(':visible') ? 'Read More' : 'Read Less';
      $("a.hideTextA2").text(txt);
      $(this).next('.article2Text').slideToggle(200);
  });
});

// Dropsdown other elements in navbar on hover

function navBarDropOptions() {
  //Toggles between showing and hiding dropdown content
  document
    .getElementById("navBarDropElements")
    .addEventListener("mouseover", mouseOver);
}

function mouseOver() {
  document.getElementById("navBarDropElements").dropdowns;
}

onmouseout = function (event) {
  if (!event.target.matches(".navBarElements")) {
    var dropdowns = document.getElementsByClassName("navBarDropdown");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

document.getElementsByClassName("textContainer").style.display = "none";
document.addEventListener("DOMContentLoaded", function () {
  document.getElementsByClassName("textContainer").style.display = "block";
});
