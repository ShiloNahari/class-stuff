'use strict';


// // let billValue = 50;

// // const tip = billValue >= 50 && billValue <= 300  ? billValue* .15 : billValue*.2;

// // console.log(`The bill was ${billValue}, the tip was ${tip} and the total was ${billValue+tip}`);


// function foodProcessor(orange, apple){
//     const juice = `juice with ${orange} oranges and ${apple} apples`
//     return juice
// }

// const appleJuice = foodProcessor(0,5);
// console.log(appleJuice);


// const dolphineAvgScore =(96 + 108 + 89)/3;
// const koalasAvgScore = (88 + 91 + 110)/3;

function winner(num1, num2) {
    
    console.log(num1, num2);
}

var scores = [12, 32];

function avgMaker(){
    var first = document.getElementById("first")
    scores.push (first.value);
    // scores.push (document.getElementById("second").value);
    // scores.push (document.getElementById("third").value);
    console.log(scores);
    var avg = (scores[0]+scores[1]+scores[2])/scores.length
    console.log(typeof avg);
    console.log(avg);
    console.log(scores);
    
    
}
