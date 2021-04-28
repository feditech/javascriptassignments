var colors = ["white", "black", "red"]

document.write("<br> <br>" + " Initialized Array:")
document.write("<h2>" + colors + "</h2>")

// TASK a Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.Display the updated array in your browser.
var newColor = prompt("Enter a color to add at the start")
colors.unshift(newColor)

document.write("TASK a: Updated Array:(inserted at start)")
document.write("<h2>" + colors + "</h2>")

// TASK b Ask the user what color he/she wants to add to the end
// & add that color to the end of the array. Display the updated array in your browser.

var newColor = prompt("Enter a color to add at the end")
colors.push(newColor)

document.write("TASK b:Updated Array: (inserted at end)")
document.write("<h2>" + colors + "</h2>")


// TASK c  Add two more color to the beginning of the array. Display the updated array in your browser.
while (newColor !== "") {
    var newColor = prompt("Enter a color to add at the start")
    if (newColor === "") {
        break;
    }
    colors.unshift(newColor)
}
document.write("TASK c: Updated Array:(inserted at start) ")
document.write("<h2>" + colors + "</h2>")


// TASK d. Delete the first color in the array. Display the updated array in your browser.
colors.shift()

document.write("TASK d:Updated Array:(deleted first)")
document.write("<h2>" + colors + "</h2>")



// TASK e. Delete the last color in the array. Display the updated array in your browser.
colors.pop()

document.write("TASK e:Updated Array:(deleted last)")
document.write("<h2>" + colors + "</h2>")



