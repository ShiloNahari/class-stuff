'use strict'

let elem = document.getElementById('add');

for (let x = 10; x >= 0; x--) {
    elem.innerHTML += '<div>' + '*'.repeat(x) + '</div>';
}
let input = document.getElementById('input').value;
let password = ['123', '321','111','aaa','bbb']

function check () {
    for (let x = 0;x < password.length; x++){
        if (password[x] === input)  {
            
        }
    }
}