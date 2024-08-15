const { add, subtract, multiply, divide } = require('../../src/functions/functions');

test('adds 10 + 5 to equal 15', () => {
  expect(add(10, 5)).toBe(15);
});

test('subtracts 5 from 10 to equal 5', () => {
  expect(subtract(10, 5)).toBe(5);
});

test('multiplies 10 by 5 to equal 50', () => {
  expect(multiply(10, 5)).toBe(50);
});

test('divides 10 by 5 to equal 2', () => {
  expect(divide(10, 5)).toBe(2);
});

test('divides 10 by 0 to return "Division by zero is not allowed."', () => {
  expect(divide(10, 0)).toBe('Division by zero is not allowed.');
});