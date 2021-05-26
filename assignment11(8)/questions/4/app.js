var number = +prompt("enter a number to display the table")
var length = +prompt("enter length")
for(var i=1;i <= length ;i++){
    document.write("<h2>"+ number + " * " + [i] + " = " + number*[i]    + "</h2>")
}