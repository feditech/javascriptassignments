

setInterval(function countdown(){


    var bakra = new Date("19 July 2021"); 
    var current = new Date();
    
    var diff = bakra.getTime() - current.getTime();
    
    var days = document.getElementById("days")
    days.innerText = Math.floor(diff / (8.64e+7)) 
    
    var hours = document.getElementById("hours")
    hours.innerText = Math.floor((diff % 8.64e+7)/ 3.6e+6)
    
    var minutes = document.getElementById("minutes")
    minutes.innerText = Math.floor((diff % 3.6e+6)/ 60000)
    
    var seconds = document.getElementById("seconds")
    seconds.innerText = Math.floor((diff % 60000)/1000)
    
    },1000)