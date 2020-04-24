var countdownElement = document.getElementById('countdown');
var initialCountdownVal = countdownElement.innerHTML;
var fontSizeInPx = window.getComputedStyle(countdownElement).getPropertyValue("font-size"); // .fontSize
// for inline style el.style.font-size for css style window.getComputedStyle(el)
var fontSizeFloat = parseFloat(fontSizeInPx);
var currentTextSize = fontSizeFloat
console.log(fontSizeFloat);

setInterval(function() {
  currentTextSize -= 50
  initialCountdownVal > 0 ? initialCountdownVal -= 1 : 0; //should break/return when 0
  countdownElement.innerHTML = initialCountdownVal;
  countdownElement.style.fontSize = (currentTextSize) + 'px';
}, 1000);
