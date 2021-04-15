var a =2;
var b =1;
document.write("<h3>" +"a: "+ a + "</h3>")
document.write("<h3>" +"b: "+ b + "</h3>")



var result = --a;
document.write("<h3>" +"a: "+ a + "</h3>")
document.write("<h3>" +"b: "+ b + "</h3>")
document.write("<h3>" +"result: "+ result + "</h3>")


var result = --a - --b;
document.write("<h3>" +"a: "+ a + "</h3>")
document.write("<h3>" +"b: "+ b + "</h3>")
document.write("<h3>" +"result: "+ result + "</h3>")



var result = --a - --b + ++b;
document.write("<h3>" +"a: "+ a + "</h3>")
document.write("<h3>" +"b: "+ b + "</h3>")
document.write("<h3>" +"result: "+ result + "</h3>")

var result = --a - --b + ++b + b--;
document.write("<h3>" +"a: "+ a + "</h3>")
document.write("<h3>" +"b: "+ b + "</h3>")
document.write("<h3>" +"result: "+ result + "</h3>")
