var Marks =100;
var obt1 = +prompt("Enter English Marks");
var obt2 = +prompt("Enter Urdu Marks");
var obt3 = +prompt("Enter Math Marks");

var totalMarks = 100 * 3;
var totalObtained = obt1+obt2+obt3;
var percentage = (totalObtained/totalMarks)*100;

var remark;
var remark_A1  = "Excellent";
var remark_A = "Excellent";
var remark_B = "Excellent";
var remark_F = "Fail";

var grade;
if (percentage>=80 && percentage <=100) {
    grade="A+"
    
  } else if (percentage>=70 && percentage <80) {
    grade="A"
    
 }
  else if (percentage>=60 && percentage <70) {
    grade="B"
    
 } 
  else {
    grade="F"
    
}


if(grade === "A+")
{
remark = remark_A1;
}else if(grade === "A")
{
remark = remark_A;
}else if(grade === "B")
{
remark = remark_B;
}else if(grade === "F")
{
remark = remark_F;
} 



document.write("<h1>"+ "Marksheet" +"</h1>")

document.write("<h2>"+ "Total Marks: "+ totalMarks +"</h2>")

document.write("<h2>"+ "Obtained Marks: "+ totalObtained +"</h2>")

document.write("<h2>"+ "Percentage: "+ percentage +"</h2>")

document.write("<h2>"+ "Grade: "+ grade +"</h2>")

document.write("<h2>"+ "Remarks: "+ remark +"</h2>")
