// 13. Write a program to ask the user about his age. Calculate
// and show his birth year in your browser.

var userInput = +prompt("enter your age")
var date = new Date();
var currentYear= date.getFullYear();
var birthYear = currentYear-userInput;
alert("your birth year was "+(birthYear))