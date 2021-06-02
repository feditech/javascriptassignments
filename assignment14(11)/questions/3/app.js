// Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show
// Sun.

var date = new Date();





switch (date.getDay()) {
    case 0:
        alert("Today is Sun")
        break
    case 1:
        alert("Today is Mon")
        break
    case 2:
        alert("Today is Tue")
        break
    case 3:
        alert("Today is Wed")
        break
    case 4:
        alert("Today is Thur")
        break
    case 5:
        alert("Today is Fri")
        break
    case 6:
        alert("Today is Sat")
        break
    
}