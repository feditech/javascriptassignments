document.write("<br>")
document.write("demo part")
document.write("<br>")
var column=7;

for(var i=1; i<=7; i++){
    
    for(var j=column; j>=1; j--){
        document.write("*")        
    }
    document.write("<br>")
    --column;
}

