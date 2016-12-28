var p1Button = document.querySelector("#p1");
var p2Button = document.querySelector("#p2");
var p1Score = 0;
var p1Display = document.querySelector("#p1Display");

p1Button.addEventListener("click", function(){
  p1Score++;
  console.log(p1Score);
  p1Display.textContent = p1Score;
});
