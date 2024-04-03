// skrypt.js

// Pobierz element napisu
var text = document.getElementById("flashingText");

// Ustaw interwał na zmianę koloru co 500 ms (0.5 sekundy)
var interwal = setInterval(function() {
  // Generuj losowy kolor w formie szesnastkowej
  var newColor = '#' + Math.floor(Math.random()*16777215).toString(16);
  
  // Ustaw nowy kolor tekstu
  text.style.color = newColor;
}, 500); // 500 ms = 0.5 sekundy


  