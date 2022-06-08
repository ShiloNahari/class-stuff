'use strict'


//----------#1
function multiplyTwoNumbers(numA, numB){
    sum = numA*numB
}

//----------#2
const multiplyTwoNumbers2 = function(num1, num2){
    sum = num1*num2
};

const multTwoNums = (n1, n2) => n1*n2;

//--------#3
const generateRandomNumber = (max) => {
    max = Math.floor(max);
    return Math.floor(Math.random() * (max)+1)
}

//----------#4

let array = [];

function put10InArray() {
    for (let i = 0; i<=9; i++){
    array.push(generateRandomNumber(100))
    }//for loop
}//put10 function

console.log(array); // show its empty
put10InArray(); // run function
console.log(array); //show there's 10 elements inside

//--------#5

const myArr = [93,12,-48,26,2,44,9,0,-1,27,63,8,50];
let highest = [];
const returnBiggest = function(arr){
  highest = arr[0];
  for(let i=0; i < arr.length; i++){
    if (arr[i] > highest){
          highest = arr[i];
        }; //if
    }; //for
    console.log(highest);
}; //func
console.log(myArr);
returnBiggest(array); // test if returns biggest
returnBiggest(myArr); // test if returns biggest
console.log('-----------');// a divider
//-------#6

for (let i = 0; i<10;i++){
    let notDivisibleBy3 = generateRandomNumber(100);
    if (notDivisibleBy3 %3 !== 0){
        console.log(notDivisibleBy3);
    }
}
console.log('-----------------');
//-----------#7

let evenNumberCounter=0;
for (let i = 0; i<10;i++){
    let evenNumber = generateRandomNumber(150);
    console.log(evenNumber);
    if(evenNumber%2 === 0){
        evenNumberCounter++
    }
}
console.log(evenNumberCounter);
console.log('---------------');
//-----------#8

const picsOnline = [
    'https://i.imgur.com/kkDYbHZ.jpeg',
    'https://i.imgur.com/JXetxQh.jpeg',
    'https://i.imgur.com/fSgnUKW.jpeg',
    'https://www.qries.com/images/banner_logo.png' //tested and other links are "broken" but the method should
]
function insertDivIntoDiv(arr){
    for (let i = 0; i<arr.length;i++){
        const path = document.querySelector('.wrap')
        path.innerHTML += `<div><img src="${arr[i]}" title="img${i+1}" alt="img${i+1}"> </div>`
    }
}

insertDivIntoDiv(picsOnline)


//-------------#9

// const myArr = [93,12,-48,26,2,44,9,0,-1,27,63,8,50];
let newArray=[];
function arrangeMyArr(arr) {
    let myArr = arr[0];
    for (let i=0; i<arr.length;i++){
        for (let x=0; x<arr.length;x++){
            if (arr[i] > arr[!i]){
                arr
            }
        }
    }
    return newArray[i] = arr[i];
}
arrangeMyArr(myArr)
