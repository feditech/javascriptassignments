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

document.write("<br>")
document.write("Part a")
document.write("<br>")

for(var i=1; i<=4; i++){
    
    for(var j=1; j<=5; j++){
        document.write("*")        
    }
    document.write("<br>")
}



document.write("<br>")
document.write("Part b")
document.write("<br>")

for(var i=1; i<=5; i++){
    
    for(var j=1; j<=i; j++){
        document.write("*")        
    }
    document.write("<br>")
}

document.write("<br>")
document.write("Part c")
document.write("<br>")

for(var i=5; i>=1; i--){
    
    for(var j=1; j<=i; j++){
        document.write("*")        
    }
    document.write("<br>")
}


document.write("<br>")
document.write("Part d")
document.write("<br>")

for(var i=1; i<=10; i++){
    for(var j=1; j<=i; j++){
        document.write("*")        
    }
    document.write("<br>")
}
for(var i=10; i>=1; i--){
    for(var j=1; j<=i; j++){
        document.write("*")        
    }
    document.write("<br>")
}



