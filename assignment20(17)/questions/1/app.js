// var modal = document.getElementById("modal")


// function imgDisplay()
// {
//     for(var i = 1 ;i<=15;i++){
//    var el = document.getElementById("imgDisplay");
//    el.innerHTML += "<img src='others/"+[i]+".jpg' width=\"200px\" height=\"100px\"   >";
   
// }
// }
// imgDisplay()




// function onOpenedImagModal(){
//     modal.classList.add('modal-open')
//     modal.classList.remove('modal-close');  
// }



// function onClosedImagModal(){
//     modal.classList.add('modal-close')
//     modal.classList.remove('modal-open');
// }



var paths =[]

for(var i =1;i<=15 ;i++){
var src = ('others/'+[i]+'.jpg')
paths.push(src)
}


for(var i =1;i<=15 ;i++){

    var div = document.createElement("div")
    div.setAttribute("id","div1")
    var img = document.createElement("img")
    img.setAttribute("src",path in paths)



}

