// 9. Write a program to calculate overtime pay of employees.
// Overtime is paid at the rate of Rs. 12.00 per hour for every hour
// worked above 40 hours. Assume that employees do not work
// for fractional part of an hour.

var timeWork = +prompt("enter hours worked")


var res = payCalc(timeWork)

alert(res)




function payCalc(a) {
    if (a <= 48)
        return ("over time pay: " + 0)
    else {
        return ("over time pay: "+ (a-48)*12)
    }
}