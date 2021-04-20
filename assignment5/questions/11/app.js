var num1 = +prompt("Enter 1st number")
var num2 = +prompt("Enter 2nd number")
document.write("<h1>" +"First number:"+ num1+ "</h1>")
document.write("<h1>" +"Second number:"+ num2+ "</h1>")

var op = prompt("Enter operation to perform (+ - * /)")
if(op === "+"){
    alert(num1 + " " + op + " " + num2 + " = " + (num1+num2) )
}else if(op === "-"){
    alert(num1 + " " + op + " " + num2 + " = "+ (num1-num2) )
}else if(op === "*"){
    alert(num1 + " " + op + " " + num2 + " = "+ (num1*num2) )
}else if(op === "/"){
    alert(num1 + " " + op + " " + num2 + " = "+ (num1/num2) )
}