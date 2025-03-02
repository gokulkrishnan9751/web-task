let currentInput = '';
let previousInput = '';
let operation = null;

function fun(value) {
  currentInput += value;
  document.getElementById('display').innerHTML = value;
}

function setOperation(op) {
  if (currentInput === '') return;
  if (previousInput !== '') {
    calculate();
  }
  operation = op;
  previousInput = currentInput;
  currentInput = '';
}

function calculate() {
  if (currentInput === '' || previousInput === '' || operation === null) return;
  let result;
  const prev = parseFloat(previousInput);
  const current = parseFloat(currentInput);
  switch (operation) {
    case '+':
      result = prev + current;
      break;
    case '-':
      result = prev - current;
      break;
    case '*':
      result = prev * current;
      break;
    case '/':
      result = current !== 0 ? prev / current : 'Error';
      break;
    default:
      return;
  }
  currentInput = result;
  operation = null;
  previousInput = '';
  document.getElementById('display').innerHTML = result;
}

function clearDisplay() {
  currentInput = '';
  previousInput = '';
  operation = null;
  document.getElementById('display').innerHTML = 'n';
}

function updateDisplay(value) {
  document.getElementById('display').value = value;
}
const div = document.getElementById("display");
    //  div.style.backgroundColor = "lightgreen";
     div.style.color = "darkblue";
     div.style.fontWeight = "bold";
    //  div.style.width= "100px";
    //  div.style.border="5px solid black";
    //  div.style.height="50px";
     div.style.fontSize="xx-large";
     div.style.paddingLeft="17px";
     div.style.paddingTop="10px";