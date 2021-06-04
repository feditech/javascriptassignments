// 12. Write a JavaScript function that accepts a string as a
// parameter and find the longest word within the string.
// EXAMPLE STRING : 'Web Development Tutorial'
// EXPECTED OUTPUT : 'Development'


var data = prompt("Enter a string")
alert("Longest word is: "+longestWord(data))

function longestWord(a) {
    var arr = []
    arr = a.split(" ")
    var max = arr[0]
    
    for (i = 0; i < arr.length; i++) {
        if (arr[i].length > max.length) {
            max = arr[i]
        }
    }
    return max
}