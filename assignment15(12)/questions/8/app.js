// 8. Write a nested function that computes hypotenuse of a
// right angle triangle.
// Hypotenuse2 = Base2 + Perpendicular2

// Take base and perpendicular as inputs.
// Outer function : calculateHypotenuse()
// Inner function: calculateSquare()


var base = +prompt("Enter base of triangle")
var perp = +prompt("Enter base of triangle")

alert("hypotenuse is: "+ calculateHypotenuse(base,perp))


function calculateHypotenuse(base, perp) {
    var arr = sqr(base, perp)
    return arr[0] + arr[1]

}

function sqr(a, b) {
    var arr = []
    arr[0] = a * a;
    arr[1] = b * b;

    return arr
}