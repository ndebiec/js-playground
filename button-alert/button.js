var btn = document.getElementById("thebutton");

function alertSomething() {
  alert("Something important");
}

// btn.onclick = alertSomething;
btn.addEventListener("click", alertSomething);
