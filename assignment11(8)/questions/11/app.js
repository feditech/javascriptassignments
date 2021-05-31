// Write a program that takes user input. Convert and
// show the input in title case.

var input = prompt("Enter a string")
var ar = []
ar = input.split("") 
ar[0]= ar[0].toUpperCase()

for(var i=0;i<ar.length;i++)
{
    if (ar[i] == " ") {
        ar[i + 1] = ar[i + 1].toUpperCase()
    }
}

var res = ar.join("").toString()

console.log(res)

