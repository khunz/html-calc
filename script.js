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
