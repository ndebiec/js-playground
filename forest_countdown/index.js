var countdownElement = document.getElementById('countdown');
var initialCountdownVal = countdownElement.innerHTML;

setInterval(function() {
  initialCountdownVal -= 1;
  countdownElement.innerHTML = initialCountdownVal
}, 1000);
