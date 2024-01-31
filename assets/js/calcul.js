const display = document.getElementById('display');
const numberbuttons = document.querySelectorAll('.number');
const operatorbuttons = document.querySelectorAll('.operator');
const equalsbutton = document.querySelector('.equals');
const clearbutton = document.querySelector('#clear');

let currentNumber = '';
let firstNumber = '';
let operator = '';

numberbuttons.forEach(button => {
  button.addEventListener('click', () => {
    currentNumber += button.textContent;
    display.value = currentNumber;
  });
});

operatorbuttons.forEach(button => {
  button.addEventListener('click', () => {
    if (currentNumber !== '') {
      firstNumber = currentNumber;
      operator = button.textContent;
      currentNumber = '';
    } else if ( "-" == button.textContent){
      currentNumber = button.textContent
    }
  });
});

equalsbutton.addEventListener('click', () => {
  if (currentNumber !== '') {
    let result;
    switch (operator) {
      case '+':
        result = parseFloat(firstNumber) + parseFloat(currentNumber);
        break;
      case '-':
        result = parseFloat(firstNumber) - parseFloat(currentNumber);
        break;
      case '*':
        result = parseFloat(firstNumber) * parseFloat(currentNumber);
        break;
      case '/':
        result = parseFloat(firstNumber) / parseFloat(currentNumber);
        break;
      default:
        result = '';
    }
    display.value = result;
    firstNumber = '';
    operator = '';
  }
});

clearbutton.addEventListener('click', () => {
  display.value = '';
  currentNumber = '';
  firstNumber = '';
  operator = '';
});
