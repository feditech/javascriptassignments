var brand = ["Samsung", "Apple" , "Motorola", "Nokia" , "Sony", "Haier"]
document.write('<h1> <select class="drp">')

for(var i=0; i<brand.length; i++){
document.write("<option>" + brand[i] + "</option>")
}

document.write('</select> </h1>')