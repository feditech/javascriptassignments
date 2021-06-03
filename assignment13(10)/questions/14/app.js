// 14. Write a program to generate your K-Electric bill in your
// browser. All the amounts should be rounded off to 2
// decimal places. Display the following fields:
// a. Customer Name
// b. Current Month

// DATE METHODS | JAVASCRIPT

// Page 5 of 5

// c. Number of units
// d. Charges per unit
// e. Net Amount Payable (within Due Date)
// f. Late Payment Surcharge
// g. Gross Amount Payable (after Due Date)
// Where,

// Net Amount Payable (within Due Date) = Number of units * Charges per unit
// & Gross Amount Payable (after Due Date) = Net Amount + Late Payment Surcharge

var date = new Date();

var customerName = "ABC"
var currentMonth = month(date);
var numberOfunit = +prompt("enter no of unit"); 
var chargesPerUnit = 16;
var latePaymentSurcharge = 350;

var netAmountPayable = numberOfunit * chargesPerUnit;
var grossAmountPayable = numberOfunit * chargesPerUnit+latePaymentSurcharge;

document.write("<h1>"+"K Elecric Bill " +"</h1>")
document.write("<h2>"+"Customer Name: "+ customerName +"</h2>")
document.write("<h2>"+"Month: "+currentMonth +"</h2>")
document.write("<h2>"+"Number of units: "+numberOfunit +"</h2>")
document.write("<br>"+"<h2>"+"Net Amount Payable (within Due Date): "+netAmountPayable +"</h2>")
document.write("<h2>"+"Late Payment Surcharge: "+latePaymentSurcharge +"</h2>")
document.write("<h2>"+"Gross Amount Payable (after Due Date): "+grossAmountPayable +"</h2>")












function month(date){
    

switch (date.getMonth()) {
    case 0:
        return("january")
    case 1:
        return("Febuary")
    case 2:
        return("March")
    case 3:
        return("April")
    case 4:
        return("May")
    case 5:
        return("June")
    case 6:
        return("July")
    case 7:
        return("August")
    case 8:
        return("September")
    case 9:
        return("October")
    case 10:
        return("November")
    case 11:
        return("December")
}

}