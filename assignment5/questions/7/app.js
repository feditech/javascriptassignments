var userinput = +prompt("Enter a number(1-10)")
var secretNumber = 5;
if(userinput === secretNumber){
    alert("Bingo! Correct Answer")
}else if(++userinput === secretNumber){
    alert("Close enough to correct answer")
}