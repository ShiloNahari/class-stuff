`use strict`

// warning button
function iWarnedYa() {
    let out = document.getElementById("Alert");
    out.innerHTML = `<div class="alert alert-danger d-grid gap-2" role="alert">
    <button class="btn btn-lg btn-danger" onclick="ThatsIt()"">i ***ing dare you to click again</button>
  </div>`;
}

// pixle variable + random pic link
let Pixle = Number(1000)
function Picsum() {
    let out = document.getElementById("Picsum");
    out.innerHTML = `<img src="https://picsum.photos/` + Pixle + `" alt="ransome pic">`;
    Pixle++
    //if (Pixle >= 1010) {
    //    Pixle = 1000
    //}
}

// the straw that broke the camalCase's back
function ThatsIt() {
    let out = document.getElementById("ThatsIt")
    out.innerHTML = `<img src="https://c8.alamy.com/comp/2BWXC24/angry-emoji-emoticon-showing-a-punch-fist-gesture-2BWXC24.jpg">`
}

function a (){
    let a = (h1 + h2) / 2 * h
}