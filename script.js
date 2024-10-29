// script.js

let display = document.getElementById('display');

function appendSymbol(symbol) {
  if (display.innerText === "0") display.innerText = "";
  display.innerText += symbol;
}

function clearDisplay() {
  display.innerText = "0";
}

function deleteLast() {
  if (display.innerText.length > 1) {
    display.innerText = display.innerText.slice(0, -1);
  } else {
    display.innerText = "0";
  }
}

function calculate() {
  try {
    display.innerText = eval(display.innerText);
  } catch (error) {
    display.innerText = "Error";
  }
}
