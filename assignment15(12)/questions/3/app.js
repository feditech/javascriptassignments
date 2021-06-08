// 3. Write a function that adds two numbers (input by user)
// and returns the sum of two numbers.

var n1 = +prompt("Enter first Number")
var n2 = +prompt("Enter second Number")
var add = sum(n1,n2)

alert("Sum of "+n1+ " and "+n2+" is "+add)

function sum(a,b){
return a+b
}