// 10. A cashier has currency notes of denominations 10, 50 and
// 100. If the amount to be withdrawn is input through the
// keyboard in hundreds, find the total number of currency notes
// of each denomination the cashier will have to give to the
// withdrawer.



var bill = +prompt("Enter amount:")


notesDenomination(bill)


function notesDenomination(amount){
    document.write("<h1>Total Amount: "+amount  )
    document.write("<h2>Required notes of Rs. 100  :  "+ Math.floor((amount / 100)) );
	document.write("<h2>Required notes of Rs. 50   :  "+ Math.floor(((amount % 100) / 50)) );
	document.write("<h2>Required notes of Rs. 10   :  "+ Math.floor((((amount % 100) % 50) / 10)) );
	document.write("<h2>Amount still remaining Rs. :  "+ Math.floor((((amount % 100) % 50) % 10)) );
}