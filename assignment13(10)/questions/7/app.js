// 7. Write a program that tests whether it's before noon and
// alert “Its AM” else “its PM”.


var date = new Date();

var hours = date.getHours()

if(hours<12|| hours ===0){
    alert("Its AM")
}else{
    alert("Its PM")
}