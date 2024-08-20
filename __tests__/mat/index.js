const { soma, subtrair, multiplicar, dividir } = require('../../src/mat/mat');

test('somar 10 + 5 e retornar 15', () => {
  expect(soma(10, 5)).toBe(15);
});

test('subtrair 5 de 10 e retornar 5', () => {
  expect(subtrair(10, 5)).toBe(5);
});

test('multiplicar 10 por 5 e retornar 50', () => {
  expect(multiplicar(10, 5)).toBe(50);
});

test('dividir 10 por 5 e retornar 2', () => {
  expect(dividir(10, 5)).toBe(2);
});

test('dividir 10 por 0 e retornar "Divisão por zero não é permitida."', () => {
  expect(dividir(10, 0)).toBe('Divisão por zero não é permitida.');
});