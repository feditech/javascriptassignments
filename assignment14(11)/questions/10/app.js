// 10. Write a program that displays in your browser the
// seconds that elapsed between the reference date and the
// beginning of 2015.

var beginning = new Date("Jan 1 2021")

var dateNow= new Date();

var diff = dateNow.getTime() - beginning.getTime();
diff= diff/(1000)
diff = Math.floor(diff)
alert(diff+" seconds have passed since start of 2021")