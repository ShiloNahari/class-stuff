"use strict"
var johnMass = 92,
    johnHeight = 195 / 100,
    johnBMI = BMIFunc(johnMass, johnHeight),
    markMass = 78,
    markHeight = 169 / 100,
    markBMI = BMIFunc(markMass, markHeight);

function BMIFunc(mass, height) {
    var    BMI = mass / height;
    return BMI;
}
console.log(johnBMI, markBMI);
//console.log(BMIFunc(johnMass, johnHeight));

//console.log(BMIFunc(markMass, markHeight));

var markHigherBMI = markBMI > johnBMI;

console.log(markHigherBMI);

if (johnBMI < markBMI){
    console.log(`Mark's BMI( ${markBMI}) is higher than John's!(${johnBMI})`);
}else {console.log(`John's BMI(${johnBMI}) is higher than Mark's!(${markBMI})`);}


