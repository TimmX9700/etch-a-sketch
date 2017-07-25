$(document).ready(function() {
  $("body").append("<div class='container'> TimmX97 Etch a Sketch! </div>");
  $(".container").append("<table class='grid'></table>");
  $(".grid").css("height", "480px");
  $(".grid").css("width", "480px");

  createGrid(16);
  colorSquare();

  $(".container").append("<button class='clear'> Clear </button>");
  $(".container").append("<button class='change'> Change Size </button>");

  $(".clear").click(function() {
    clear();
  });

  $(".change").click(function() {
    var size = parseInt(prompt("What box size do you want?", "16"));
    createGrid(size);
  });
});

function createGrid(size){
  $(".grid").find("tbody").remove();
  $(".grid").append("<tbody></tbody>");

  for (var i = 0; i < size; i++) {
    $("tbody").append("<tr></tr>");
  }
  for (var i = 0; i < size; i++) {
    $("tr").append("<td></td>");
  }

  clear();
  colorSquare();
}

function colorSquare() {
  $("td").on("mouseover", function() {
    if( $(this).css("background-color") === "rgb(255, 255, 255)"){
      var r = Math.floor(Math.random() * 256);
      var g = Math.floor(Math.random() * 256);
      var b = Math.floor(Math.random() * 256)
      $(this).css("opacity", "0.2")
      $(this).css("background-color", "rgb(" + r + "," + g + "," + b + ")");
    }
    else {
      $(this).css("opacity", "+=0.2");
    }
  });
}

function clear() {
  $("td").css("background-color", "rgb(255, 255, 255)");
  $("td").css("opacity", "1")

}
