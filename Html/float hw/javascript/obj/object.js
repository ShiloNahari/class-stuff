var hello = "";


function mouseOn (element, ){
    hello = element.innerHTML;
    element.innerHTML = 'That tickles';
}

function mouseOut (element) {
    element.innerHTML = hello;
    console.log(this.innerHTML)
}