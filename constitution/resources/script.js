// Shows or hides text (based on current state) for text in constitution, articles, and amendments.html
$(document).ready(function() {

//   $(".preambleText").hide();
//   $("a.hideTextPreamble").on("click", function() {
//       var txt = $(".preambleText").is(':visible') ? 'Read More' : 'Read Less';
//       $("a.hideTextPreamble").text(txt);
//       $(this).next('.preambleText').slideToggle(200);
//   });


  $(".article1Text").hide();
  $("a.hideTextA1").on("click", function() {
      var txt = $(".article1Text").is(':visible') ? 'Read More' : 'Read Less';
      $("a.hideTextA1").text(txt);
      $(this).next('.article1Text').slideToggle(200);
  });
  $(".article2Text").hide();
  $("a.hideTextA2").on("click", function() {
      var txt = $(".article2Text").is(':visible') ? 'Read More' : 'Read Less';
      $("a.hideTextA2").text(txt);
      $(this).next('.article2Text').slideToggle(200);
  });
  $(".article3Text").hide();
  $("a.hideTextA3").on("click", function() {
      var txt = $(".article3Text").is(':visible') ? 'Read More' : 'Read Less';
      $("a.hideTextA3").text(txt);
      $(this).next('.article3Text').slideToggle(200);
  });
  $(".article4Text").hide();
  $("a.hideTextA4").on("click", function() {
      var txt = $(".article4Text").is(':visible') ? 'Read More' : 'Read Less';
      $("a.hideTextA4").text(txt);
      $(this).next('.article4Text').slideToggle(200);
  });
  $(".article5Text").hide();
  $("a.hideTextA5").on("click", function() {
      var txt = $(".article5Text").is(':visible') ? 'Read More' : 'Read Less';
      $("a.hideTextA5").text(txt);
      $(this).next('.article5Text').slideToggle(200);
  });
  $(".article6Text").hide();
  $("a.hideTextA6").on("click", function() {
      var txt = $(".article6Text").is(':visible') ? 'Read More' : 'Read Less';
      $("a.hideTextA6").text(txt);
      $(this).next('.article6Text').slideToggle(200);
  });
  $(".article7Text").hide();
  $("a.hideTextA7").on("click", function() {
      var txt = $(".article7Text").is(':visible') ? 'Read More' : 'Read Less';
      $("a.hideTextA7").text(txt);
      $(this).next('.article7Text').slideToggle(200);
  });
  //amendments read more/ less 

  $(".amendment1Text").hide();
  $("a.hideTextAm1").on("click", function() {
      var txt = $(".amendment1Text").is(':visible') ? 'Read More' : 'Read Less';
      $("a.hideTextAm1").text(txt);
      $(this).next('.amendment1Text').slideToggle(200);
  });
  $(".amendment2Text").hide();
  $("a.hideTextAm2").on("click", function() {
      var txt = $(".amendment2Text").is(':visible') ? 'Read More' : 'Read Less';
      $("a.hideTextAm2").text(txt);
      $(this).next('.amendment2Text').slideToggle(200);
  });
  $(".amendment3Text").hide();
  $("a.hideTextAm3").on("click", function() {
      var txt = $(".amendment3Text").is(':visible') ? 'Read More' : 'Read Less';
      $("a.hideTextAm3").text(txt);
      $(this).next('.amendment3Text').slideToggle(200);
  });
  $(".amendment4Text").hide();
  $("a.hideTextAm4").on("click", function() {
      var txt = $(".amendment4Text").is(':visible') ? 'Read More' : 'Read Less';
      $("a.hideTextAm4").text(txt);
      $(this).next('.amendment4Text').slideToggle(200);
  });
  $(".amendment5Text").hide();
  $("a.hideTextAm5").on("click", function() {
      var txt = $(".amendment5Text").is(':visible') ? 'Read More' : 'Read Less';
      $("a.hideTextAm5").text(txt);
      $(this).next('.amendment5Text').slideToggle(200);
  });
  $(".amendment6Text").hide();
  $("a.hideTextAm6").on("click", function() {
      var txt = $(".amendment6Text").is(':visible') ? 'Read More' : 'Read Less';
      $("a.hideTextAm6").text(txt);
      $(this).next('.amendment6Text').slideToggle(200);
  });
  $(".amendment7Text").hide();
  $("a.hideTextAm7").on("click", function() {
      var txt = $(".amendment7Text").is(':visible') ? 'Read More' : 'Read Less';
      $("a.hideTextAm7").text(txt);
      $(this).next('.amendment7Text').slideToggle(200);
  });
  $(".amendment8Text").hide();
  $("a.hideTextAm8").on("click", function() {
      var txt = $(".amendment8Text").is(':visible') ? 'Read More' : 'Read Less';
      $("a.hideTextAm8").text(txt);
      $(this).next('.amendment8Text').slideToggle(200);
  });
  $(".amendment9Text").hide();
  $("a.hideTextAm9").on("click", function() {
      var txt = $(".amendment9Text").is(':visible') ? 'Read More' : 'Read Less';
      $("a.hideTextAm9").text(txt);
      $(this).next('.amendment9Text').slideToggle(200);
  });
  $(".amendment10Text").hide();
  $("a.hideTextAm10").on("click", function() {
      var txt = $(".amendment10Text").is(':visible') ? 'Read More' : 'Read Less';
      $("a.hideTextAm10").text(txt);
      $(this).next('.amendment10Text').slideToggle(200);
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

onmouseout = function(event) {
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
document.addEventListener("DOMContentLoaded", function() {
  document.getElementsByClassName("textContainer").style.display = "block";
});