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

let display_string = '0';
let operator = '';
let input = '0';
let accumulator = null;

function digitListener(event) {
  if (event.target.textContent === '.') {
    if (input.indexOf('.') === -1) {
      input += event.target.textContent;
    } else {
      return;
    }
  } else {
    if (input === '0') input = event.target.textContent;
    else input += event.target.textContent;

    if (input.length > 11) input = input.slice(input.length-11);
  }
  display_string = input;
  updateDisplay(display_string);
}

document.querySelectorAll('.digit, .dot').forEach(div => div.addEventListener('click', digitListener));

let display_element = document.querySelector('#display');

function updateDisplay(value) {
  display_element.textContent = value;
}

function operatorListener(event) {
  if (operator === '' || operator === '=') {
    accumulator = +display_string; // convert to number
  } else {
    let number = +display_string;
    accumulator = operate(operator, accumulator, number);
    display_string = '' + accumulator;
    updateDisplay(display_string);
  }
  input = '0';
  operator = this.textContent;
}

document.querySelectorAll('.operator').forEach(div => div.addEventListener('click', operatorListener));

function controlListener(event) {
  switch (this.textContent) {
    case 'DLT':
      if (input.length > 1){
        input = input.slice(0, input.length-1);
      } else {
        input = '0';
      }
      break;
    case 'CLR':
      input = '0';
      operator = '';
  }
  display_string = input;
  updateDisplay(display_string);
}

document.querySelectorAll('#clear, #delete').forEach(div => div.addEventListener('click', controlListener));
