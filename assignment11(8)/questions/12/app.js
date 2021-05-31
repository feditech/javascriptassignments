// 12. Write a program that converts the variable num to
// string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.

var num = 40.65

var res = num.toString()
res = res.replace(".","")

console.log(res)

document.write("Num: "+num)

document.write("str: "+res)