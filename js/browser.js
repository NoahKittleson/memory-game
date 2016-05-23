var Card = require('./../js/card.js').Card;
/*
var cardIds = ["#card1", "#card2", "#card3", "#card4", "#card5", "#card6", "#card7", "#card8", "#card9", "#card10", ]

$(document).ready(function(){
  for (i = 0; i < cardIds.length; i++) {
    $(cardIds[i]).click (function() {
      $(this).attr("src", "img/bender.jpg");
      $(this).attr("src", "img/deadpoo.jpg");
      console.log($(cardIds[i]));
    });
  }

});
*/

$(document).ready(function() {
  $("#card1").click (function() {
    $(this).attr("src", "img/bender.jpg");
  });

  $("#card2").click (function() {
    $(this).attr("src", "img/deadpoo.jpg");
  });

  $("#card3").click (function() {
    $(this).attr("src", "img/spongaboba.gif");
  });

  $("#card4").click (function() {
    $(this).attr("src", "img/patrick.jpg");
  });

  $("#card5").click (function() {
    $(this).attr("src", "img/spongaboba.gif");
  });

  $("#card6").click (function() {
    $(this).attr("src", "img/bender.jpg");
  });

  $("#card7").click (function() {
    $(this).attr("src", "img/tiny rick.png");
  });

  $("#card8").click (function() {
    $(this).attr("src", "img/deadpoo.jpg");
  });

  $("#card9").click (function() {
    $(this).attr("src", "img/tiny rick.png");
  });

  $("#card10").click (function() {
    $(this).attr("src", "img/patrick.jpg");
  });
});
