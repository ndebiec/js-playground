var countdownElement = document.getElementById('countdown');
var initialCountdownVal = countdownElement.innerHTML;
var fontSizeInPx = window.getComputedStyle(countdownElement).getPropertyValue("font-size"); // .fontSize
// for inline style el.style.font-size for css style window.getComputedStyle(el)
var fontSizeFloat = parseFloat(fontSizeInPx);
var currentTextSize = fontSizeFloat
console.log(fontSizeFloat);

var interval = setInterval(function() {
  initialCountdownVal -= 1;
  currentTextSize -= 45
  countdownElement.innerHTML = initialCountdownVal;
  countdownElement.style.fontSize = (currentTextSize) + 'px';

  if (initialCountdownVal === 0) {
    clearInterval(interval);
  }
}, 1000);
