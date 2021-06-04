// 11. Write a JavaScript function that accepts a string as a
// parameter and converts the first letter of each word of the
// string in upper case.
// EXAMPLE STRING : 'the quick brown fox'
// EXPECTED OUTPUT : 'The Quick Brown Fox'
var data = prompt("Enter a string")
var res = titlecase(data)

alert("Title Case: "+res)

function titlecase(a) {
    var arr = []
    arr = a.split("")
    arr[0] = arr[0].toUpperCase()

    for (i = 0; i < a.length; i++) {
        if (arr[i] == " ") {
            arr[i + 1] = arr[i + 1].toUpperCase()
        }
    }
    a = arr.join("")
    return a
}