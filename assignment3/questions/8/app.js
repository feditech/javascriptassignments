var totalMarks= +prompt("enter total marks");
var obtainedMarks= +prompt("enter obtained marks");
var percentage = (obtainedMarks/totalMarks)*100;


document.write("<h1>"+ "Marksheet" +"</h1>")

document.write("<h2>"+ "Total Marks: "+ totalMarks +"</h2>")

document.write("<h2>"+ "Obtained Marks: "+ obtainedMarks +"</h2>")

document.write("<h2>"+ "Percentage: "+ percentage +"</h2>")





var grade;

if (percentage>=80 && percentage <=100) {
    grade="A+"
  } else if (percentage>=70 && percentage <80) {
    grade="A"
 }
  else if (percentage>=60 && percentage <70) {
    grade="B"
 } 
  else if (percentage>=50 && percentage <60) {
    grade="C"
 } 
  else {
    grade="F"
}

document.write("<h2>"+ "Grade: "+ grade +"</h2>")
