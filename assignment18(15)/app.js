function display(value) {
    

    var res = document.getElementById("result")
    res.value += value;
    if(res.value[0]=="*"||res.value[0]=="/"){
        res.value=""
    }


    if(res.value[res.value.length-2]=='+')
{
    if(res.value[res.value.length-1]=='+')
    {
        res.value = res.value.slice(0,length-1)
        
    }
    else if (res.value[res.value.length-1] =='-' ||res.value[res.value.length-1] =='*'||res.value[res.value.length-1] =='/')
    {
        var last= res.value[res.value.length-1]
        res.value = res.value.slice(0,length-2)  
        res.value +=  last
        
    }
}
else if(res.value[res.value.length-2]=='-')
{
    if(res.value[res.value.length-1]=='-')
    {
        res.value = res.value.slice(0,length-1)
        
    }
    else if (res.value[res.value.length-1] =='+' ||res.value[res.value.length-1] =='*'||res.value[res.value.length-1] =='/')
    {
        var last= res.value[res.value.length-1]
        res.value = res.value.slice(0,length-2)  
        res.value +=  last 
    }
}


else if(res.value[res.value.length-2]=='*')
{
    if(res.value[res.value.length-1]=='*')
    {
        res.value = res.value.slice(0,length-1)
        
    }
    else if (res.value[res.value.length-1] =='+' ||res.value[res.value.length-1] =='-'||res.value[res.value.length-1] =='/')
    {
        var last= res.value[res.value.length-1]
        res.value = res.value.slice(0,length-2)  
        res.value +=  last 
    }
}


else if(res.value[res.value.length-2]=='/')
{
    if(res.value[res.value.length-1]=='/')
    {
        res.value = res.value.slice(0,length-1)
        
    }
    else if (res.value[res.value.length-1] =='+' ||res.value[res.value.length-1] =='-'||res.value[res.value.length-1] =='*')
    {
        var last= res.value[res.value.length-1]
        res.value = res.value.slice(0,length-2)  
        res.value +=  last 
    }
}


}


function off() {
    var res = document.getElementById("result")

    res.value = ''
    res.placeholder = ''
}


function on() {
    var res = document.getElementById("result")

    res.value = ''
    res.placeholder = 0
}



function cancel(){
    var res = document.getElementById("result")

    res.value= res.value.slice(0,length-1)
}

// function plusminus(){
//     var res = document.getElementById("result")
//     if(res.value[0]=="-")
//     {
//         res.value[0] = "+"
//     }elseif(res.value[0]==1||res.value[0]=="+")
//     {
//         res.value[0] = "-"
//     } 
// }







    
    // if(secondlast == "+" )
    // {
    //     if(last =="+")
    //     res.value = res.value.slice(0, res.value.length-1)
    //     else  if(last == "-"||last == "*"||last == "/"){
    //           res.value[res.value.length-2] = last
    //           res.value = res.value.slice(0, res.value.length-1)
    //     }
    // }
    // else if(secondlast == "-" )
    // {
    //     if(last =="-")
    //     res.value = res.value.slice(0, res.value.length-1)
    //     else  if(last == "+"||last == "*"||last == "/"){
    //           res.value[res.value.length-2] = last
    //           res.value = res.value.slice(0, res.value.length-1)
    //     }
    // }
    // else if(secondlast == "*" )
    // {
    //     if(last =="*")
    //     res.value = res.value.slice(0, res.value.length-1)
    //     else  if(last == "-"||last == "+"||last == "/"){
            
    //           res.value = res.value.slice(0, res.value.length-1)
    //           res.value.charAt(res.value.length) = last
    //         //    
    //         //   alert(res.value)
    //         }
    // }
    // if(secondlast == "/" )
    // {
    //     if(last =="/")
    //     res.value = res.value.slice(0, res.value.length-1)
    //     else  if(last == "-"||last == "*"||last == "+"){
    //           res.value[res.value.length-2] = last
    //           res.value = res.value.slice(0, res.value.length-1)
    //     }
    // }


  /*  // if(secondlast == "+"||secondlast == "-"||secondlast == "*"||secondlast == "/")
    // {
    //     if(last == "+"||last == "-"||last == "*"||last == "/")
    //     res.value = res.value.slice(0, res.value.length-1)
        
    // }
    
    
    
    
    
    // for (var i = 0; i < res.value.length; i++) {
    //     if (res.value[i] == "+" || res.value[i] == "-" || res.value[i] == "*" || res.value[i] == "/") {
    //             if (value == "+" || value == "-" || value == "*" || value == "/"){
    //             var next =res.value[i+1]
    //             if(next  == 0||next  == 1||next  == 2||next  == 3||next  == 4||next  == 5||next  == 6||next  == 7||next  == 8||next  == 9 )   
    //             break
              
    //             res.value = res.value.slice(0, length - 1)
    //         }
    //     }
    // }

    // res.value += value;*/


