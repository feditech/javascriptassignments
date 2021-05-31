// Write a program that takes a positive integer from user &
// display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

var num = +prompt("enter A positive number")


document.write("<h2>"+ "Entered value: "+num + "</h2>")
document.write("<h2>"+ "Number : "+ Number(num) + "</h2>")
document.write("<h2>"+ "Round off value: "+Math.round(num) + "</h2>")
document.write("<h2>"+ "Floor value: "+Math.floor(num) + "</h2>")
document.write("<h2>"+ "Ceil value: "+ Math.ceil(num) + "</h2>")

