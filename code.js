function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(operator, operandA, operandB) {
  switch (operator) {
    case '+':
      return add(operandA, operandB);
    case '-':
      return subtract(operandA, operandB);
    case '*':
      return multiply(operandA, operandB);
    case '/':
      return divide(operandA, operandB);
    default:
      throw new Error("Unknown operation: " + operator);
  }
}

[add, subtract, multiply, divide].forEach(f => console.log(f(3, 5)));
['+', '-', '*', '/'].forEach(o => console.log(operate(o, 6, 4)));
