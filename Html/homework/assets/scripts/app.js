const initResult = 0;
let currentResult = initResult;
let logEntries = [];

//parse input from html input field
function userInputToInt() {
    return parseInt(userInput.value);
}

//generates calculation log
function createCalcLog(operator, oldResult, newNum) {
    const calcLog = `${oldResult} ${operator} ${newNum}`
    outputResult(currentResult, calcLog);
}
//logs a console array of calculations
function writeToCalcLog(operationId, oldResult, newNum, currentResult) {
    const logEntry = {
        operation: operationId,
        oldResult: oldResult,
        inputNumber: newNum,
        result: currentResult,
    };
    logEntries.push(logEntry);
    console.log(logEntries);
}
//calc logic for buttons
function calcLogic(calcType) {
    const newNum = userInputToInt();
    const oldResult = currentResult;
    let mathOperator;
    if (calcType === 'ADD') {
        currentResult += newNum;
        mathOperator = '+';
    } else if (calcType === 'SUBTRACT') {
        currentResult -= newNum;
        mathOperator = '-';
    } else if (calcType === 'MULTIPLY') {
        currentResult *= newNum;
        mathOperator = '*';
    } else if (calcType === 'DIVIDE') {
        currentResult /= newNum;
        mathOperator = '/';
    } else if (calcType === 'CLEAR') {
        currentResult = initResult;
        userInput.value = '';
    } else {
        alert('Error: Not a math operation!');
    }
    userInput.value = '';
    createCalcLog(mathOperator, oldResult, newNum);
    writeToCalcLog(calcType, oldResult, newNum, currentResult);
}

function addNum(n1, n2) {
    calcLogic('ADD');
}

function subNum(n1, n2) {
    calcLogic('SUBTRACT');
}

function multiNum(n1, n2) {
    calcLogic('MULTIPLY');
}

function divNum(n1, n2) {
    calcLogic('DIVIDE');
}

//reset calc
function clearCalc() {
    calcLogic('CLEAR')
    outputResult(currentResult, '');
}

addBtn.addEventListener('click', addNum);
subBtn.addEventListener('click', subNum);
multiBtn.addEventListener('click', multiNum);
divBtn.addEventListener('click', divNum);
clearBtn.addEventListener('click', clearCalc);