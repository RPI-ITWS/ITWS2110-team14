// Shows or hides text (based on current state) for text in constitution, articles, and amendments.html
$(document).ready(function () {
  $("a.hideText").click(function () {
    $(".textContainer p").hide(400);
  });
  $("a.showText").click(function () {
    $(".textContainer p").show(400);
  });
});

// Dropsdown other elements in navbar on hover

function navBarDropOptions() {
  //Toggles between showing and hiding dropdown content
  document.getElementById("navBarDropElements").classList.toggle("show");
}

window.onclick = function (event) {
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
