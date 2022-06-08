'use strict'
 function log(x){
    console.log(x)
}
/*
log("hey dude")
let yourName = prompt("what's your name?"),
    yourAge = prompt("your age pls"),
    occupation = prompt("what's your work?")
alert(`hello ${yourName} you are ${yourAge} years old, and a ${occupation}`)*/
const legalAge = 18;
const isFemale = false;
let yourName = prompt("Enter your name:"),
    yourAge = parseInt(prompt('Enter your age:')),
    welcomeFe = `hello ${yourName}, you may enter the female's club`,
    welcomeMale = `hello ${yourName}, you may enter to the man's club`,
    bzz = `sorry ${yourName} this site is for ${legalAge}+ only!`;


    if ((yourAge >= legalAge) && isFemale){
        alert(welcomeFe)
        } else if ((yourAge >= legalAge) && !isFemale){alert(welcomeMale)}
    else {alert(bzz)
    log(typeof yourAge)}