// 8. Write a program that stores a random secret number from
// 1 to 10 in a variable. Ask the user to input a number
// between 1 and 10. If the user input equals the secret
// number, congratulate the user.
var ran =1;
var userInput=2;
while(ran!=userInput){
    ran = Math.floor((Math.random()*10)+1)
    userInput = +prompt("Enter a guess number between 1 and 10")    
    if(ran===userInput){
    alert("Congratulations!!!! You guessed the right number ")
}else{
    alert("try again")
}}