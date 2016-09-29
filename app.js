$(document).ready(function () {

//appends the color blocks on load
$('#colorBlocks').append('<div class="box" id="red">');
$('#colorBlocks').append('<div class="box" id="blue">');
$('#colorBlocks').append('<div class="box" id="green">');
$('#colorBlocks').append('<div class="box" id="yellow">');
//adds a button to add and delete a box
$('#button').append('<button type="button" class="btnAdd">Add a Box!</button>');
$('#button').append('<button type="button" class="btnRemove">Remove a Box!</button>');

//adds boxes
$('#button').on('click', '.btnAdd', function() {
  var color = newBoxColor()
  $('#colorBlocks').append('<div class="box">');
  $('#colorBlocks').find(':last-child').attr( "id", color);
  playGame();
  // $('#answer').text('');
});
//deletes boxes
$('#button').on('click', '.btnRemove', function() {
  $('#colorBlocks').find(':last-child').remove();
  playGame();
  // $('#answer').text('');
});

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
//adds # so that it can be used
var color = '#' + colorChoice;
console.log("color", color);
//tells you you got the wrong answer on click
$(color).siblings().on('click', function() {
  $('#answer').text('That choice was incorrect');
});
//tells you you got the right answer on click
$(color).on('click', function() {

//change the color and add animations on click
  var change;

  function colorChange() {
    change = setTimeout(makePink, 2000);
  }

  function makePink() {
    console.log("color in click function",color);
    //change background-color
    $(color).css("background-color", "pink");
    //animates
    $(color).animate({
      margin: '50px',
      height: '150px',
      width: '150px'
  });
    colorReverse(); //to set the color back to original color
  }

  var goBack;
  function colorReverse() {
    goBack = setTimeout(makeOriginal, 2000);
  }

  function makeOriginal() {

    console.log('color is??', color);
    console.log('colorGoBack is??', colorGoBack);
    //takes of the # of variable color so it can be used to set the background-color
    var colorGoBack=color.substring(1, color.length);
    console.log('now the color is??', color);
    console.log('colorGoBack is??', colorGoBack);
    //reverse background-color
    $(color).css("background-color", colorGoBack);
    //reverse animations
    $(color).animate({
      margin: '10px',
      height: '80px',
      width: '80px'
        });
    playGame();
  }


  colorChange();
//changes message
  $('#answer').text(colorChoice + ' was correct');
});

}

function newBoxColor () {
// $('#answer').text('');
//creates an array that corresponds to the color blocks
var colorArray = ["red", "blue", "green", "yellow"];
// chooses a random number
var choice = chooseColor(colorArray);
console.log("choice Box", choice);
//uses that number as an index in the array to choose a color
var colorChoice = colorArray[choice];
console.log("colorChoice Box",colorChoice);

return colorChoice;
}


function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
  }

function chooseColor (array) {
   return randomNumber(0, array.length - 1);
  }



});
