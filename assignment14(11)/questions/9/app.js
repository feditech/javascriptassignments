// 9. Write a function that calculates the area of a rectangle.
// A = width * height
// Pass width and height in following manner:

// i. Arguments as value
// ii. Arguments as variables

var w = +prompt("Enter width")
var h = +prompt("Enter height")

alert("Area: "+area(w,h) + " (variable as argument) ")
alert("Area: "+area(5,6) + " (value as argument) ")


function area(a,b){
    return a*b
}