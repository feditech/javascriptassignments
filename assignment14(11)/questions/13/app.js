// 13. Write a JavaScript function that accepts two arguments, a
// string and a letter and the function will count the number of

// occurrences of the specified letter within the string.
// Sample arguments : 'JSResourceS.com', 'o'

var str = prompt("enter a string")
var char = prompt("Enter a char to check its occurence")

alert("String: "+str+". Occurence of "+char+" are "+charCheck(str,char))


function charCheck(a,b){
    var count=0
    
for(var i = 0;i<a.length;i++){
    if(a[i]===b.toUpperCase()||a[i]===b.toLowerCase()){
    count = count+1}
}
return count
}