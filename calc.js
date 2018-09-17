
const [
  cmd,
  name,
  operand1String,
  operation,
  operand2String
] = process.argv;

const operand1 = parseInt(operand1String);
const operand2 = parseInt(operand2String);

switch (operation) {
  case '+':
    console.log(operand1 + operand2);
    break;
  default:
    throw new Error('Unknown operation');
}
