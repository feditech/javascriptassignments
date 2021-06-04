// 6. Write a function that computes factorial of a number.

var n = +prompt("enter a number")

alert("factorial of "+n+ " is "+fac(n))

function fac(a) {
    if (a == 0 || a == 1)
        return 1;
    else
        return a * fac(a - 1)
}