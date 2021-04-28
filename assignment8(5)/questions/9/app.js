var colors = ["white","black","red"]

document.write("<br> <br>" +" Initialized Array:")
document.write("<h2>"+ colors +"</h2>")

//TASK a Ask the user what color he/she wants to add to the 
// beginning & add that color to the beginning of the array.Display the updated array in your browser.
var newColor = prompt("Enter a color to add at the start")
colors.unshift(newColor)

document.write("Updated Array:")
document.write("<h2>"+ colors +"</h2>")

