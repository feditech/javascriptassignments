// Create a constructor function with some properties. Now
// create multiple records using the constructor.


function BioData(name,email,city){
    this.name=name;
    this.email=email;
    this.city=city
} 


var stdBiodata=[
   new BioData("ali","ali@gmail.com","Karachi"),
   new BioData("hamza","hamza@gmail.com","Lahore"),
   new BioData("Umer","Umer@gmail.com","Quetta"),
   new BioData("Bilal","bilal@gmail.com","Lahore")
]


console.log(stdBiodata)
//document.write(stdBiodata[0].name)