var itemsArray = [
    {name:"juice",price:"50", quantity:"3"},
    {name:"cookie",price:"30", quantity:"9"},
    {name:"shirt",price:"880", quantity:"1"},
    {name:"pen",price:"100", quantity:"2"}];



var total = []
for(var i=0;i<itemsArray.length;i++){
    total[i]= itemsArray[i].price * itemsArray[i].quantity
    document.write("<h1>"+ "Price of item: "+[i+1]+" is "+total[i] +"</h1>")
}


