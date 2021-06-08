// 6. Write a function to delete all vowels from a sentence. Assume
// that the sentence is not more than 25 characters long.

var str = prompt("enter string")
var res = removeVowel(str).join("")

document.write("<h2>"+ "Sentence with vowels: "+str +"</h2>")
document.write("<h2>"+ "Sentence without vowels: "+res +"</h2>")



function removeVowel(a){
    a = a.split("")
    var arr =[]
    for(var i=0; i<a.length;i++){
        a[i] = a[i].toLowerCase()
        if(a[i]!='a' && a[i]!='e' && a[i]!='i'&& a[i]!='o'&& a[i]!='u')
        {
            arr.push(a[i])
        }
    }
return arr
}