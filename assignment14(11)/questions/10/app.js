// 10. Write a JavaScript function that checks whether a passed
// string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as
// forward, e.g., madam.

var userInput = prompt("Enter a string")
palindrome(userInput)

function palindrome(a) {
    var check = a.split("").reverse().join("")

    if (a === check) { alert(a + " is a palindrome") }
    else { alert(a + " is not a palindrome") }
}