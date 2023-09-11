$(document).ready(function () {
  $("a#hideText").click(function () {
    $(".dropdown p").hide(400);
  });
  $("a#showText").click(function () {
    $(".dropdown p").show(400);
  });
});
