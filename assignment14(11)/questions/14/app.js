// 14. You have an array
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array. After searching, prompt the user whether the given
// item is found in the list or not.
// Note: Perform case insensitive search. Whether the user
// enters cookie, Cookie, COOKIE or coOkIE, program
// should inform about its availability.

var A = ["cake", "apple pie", "cookie", "chips", "patties"]

var userInput= prompt("welcome TO SIR GHOUS BAkery. wHAT DO you want to order? ");
userInput = userInput.toLocaleLowerCase();
var res;
for(var i =0; i<A.length;i++){
    if(userInput===A[i])
    var res = userInput;
}
if(res === undefined){
    alert(userInput+ " is not available")
}
else{
    alert(userInput+ " is available")
}

