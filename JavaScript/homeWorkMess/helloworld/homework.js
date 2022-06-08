function Trapezoid(){
    let height = document.getElementById("h").value
    let base1 = document.getElementById("b1").value
    let base2 = document.getElementById("b2").value
    var area = ((Number(base1) + Number(base2)) * Number(height))/2;
    document.getElementById("answer").innerText = "The area of a Trapezoid is " + area;

}

function helloWorld(stuffHere){
    alert("hello world" + stuffHere)
}

function jelloWorld(){
    alert("hello world")
}
