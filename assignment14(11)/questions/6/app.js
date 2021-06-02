// 6. Write a program that determines the minutes since
// midnight, Jan. 1, 1970 and assigns it to a variable that
// hasn't been declared beforehand. Use any variable you like
// to represent the Date object.

var date = new Date();
alert(date)

var mili = date.getTime();
alert("Miliseconds since Jan 1, 1970: "+ mili)

var min = mili/(1000*60)

alert("Minutes since Jan 1, 1970: "+min)
