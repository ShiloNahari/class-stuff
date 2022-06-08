'use strict'
console.log("JS is working"); //checks if js is still linked

//vars inside the functions
let firstNumber,operator,secondNumber,calculation,result;

function getResult() {
    //starts everything;
    getValues();

}   
function getValues() {
    //sets paths on vars
    firstNumber =  parseInt(document.querySelector("#firstNumber").value);
    operator = document.querySelector("#operator").value;
    secondNumber =  parseInt(document.querySelector("#secondNumber").value);
    result = document.querySelector("#result");
    validateInput();
}

function validateInput() {
    //validates all inputs and do the calculation
    if ((Number.isNaN(firstNumber)) || (Number.isNaN(secondNumber)))
     {
        calculation = 'Numbers only :P'
    } else {
        if (operator === "+") {
            calculation = firstNumber+secondNumber;
        } else if (operator === "-") {
            calculation = firstNumber-secondNumber;
        } else if (operator === "/") {
            calculation = firstNumber/secondNumber;
        } else if (operator === "*") {
            calculation = firstNumber*secondNumber;
        } 
    else {calculation = "invalid operator...";}
}

    doCalculations();
}

let doCalculations = function(){
    // puts the result in innertext 
    result.innerText = calculation
}


