// Functions for the basic operations: add, subtract, multiply, divide
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

// Creating variables for the display
let numOne = 0,
  operator = "",
  numTwo = 0;

// Operate function
function operate(a, b, op) {
  switch (op) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "x":
      return multiply(a, b);
    case "/":
      return divide(a, b);
  }
}

// Creating variable to store screen display
const screen = document.querySelector(".screen");
let display = "";
screen.textContent = display;

// Function to update display on button press
function update(input) {
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
clear.addEventListener("click", clearScreen);

// Number button functionality
const numbers = document.querySelectorAll(".number");
numbers.forEach((number) => {
  number.addEventListener("click", (e) => {
    update(e.target.textContent);
  });
});
