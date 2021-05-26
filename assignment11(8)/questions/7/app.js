var A = ["cake" ,"apple pie" ,"cookie" ,"chips" , "patties"  ]


var input = prompt("Welcome to bakery. What do you want?")
var flag =false;
for(var i=0; i<A.length; i++ ){
    if(input===A[i])
    {
        flag = true
    }
}

if(flag=== true){
alert(input+ " is available at index "+i)
}else{
    alert(input+ " is not available. ")
}
