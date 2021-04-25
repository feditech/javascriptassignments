var names = ["Ali" , "Raza" , "Qadiri"]
var score = [430, 245, 355]

var total = 500;
for(var i=0; i<names.length ; i++){
document.write("<h2>"+ "Score of " + names[i] + " is " + score[i]+". Percentage: "+ ((score[i]/500)*100) +"%</h2>")
}