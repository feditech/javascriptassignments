// 8. The distance between two cities (in km.) is input through the
// keyboard. Write four functions to convert and print this
// distance in meters, feet, inches and centimeters.

var km = +prompt("enter distance in km")
var m = kmToM(km)
var feet = kmToFeet(km)
var inches = kmToInches(km)
var centimeters = kmToCentimeters(km)

    document.write("<h1>" + "Distance in km: " + km + "</h1>")
document.write("<h1>" + "Distance in m: " + m + "</h1>")
document.write("<h1>" + "Distance in feet: " + feet + "</h1>")
document.write("<h1>" + "Distance in inches: " + inches + "</h1>")
document.write("<h1>" + "Distance in centimeters: " + centimeters + "</h1>")


function kmToM(a) {
    return a * 1000
}

function kmToFeet(a) {
    return a * 3280.84
}
function kmToInches(a) {
    return a * 39370.1
}
function kmToCentimeters(a) {
    return a * 100000
}