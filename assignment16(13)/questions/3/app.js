// 3. If the lengths of the sides of a triangle are denoted by a, b, and
// c, then area of triangle is given by
// area = S(S − a)(S − b)(S − c)
// where, S = ( a + b + c ) / 2
// Calculate area of triangle using 2 functions


var s1 = +prompt("Enter 1st side length")
var s2 = +prompt("Enter 2nd side length")
var s3 = +prompt("Enter 3rd side length")

var s = S(s1,s2,s3)
var area= areaOfTriangle(s,s1,s2,s3)

alert("Area of triangle is: "+area  )






function areaOfTriangle(s,a,b,c){
 return s*(s-a)* (s-b)* (s-c)
}



function S(a,b,c){
    return (a+b+c)/2;
}