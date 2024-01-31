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
    } else if ( "-"==button.textContent){
      currentNumber = button.textContent
      console.log(button.value);
    }
  });
});

equalsbutton.addEventListener('click', () => {
  if (currentNumber !== '') {
    let result;
    switch (operator) {
      case '+':
        result = parseFloat(firstNumber) + parseFloat(currentNumber);
        showresult(result);
        break;
      case '-':
        result = parseFloat(firstNumber) - parseFloat(currentNumber);
        showresult(result);
        break;
      case '*':
        result = parseFloat(firstNumber) * parseFloat(currentNumber);
        showresult(result);
        break;
      case '/':
        if(parseFloat(currentNumber) !== 0){
          result = parseFloat(firstNumber) / parseFloat(currentNumber);
          showresult(result);
        }
        else{
          alert("erreur");
          display.value = '';
          currentNumber = '';
          firstNumber = '';
          operator = '';
        }
        break;
      default:
        result = '';
    }

  }
});

clearbutton.addEventListener('click', () => {
  display.value = '';
  currentNumber = '';
  firstNumber = '';
  operator = '';
});

function showresult(result) {
  display.value = result;
  firstNumber = '';
  operator = '';
}