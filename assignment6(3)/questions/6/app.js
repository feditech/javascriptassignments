var sub1 = prompt("Enter first subject");
var sub2 = prompt("Enter second subject");
var sub3 = prompt("Enter third subject");
var Marks =100;
var obt1 = +prompt("Enter "+ sub1 +" Marks");
var obt2 = +prompt("Enter "+ sub2 +" Marks");
var obt3 = +prompt("Enter "+ sub3 +" Marks");

var totalMarks = 100 * 3;
var totalObtained = obt1+obt2+obt3;
var p1 = (obt1/Marks)*100;
var p2 = (obt2/Marks)*100;
var p3 = (obt3/Marks)*100;
var pf = (totalObtained/totalMarks)*100;


document.write('<table border="1"  >')
document.write("<tr>" + "<td>"+ "Subject " + "</td>" + "<td>"+ "Total Marks " + "</td>" +  "<td>"+ "Obtained Marks " + "</td>" +"<td>"+ "Percentage " + "</td>" + "</tr>")
document.write("<tr>" + "<td>"+ sub1 + "</td>" + "<td>"+ Marks + "</td>" +  "<td>"+ obt1 + "</td>" +"<td>"+ p1 + "</td>" + "</tr>")
document.write("<tr>" + "<td>"+ sub2 + "</td>" + "<td>"+ Marks + "</td>" +  "<td>"+ obt2 + "</td>" +"<td>"+ p2 + "</td>" + "</tr>")
document.write("<tr>" + "<td>"+  sub3 + "</td>" + "<td>"+ Marks+ "</td>" +  "<td>"+ obt3 + "</td>" +"<td>"+ p3 + "</td>" + "</tr>")
document.write("<tr>" + "<td>"+ "" + "</td>" + "<td>"+ 300 + "</td>" +  "<td>"+ totalObtained + "</td>" +"<td>"+ pf + "</td>" + "</tr>")