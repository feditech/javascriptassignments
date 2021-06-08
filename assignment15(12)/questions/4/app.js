// 4. Write a function that receives marks received by a student in 3
// subjects and returns the average and percentage of these
// marks. there should be 3 functions one is the mainFunction
// and other are for average and percentage. Call those functions
// from mainFunction and display result in mainFunction.


var s1= +prompt("Enter 1st subject marks")
var s2= +prompt("Enter 2nd subject marks")
var s3= +prompt("Enter 3rd subject marks")




result()




function result(){
document.write("<h2>"+"Subject 1 Marks: "+s1 +"</h2>")
document.write("<h2>"+"Subject 2 Marks: "+s2 +"</h2>")
document.write("<h2>"+"Subject 3 Marks: "+s3 +"</h2>")
document.write("<h2>"+"Average Marks: "+avg(s1,s2,s3).toFixed(2) +"</h2>")
document.write("<h2>"+"Percentage: "+percent(s1,s2,s3).toFixed(2)+"%" +"</h2>")
}


function avg(a,b,c){
    return (a+b+c)/3

}

function percent(a,b,c){
return ((a+b+c)/300)*100
}