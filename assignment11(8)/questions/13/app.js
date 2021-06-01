// 13. Write a program to take user input and store username
// in a variable. If the username contains any special symbol
// among [@ . , !], prompt the user to enter a valid username.
// For character codes of [@ .

// Note:
// ASCII code of ! is 33
// ASCII code of , is 44
// ASCII code of . is 46
// ASCII code of @ is 64

var userInput = prompt("Enter user name")
var check = userInput.split("")
console.log(check)
var i =0
var x=0;
while(x<check.length ){
    if(check[i]=="!" ||check[i]==","||check[i]=="."||check[i]=="@" ){
        alert("enter valid user name")
        Input = prompt("Enter user name")
        check = Input.split("")   
        i=-1;
        x=-1;    
    }    
    i++;
    x++;
}
console.log("accepted")










// for(i =j;i<check.length;i++){
//     if(check[i]=="!" ||check[i]==","||check[i]=="."||check[i]=="@" ){
//     alert("enter valid user name")
//     Input = prompt("Enter user name")
//     check = Input.split("")
//     console.log(check)
//     j=0;
    
// }

// }
// console.log("accepted")