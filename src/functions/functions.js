const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => b === 0 ? "Division by zero is not allowed." : a / b;

module.exports = { add, subtract, multiply, divide };