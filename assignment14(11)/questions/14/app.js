
// 14. The Geometrizer
// Create 2 functions that calculate properties of a circle, using
// the definitions here.
// Create a function called calcCircumference:
// • Pass the radius to the function.
// • Calculate the circumference based on the radius, and output
// "The circumference is NN".
// Create a function called calcArea:
// • Pass the radius to the function.
// • Calculate the area based on the radius, and output "The area
// is NN".

// Circumference of circle = 2πr
// Area of circle = πr2



userInput = prompt("enter Radius of circle")

var circum= calcCircumference(userInput)
var area = calcArea(userInput)

document.write("<h1>"+ "Circumference of Circle is: "+circum +"</h1>")
document.write("<h1>"+ "Area of Circle is: "+area +"</h1>")


function calcCircumference(r){
return 2* (22/7) * r
}

function calcArea(r){
    return (22/7) * r**2
}