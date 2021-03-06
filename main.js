
//buttons
var p1Button = document.querySelector("#p1");
var p2Button = document.querySelector("#p2");
var resetButton = document.querySelector("#reset");
//player scores
var p1Score = 0;
var p2Score = 0;
//score display
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var numInput = document.querySelector("input[type='number']");
var winningScoreDisplay = document.querySelector("p span");
//winning score and gameOver
var gameOver = false;
var winningScore = 5;

//add event listener with call back function
p1Button.addEventListener("click", function(){
  // function checks if the game is not over
  if (!gameOver) {
    //if it's not over, it will add to the player's score
    p1Score++;
    //if the player score  matches the winningscore
    if (p1Score === winningScore) {
      p1Display.classList.add("winner");
      console.log("Game Over!");
      gameOver = true;
    }
    //then stop the code right here.
    p1Display.textContent = p1Score;
  }

});

p2Button.addEventListener("click", function(){
  if (!gameOver) {
    p2Score++;
    if (p2Score === winningScore) {
      p2Display.classList.add("winner");
      console.log("Game Over!");
      gameOver = true;
    }
    p2Display.textContent = p2Score;
  }

});

function reset() {
  p1Score = 0;
  p2Score = 0;
  p1Display.textContent = 0;
  p2Display.textContent = 0;
  p1Display.classList.remove("winner");
  p2Display.classList.remove("winner");
  gameOver = false;
}

resetButton.addEventListener("click", function(){
  reset();
});

numInput.addEventListener("change", function(){
  winningScoreDisplay.textContent = numInput.value;
  winningScore = Number(numInput.value);
  reset();
});
