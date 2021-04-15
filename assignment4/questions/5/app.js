var num = prompt("Enter Number", "0") //prompt user to enter the number
var num = parseInt(num) || 5;
var i = 0;
document.write('<table border="1"  cellspacing="0">');
for (i = 1; i <= 10; i++) {
  document.write("<tr><td>" + num + " x " + i + " = " + num * i + "</td></tr>");
}