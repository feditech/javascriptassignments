var ch = prompt("enter a letter")
var _choice;
function checker(_choice){
if( ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u' || ch === 'A' || ch === 'E' || ch === 'I'|| ch === 'O' || ch === 'U'){
    return true;
    
}else{
    return false;

}

}

var result = checker(ch);
alert(result)