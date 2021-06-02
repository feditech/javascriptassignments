// 18. You have a string “The quick brown fox jumps over the
// lazy dog”. Write a program to count number of
// occurrences of word “the” in given string.

var str = "The quick brown fox jumps over the lazy dog"
var count =0;

str = str.split(" ")

for(var i = 0; i<str.length;i++){
    if(str[i].toLowerCase()==="the"){
        count= count +1;
    }
}

console.log("there are total "+ count+" occurences of word 'the' ")