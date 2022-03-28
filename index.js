
const choices = ["rock", "paper", "scissors"];

var choice;
var score = 0;
let choiceObject = {
  'rock': {
    'rock': 'draw',
    'scissors': 'win',
    'paper': 'lose'
  },

  'paper': {
    'rock': 'win',
    'scissors': 'lose',
    'paper': 'draw'
  },

  'scissors': {
    'rock': 'lose',
    'scissors': 'draw',
    'paper': 'win'
  }

}
//player selection
$(".playerSelectBtn").on("click",function() {

  // var choice=0;
  $('#container').css('display', 'none');
  $('.img').css('display', 'none');
  $('.containerChoice').css('display', 'flex');
  var  playerBtn = this.value;

  createUserbutton(playerBtn);

  choice = Math.floor((Math.random()) * 3);
  var houseBtn = choices[choice];
  createHousebutton(houseBtn);

  console.log(playerBtn,houseBtn);
  result(playerBtn,houseBtn);

});

//rules button
$(".btn-rules").on("click",function(){
  $('.rulePage').css('display', 'flex');
});

$(".ruleBtn").on("click",function(){
  $('.rulePage').css('display', 'none');
});


//play again button configuration
$(".playAgainBtn").on("click",function(){
setTimeout (function(){
  $('#container').css('display', 'flex');
  $('.img').css('display', 'inline');
  $('.containerChoice').css('display', 'none');
  $("#plays").removeClass("shadow");
  $("#computer").removeClass("shadow");
  $("#computer").removeClass("btn-child1 btn-child2 btn-child3 playerChoice shadow");
  $("#plays").removeClass("btn-child1 btn-child2 btn-child3 shadow");
  $("#computer").addClass("houseChoice");
  $(".rules").css("padding","5px");
  $(".choiceChild1").css('column-gap','250px');
  $('.endResult').css('display', 'none');

},1000);
});

//result declaration
function result(player,house){
  setTimeout(function() {

  switch(choiceObject[player][house]){
    case 'win':
    score++;
    $("#currentScore").text(score);
    $('.endResult').css('display', 'block');
    $(".choiceChild1").css('column-gap','480px');
    $("#plays").addClass("shadow");
    console.log(score);
    $("#status").text("YOU WIN");
    break;

    case 'lose':
    $('.endResult').css('display', 'block');
    $("#status").text("YOU LOSE");
    $(".choiceChild1").addClass('column-gap','480px');
    $("#computer").addClass("shadow");
    console.log("You Lose");
    break;

    case 'draw':
    $('.endResult').css('display', 'block');
    $("#status").text("DRAW");
    $(".choiceChild1").css('column-gap','480px');
    $("#plays").addClass("shadow");
    $("#computer").addClass("shadow");
    console.log(" Draw");
    break;
  }
}, 1200);
}

//choosing style for selected button
function createUserbutton(player) {
  console.log("player=" + player);
  switch (player) {

    case 'paper':
      $("#plays").addClass("btn-child1");
      break;

    case 'rock':
      $("#plays").addClass("btn-child2");
      break;

    case 'scissors':
      $("#plays").addClass("btn-child3");
      break;
  }
}

function createHousebutton(house){
  console.log("house=" + house);
  setTimeout(function() {
$(".rules").css("padding","70px");
$("#computer").removeClass("houseChoice")
    switch (house) {
      case 'paper':
        $("#computer").addClass("btn-child1 playerChoice");
        break;
      case 'rock':
        $("#computer").addClass("btn-child2 playerChoice");
        break;
      case 'scissors':
        $("#computer").addClass("btn-child3 playerChoice");
        break;

    }

  }, 1000);
}
