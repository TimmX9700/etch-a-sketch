$(document).ready(function() {
  $("body").append("<div class='container'> aaa </div>");
  $(".container").append("<table class='grid'></table>");
  $(".grid").append("<tbody></tbody>");

  for (var i = 0; i < 16; i++) {
    $("tbody").append("<tr></tr>");
  }
  for (var i = 0; i < 16; i++) {
      $("tr").append("<td></td>");
  }

  $("td").on("mouseover", function() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256)
    $(this).css("background-color", "rgb(" + r + "," + g + "," + b + ")");
  });

});
