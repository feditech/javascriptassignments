var number = +prompt("enter a number to display the table")

// for(var i=1;i <= 10;i++){
//     document.write("<h2>"+ number + " * " + [i] + " = " + number*[i]    + "</h2>")
// }

if(number==NaN){
    for(var i=1;i <= 10;i++){
        document.write("<h2>"+ 5 + " * " + [i] + " = " + 5*[i]    + "</h2>")
    }   
}

for(var i=1;i <= 10;i++){
    document.write("<h2>"+ number + " * " + [i] + " = " + number*[i]    + "</h2>")
}