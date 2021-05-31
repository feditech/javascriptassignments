// Write a program that simulates a dice using random()
// method of JS Math class. Display the value of dice in your
// browser.:

var num = Math.random() * 6;
var dice = Math.ceil(num)
document.write("Random Dice value is: "+ dice)