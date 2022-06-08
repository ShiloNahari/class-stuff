/*1. הגדירו מערך המכיל לפחות 5 איברים והכניסו לתוך כל איבר מס' כלשהו בין 0 ל- 100

2. שנו את הלולאה כך שתדפיס את הערך של כל אחד מהאיברים בקונסול.
3. שנו את הלולאה שוב, כך שתדפיס את האיברים בסדר הפוך (מהסוף להתחלה).
4. במידה ותנאי העצירה שלכם הוא i<5 (כלומר מס' האיברים הוא hard coded ממש כתוב בלולאה),
5. נסו לשנות אותה כך שתרוץ מהאיבר הראשון ועד האחרון במערך ללא הגדרת המס' המדויק בלולאה.

6. שאלת חשיבה-
שנו את הלולאה כך שתדפיס את הפלט הבא :

*
**
***
****
*****
*/
'use strict'
// -------------#1
const gat = [4, 15, 1, 5, 27]

// ------------#2

const printAll = function(){
    for (let i =0;i<=gat.length-1;i++){
        console.log(gat[i]);
    }
};
printAll(gat)
console.log('------------');
//----------#3 

const printBackwards = function(){
    for (let i=gat.length-1; i>=0; i--){
        console.log(gat[i]);
    }
};
printBackwards(gat)
//---------#6

for(let i=0; i<= 10; i++){
    let dir = document.querySelector('#dir')
    dir.innerHTML += '*'.repeat(i) +'</br>'
}