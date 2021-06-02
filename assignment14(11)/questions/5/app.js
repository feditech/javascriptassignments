// 5. Write a program that shows the message “First fifteen
// days of the month” if the date is less than 16th of the month
// else shows “Last days of the month”.

var date = new Date();

var day = date.getDate()

if(day<16){
    alert("First fifteen days of the month")
}else{
    alert("Last days of the month")
}