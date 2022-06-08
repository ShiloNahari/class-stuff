var text = '';

function mouseOn(element) {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    today = mm + '/' + dd + '/' + yyyy;
    text = element.innerHTML;
    element.innerHTML = "The time in Israel is ##replace##,Have a nice day ##replace##".replace('##replace##',today).replace('##replace##',"HackerU");

    "Dani,HackerU,Moshe".split(",")
}


function mouseOff(element) {
    element.innerHTML = text;



}

var x= "hackerU"
var y= "Test Test Test "


var text = `nemo perspiciatis nemo vero nemo repellendus`

var target = 'nemo'
var index = text.indexOf(target);
console.log(text.indexOf(target,index+target.length))




// var index = 0;
// var namesObject = {};
// function save() {
//     namesObject[index] = document.getElementById("name").value;
//     index++;
//     document.getElementById("name").value = '';
//     console.log(namesObject)
// }



var namesArray = [];

function save() {
    var name = document.getElementById("name").value;
    document.getElementById("name").value = '';
    namesArray.push(name);
    console.log(namesArray);
}


















