// 2. Any year is entered through the keyboard. Write a function to
// determine whether the year is a leap year or not.



var userInput =+prompt("enter a year")

if(leap(userInput)==1){
    alert(userInput+" is a leap year.")
}else 
alert(userInput+" is not a leap year.")

function leap( a)
{
	var i=0;
	if((a % 4 && a % 100 && a % 400)==0)
		i=1;
	return i;
}