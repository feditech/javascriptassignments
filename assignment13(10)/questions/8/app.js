// 8. Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.

var message = "Ali and Sami are best friends. They play cricket and football together."

var message1 = message.replace(/and/g, "&")



document.write("<h2>"+ "String before replacement: "+message + "</h2>")
document.write("<h2>"+ "String after replacement: "+message1 + "</h2>")