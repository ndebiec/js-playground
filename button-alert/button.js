var btn = document.getElementById("thebutton");
var mainDiv = document.querySelector("header div");

function alertSomething() {
  alert("Something important");
}

function reColor() {
  aCol = Math.round(Math.random()*255);
  bCol = Math.round(Math.random()*255);
  cCol = Math.round(Math.random()*255);
  mainDiv.style.backgroundColor = "rgb(" + aCol + " , " + bCol + ", " + cCol + ")";
}

// btn.onclick = alertSomething;
btn.addEventListener("click", reColor);
