const userInput = document.getElementById('input-number');
const addBtn = document.getElementById('btn-add');
const subBtn = document.getElementById('btn-subtract');
const multiBtn = document.getElementById('btn-multiply');
const divBtn = document.getElementById('btn-divide');
const clearBtn = document.getElementById('btn-clear');

const currentResultOutput = document.getElementById('current-result');
const currentCalculationOutput = document.getElementById('current-calculation');

function outputResult(result, text) {
  currentResultOutput.textContent = result;
  currentCalculationOutput.textContent = text;
}