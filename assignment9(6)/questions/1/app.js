// Declare and initialize an empty multidimensional array.(Array of arrays)

var arr1 = []
var arr2 = []
var arr3 = []

var arr = [arr1,arr2,arr3]

document.write("<br>")

for(var i = 0; i< 3 ; i++){
    for(var j=0; j<4 ; j++){
        document.write(arr[i][j]+ "                    ")
    }
    document.write("<br>")
}
