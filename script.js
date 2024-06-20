// Input fields and buttons
const numInput = document.getElementById('num-input');
const display = document.getElementById('display');
const clearButton = document.getElementById('all-clear');
const equalsButton = document.getElementById('equals-button');

// Initializing the calculator state
let currentNumber = '';
let operator = '';
let num2 = '';

// Adding eventListeners to the buttons
equalsButton.addEventListener('click', calculate);
clearButton.addEventListener('click', clear);

// Calculating the result
function calculate() {
  num2 = numInput.value;
  let result = 0;
  switch (operator) {
    case '+':
      result = parseFloat(currentNumber) + parseFloat(num2);
      break;
    case '-':
      result = parseFloat(currentNumber) - parseFloat(num2);
      break;
    case '*':
      result = parseFloat(currentNumber) * parseFloat(num2);
      break;
    case '/':
      result = parseFloat(currentNumber) / parseFloat(num2);
      break;
    default:
      result = 'Error';


  }
  display.value = result;
  currentNumber = '';
  operator = '';
  num2 = '';
}

// Add eventListeners to the buttons
const numberButton = document.querySelectorAll('.number-button');
numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    numInput.value += button.textContent;
  });
});

// Adding eventListeners to the operators
const operatorButtons = document.querySelectorAll('operator-button');
operatorButtons.forEach(button => {
  button.addEventListener('click', () => {
    currentNumber = numInput.value;
    operator = button.textContent;
    numInput.value = '';
  });
});