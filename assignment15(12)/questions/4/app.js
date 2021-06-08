// 4. Calculator:
// Write a function that takes three arguments num1, num2
// & operator & compute the desired operation. Return and
// show the desired result in your browser.




var n1 = +prompt("Enter first Number")
var n2 = +prompt("Enter second Number")
var op = prompt("Enter a operation you want to perform (+,-,*,/)")
var res = cal(n1,n2,op)



alert(n1+" "+op+" " +n2+" = "+res)

function cal(a,b,operation){
if(operation==="+")
return a+b
if(operation==="-")
return a-b
if(operation==="*")
return a*b
if(operation==="/")
return a/b

}