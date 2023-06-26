const Calculator = require('./calculator');

const calculator = new Calculator(process.argv[2]);

console.log(calculator.calculate());