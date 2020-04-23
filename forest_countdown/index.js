var countdownElement = document.getElementById('countdown');
var initialCountdownVal = countdownElement.innerHTML;
var bgImgPath = document.getElementById('bg-img');

setInterval(function() {
  initialCountdownVal > 0 ? initialCountdownVal -= 1 : 0; //should break/return when 0
  countdownElement.innerHTML = initialCountdownVal
  var isEven = initialCountdownVal % 2 === 0
  bgImgPath.src = isEven ? 'background-1.jpg' : 'background-2.jpg'
}, 1000);
