// Write a program that simulates a coin toss using random()
// method of JS Math class. Display the value of coin in your
// browser


var num = Math.random() + 1;
var toss = Math.round(num)

if (toss == 2) {
    document.write(toss + "<br>")
    document.write("Random coin value : Heads ")
} else {
    document.write(toss + "<br>")
    document.write("Random coin value : Tails ")
}
