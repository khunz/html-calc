// Functions for the basic operations: add, subtract, multiply, divide
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

// Creating variables for the display
let numOne = 0,
  operator = "",
  numTwo = 0,
  showingEval = false,
  newNum = false;

// Creating variable to store screen display
const screen = document.querySelector(".screen");
let display = "";
screen.textContent = display;

// Function to update display on button press
function update(input) {
  if (display.length > 8) {
    return;
  }
  if (showingEval || newNum) {
    clearScreen();
    showingEval = false;
    newNum = false;
  }
  display += input;
  screen.textContent = display;
}

// Function to clear screen
function clearScreen() {
  display = "";
  screen.textContent = display;
}

// Clear button functionality
const clear = document.querySelector("#clear");
clear.addEventListener("click", () => {
  clearBtnPress();
});

function clearBtnPress() {
  numOne = 0;
  operator = "";
  numTwo = 0;
  clearScreen();
}

// Number button functionality
const numbers = document.querySelectorAll(".number");
numbers.forEach((number) => {
  number.addEventListener("click", (e) => {
    update(e.target.textContent);
  });
});

// Decimal button functionality
const decimal = document.querySelector("#decimal");
decimal.addEventListener("click", decimalBtnPress);

function decimalBtnPress() {
  if (display.includes(".")) {
    return;
  }
  update(".");
}

//Backspace button functionality
const backsp = document.querySelector("#backspace");
backsp.addEventListener("click", backspace);

function backspace() {
  if (display == "error" || display == "") {
    return;
  }
  display = display.substring(0, display.length - 1);
  screen.textContent = display;
}

// Equals button functionality
const equals = document.querySelector("#equals");
equals.addEventListener("click", evaluate);

// Operation button functionality
const operation = document.querySelectorAll(".operation");
operation.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    opBtnPress(e.target.textContent);
  });
});

function opBtnPress(sym) {
  showingEval = false;
  operate(sym);
}

// Rounding function
function roundTo(num, places) {
  const factor = Math.pow(10, places);
  return Math.round(num * factor) / factor;
}

// Operate function
function operate(sym) {
  if (!(display == "")) {
    numOne = parseFloat(display);
  }
  operator = sym;
  newNum = true;
}

// Calculate function
function calculate(a, b, op) {
  switch (op) {
    case "+":
      return add(a, b);
    case "−":
      return subtract(a, b);
    case "×":
      return multiply(a, b);
    case "÷":
      return divide(a, b);
  }
}

// Evaluate function
function evaluate() {
  numTwo = parseFloat(display);
  clearScreen();
  let result = roundTo(calculate(numOne, numTwo, operator), 4);
  if (result.toString().length > 9) {
    display = "TOO BIG";
  } else if (!isFinite(result)) {
    display = "error";
  } else {
    display = String(result);
  }
  screen.textContent = display;
  showingEval = true;
}

//Keyboard functionality
document.addEventListener("keydown", (e) => {
  if (isFinite(parseFloat(e.key))) {
    update(e.key);
  }

  switch (e.key) {
    case ".":
      e.preventDefault();
      decimalBtnPress();
      break;
    case "/":
      opBtnPress("÷");
      break;
    case "*":
      opBtnPress("×");
      break;
    case "-":
      opBtnPress("−");
      break;
    case "+":
      opBtnPress("+");
      break;
    case "Enter":
      evaluate();
      break;
    case "=":
      evaluate();
      break;
    case "Backspace":
      backspace();
      break;
    case "Escape":
      clearBtnPress();
      break;
  }
});

// Preventing focus capture
document.querySelectorAll("button").forEach((btn) => {
  btn.addEventListener("mousedown", (e) => e.preventDefault());
});

// Special symbols used: ÷ × − +
