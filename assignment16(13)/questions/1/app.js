// 1. Write a custom function power ( a, b ), to calculate the value of
// a raised to b.


var num = +prompt("Enter number")
var exp = +prompt("Enter Power")

document.write("<h1>"+ num + "<sup>"+ exp+"</sup>"+ " = "+ power(num,exp) +"</h1>")

function power(a,b){
    return a**b
}