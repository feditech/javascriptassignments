var cel = 20;
var far = 68;

var celTofar = ( cel * 9/5) +32;

var farTocel = ( far -32 ) * 5/9;


document.write("<h2>" + "temp in celcius:" + cel  +  "</h2>")
document.write("<h2>" + "After conversion in farenheit:" + celTofar  +  "</h2>")


document.write("<h2>" + "temp in farenheit:" + far  +  "</h2>")
document.write("<h2>" + "After conversion to celcius:" + farTocel  +  "</h2>")