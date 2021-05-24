var ch = prompt("Enter a character")

if(ch >= 'a' &&  ch <= 'z'){
    alert("lower case letter")
}else if(ch >= 'A' &&  ch <= 'Z'){
    alert("Upper case letter")
}else if(ch >= '0' &&  ch <= '9'){
    alert("Number")
}else{
    alert("Other")
}

