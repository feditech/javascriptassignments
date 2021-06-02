// 9. Create a date object of the starting date of this Ramadan
// and alert the number of days past since 1st Ramadan?
// Note: 1st Ramadan was on Apr 12, 2021

var ramadan = new Date("Apr 12 2021")

var dateNow= new Date();

var diff = dateNow.getTime() - ramadan.getTime();
diff= diff/(1000*60*60*24)
diff = Math.floor(diff)
alert(diff+" Days have passed since Ramadan 1")