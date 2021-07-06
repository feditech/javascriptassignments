// 2. Create an object with properties name, email, password, age,
// gender, city, country.
// Check if age and country properties exist in object or not.
// Also check firstName and lastName properties in object.


var obj = {
    name:"ALi",
    email:"ALI@gmail.com",
    password:"1234",
    age: 21,
    gender: 'M',
    city:"Karachi",
    country:"Pakistan"
}

alert("age" in obj )
alert("country" in obj )
alert("firstName" in obj )
alert("lastName" in obj )