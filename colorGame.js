var numSquares = 6;
var colors = [];
var pickedColor;

var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
  //mode buttons event listeners
  setUpModeButtons();
  setUpSquares();
  reset();
}

function setUpSquares(){
  for(var i = 0; i<squares.length; i++){

    //add click listeners to squares

    squares[i].addEventListener("click",function(){
      var clickedColor = this.style["background-color"];

      if(clickedColor === pickedColor){
        messageDisplay.textContent = "Correct";
        resetButton.textContent = "Play Again?";
        changeColors(clickedColor);
        h1.style["background-color"] = clickedColor;
      }else{
        this.style["background-color"] = "#232323";
        messageDisplay.textContent = "Try Again";
      }
    });
  }
}

function setUpModeButtons(){
  for(var i = 0; i<modeButtons.length; i++){
    modeButtons[i].addEventListener("click",function(){
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");
      if(this.textContent ==="Easy"){
        numSquares = 3
      }else{
        numSquares = 6;
      }
      reset();

    });
  }
}


function reset(){
  colors = generateRandomColors(numSquares);
  //pick a new random color from array
  pickedColor = pickColor();
  //change colorDisplay to match picked colors;
  colorDisplay.textContent = pickedColor;
  messageDisplay.textContent = "";
  resetButton.textContent = "New Colors";
  //change colors of squares
  for(var i = 0; i<squares.length; i++){
    if(colors[i]){
      squares[i].style.display = "block";
      squares[i].style["background-color"] = colors[i];
    }else{
      squares[i].style.display = "none";
    }


  }
  h1.style["background-color"] = "steelblue";
}

resetButton.addEventListener("click",function(){
  reset();
});

function changeColors(color){
  //loop through all squares
  //change each color to match given color

  for(var i = 0; i<squares.length; i++){
    squares[i].style["background-color"] = color;
  }
}

function pickColor(){
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num){
  //make an array
  var arr = [];
  //repeat num times
  for(var i = 0; i<num; i++){
    //get random color and push into array
    arr.push(randomColor());
  }
  //return that array
  return arr;
}

function randomColor(){
  //pick a "red" from 0-255
  var r = Math.floor(Math.random() * 256);
  //pick a "green" from 0-255
  var g = Math.floor(Math.random() * 256);
  //pick a "blue" from 0-255
  var b = Math.floor(Math.random() * 256);
  var rgb="rgb("+r+", "+g+", "+b+")";
  return rgb;
}
