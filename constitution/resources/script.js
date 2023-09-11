$(document).ready(function () {
  $("a#hideText").click(function () {
    $(".textContainer p").hide(400);
  });
  $("a#showText").click(function () {
    $(".textContainer p").show(400);
  });
});
