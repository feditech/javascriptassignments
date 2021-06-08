// 7. Write a function that take start and end number as inputs
// & display counting in your browser.

var n1 = +prompt("enter starting number")
var n2 = +prompt("enter ending number")



document.write(counting(n1,n2))

function counting(a,b){
    var arr =[],index=0 
    for(var i = a ;i<=b;i++){
        arr[index] = i;
        index++;
    }
        return arr
}