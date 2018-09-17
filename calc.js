
const [
  cmd,
  name,
  operand1String,
  operation,
  operand2String
] = process.argv;

const operand1 = parseInt(operand1String);
const operand2 = parseInt(operand2String);

const add = (a, b) => a + b;

const multiply = function(a, b) {
  return a * b;
};

switch (operation) {
  case '+':
    console.log(add(operand1, operand2));
    break;
  case '*':
    console.log(multiply(operand1, operand2));
    break;
  default:
    throw new Error('Unknown operation');
}
