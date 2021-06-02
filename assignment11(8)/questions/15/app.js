// Write a program to take password as an input from
// user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements,
// prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII
// table at the end of this document.

var password = prompt("Enter password")
var flag=false;
var ch;


charCheck(password);
// lenCheck(password,flag);









    for(var i=0;i<pass.length;i++){
    
    ch= pass.charAt(i);

    if(ch >= 'a' &&  ch <= 'z'){
 continue   
}else if(ch >= 'A' &&  ch <= 'Z'){
    continue
}else if(ch >= '0' &&  ch <= '9'){
    continue
}else{
    alert("Only numbers and letters allowed")
    password = prompt("Enter password")
    
    i=0;
}
}




    while(flag== false){
    if(password.length<6){
        alert("password must be alteat 6 characters long")
        passwordword = prompt("Enter password")
        flag = false;
    }else{
        flag = true;
    }
    }
    
    











// if((password.charAt(0)< 'a' &&password.charAt(0)> 'z')&& (password.charAt(0)< 'A' &&password.charAt(0)> 'Z') && (password.charAt(0)< 0 &&password.charAt(0)> 9) ){
//     alert("invalid input")
// }
// // password= password.split("");
// // for(var i=0;i<password.length; i++){
// // if(password.charAt[i]<'a' && password.charAt(i)>'z' ){
// // console.log("only small letter allowed")}
// // }

