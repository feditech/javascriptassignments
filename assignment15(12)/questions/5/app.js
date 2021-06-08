// 5. You have learned the function indexOf. Code your own custom
// function that will perform the same functionality. You can code
// for single character as of now.

var string = prompt("Enter a string")
var char = prompt("Enter a character to find its index")
var res =index(string,char) 
if (res >= 0 && res<string.length ){
    alert("Index of "+char+" is "+index(string,char))
}else{
    alert(char+" is not in the string")
}


function index(str , ch){

    str = str.split("")    
    for(var i=0;i<str.length;i++){
    if(ch == str[i])
    return i
}
    
}