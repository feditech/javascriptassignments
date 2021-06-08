// 2. Write a function that takes first & last name and then it
// greets the user using his full name.




var firstName = prompt("Enter first name")
var lastName = prompt("Enter last name")


fullName(firstName,lastName)





function fullName(first,last){
    var fullName = first + " " + last;
    alert("Hello!!! "+fullName)
}