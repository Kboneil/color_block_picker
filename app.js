$(document).ready(function () {

//appends the color blocks on load
$('#colorBlocks').append('<div class="box" id="red">');
$('#colorBlocks').append('<div class="box" id="blue">');
$('#colorBlocks').append('<div class="box" id="green">');
$('#colorBlocks').append('<div class="box" id="yellow">');




playGame();


function playGame () {
// $('#answer').text('');
//creates an array that corresponds to the color blocks
var colorArray = ["red", "blue", "green", "yellow"];
// chooses a random number
var choice = chooseColor(colorArray);
console.log("choice", choice);
//uses that number as an index in the array to choose a color
var colorChoice = colorArray[choice];
console.log("colorChoice",colorChoice);
//tells what color to choose
$('#colorChoose').text('Find the color: ' + colorChoice);

var color = '#' + colorChoice;
console.log("color", color);

$(color).siblings().on('click', function() {
  $('#answer').text('That choice was incorrect');
});

$(color).on('click', function() {
  $('#answer').text(colorChoice + ' was correct');
  playGame();
});

return color;
}

//if the right color is clicked, the user gets correct, if wrong, the user gets incorrect
// $(color).siblings().on('click', function() {
//   $('#answer').text('incorrect');
// });
//
// $(color).on('click', function() {
//   $('#answer').text('correct');
//   playGame();
// });


// var clicked = false;
//
// $(color).on('click', function() {
//   click=true;
// });
//
// if (clicked) {
//
// $('#colorBlocks').on('click', function() {
//   $('#answer').text('incorrect');
// });
//
// } else {
//
//   $('#answer').text('correct');
// }


function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
  }

function chooseColor (array) {
   return randomNumber(1, array.length);
  }



});
