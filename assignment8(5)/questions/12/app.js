var num1 = +prompt("Enter 1st number")
var num2 = +prompt("Enter 2nd number")

if( num1 === num2){
    alert("EQUAL")
}else if( num1 > num2){
    alert(num1 + " is greater than "+ num2)
}else{
    alert(num2 + " is greater than "+ num1)
}