// 11. Create a Date object for the current date and time.
// Extract the hours, reset the date object an hour ahead and
// finally display the date object in your browser.

var date = new Date();
console.log(date)
var updatedDate = date.setHours(date.getHours()+1)
updatedDate = new Date(updatedDate)
console.log(updatedDate)

alert("open console")