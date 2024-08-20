const soma = (a, b) => a + b;
const subtrair = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => b === 0 ? "Divisão por zero não é permitida." : a / b;

module.exports = { soma, subtrair, multiplicar, dividir };