// 12. Write a program that creates a date object and show the
// date in an alert box that is reset to 100 years back?


var date = new Date();
console.log(date)
var updatedDate = date.setFullYear(date.getFullYear()-100)
updatedDate = new Date(updatedDate)


alert("100 years back it was: "+updatedDate)