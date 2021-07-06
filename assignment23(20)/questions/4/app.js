// Suppose you want to check population of your area, their
// educations and professions.
// Create a constructor function which holds following
// properties:
// Name, gender, address, education, profession,
// Enter all records one by one.
// Hint:

//  use select box for education and profession,
//  use radio box for gender

// Bonus : use can use localStorage to save records.


function BioData(name, gender, address, education, profession) {
    this.name = name;
    this.gender = gender;
    this.address = address;
    this.education = education;
    this.profession = profession;
}



var arr = []
function getData() {
    
    var name = document.getElementById("name")
    var gender = document.getElementById("gender")
    var addr = document.getElementById("address")
    var prof = document.getElementById("profession")


   return arr[0]= new BioData(name.value,gender.value,addr.innerHTML,prof.value) 
    
   
}
var x =getData()
console.log(x)