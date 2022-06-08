`use strict`
//------ #1
let firstNumber = prompt("type a number");
let secondNumber = prompt("type a 2nd number");
let thirdNumber = prompt("type a 3rd number");
if (firstNumber > secondNumber && firstNumber >thirdNumber) 
    alert(firstNumber) 
else if (secondNumber > thirdNumber)
    alert(secondNumber)
 else 
    alert(thirdNumber)


/*/--------- #2
let yourName = prompt('your name?');
let oneOfTwo = parseInt(prompt('choose a number between 1 - 50'));
let twoOfTwo = parseInt(prompt('choose a number between 1 - 50(again)'));
const cantGoOver = 50
if ((oneOfTwo+twoOfTwo) >= cantGoOver){
    alert(`Hello ${yourName} the sum of numbers is greater or equals to ${cantGoOver}`) 
}
else {alert(`Hello ${yourName} the sum of numbers is less than ${cantGoOver}`)}
*/

/*/----------- #3
let crazy = parseInt(Math.random()*100),
    notSoCrazyAfterAll = crazy > 75;
    alert(notSoCrazyAfterAll);
*/


/*/----------- #4
let firstNum = parseInt(prompt('choose a number'));
let secNum = parseInt(prompt('choose a 2nd number'));
let mathSign = prompt('choose a math sign (+,-,/,*)');
if (mathSign === '+'){
    alert(firstNum+secNum)
}else if (mathSign === '-'){
    alert(firstNum-secNum)
} else if (mathSign === '/'){
    alert(firstNum/secNum)
} else { alert(firstNum*secNum)}
*/


//----------- #5

let yourName = prompt('your name?');
let oneOfTwo = parseInt(prompt('choose a number between 1 - 50'));
let twoOfTwo = parseInt(prompt('choose a number between 1 - 50(again)'));
const cantGoOver = 50

if ((typeof yourName === 'string') && (typeof oneOfTwo === 'number') && (typeof twoOfTwo === 'number')){
    if ((oneOfTwo+twoOfTwo) >= cantGoOver){
        alert(`Hello ${yourName} the sum of numbers is greater or equals to ${cantGoOver}`) 
    }
    else {alert(`Hello ${yourName} the sum of numbers is less than ${cantGoOver}`)}
} else {alert('your input was incorrect.')}