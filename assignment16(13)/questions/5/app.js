var display = document.getElementById("counter");
function add(value){
    var number = Number(display.innerHTML);
    var sum = number + value;
    display.innerHTML = sum;
}