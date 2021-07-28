//login signup


function login() {

    //getting elements of email an password
    var email = document.getElementById("email")
    var password = document.getElementById("password")
    
    //email password regex
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    var passwordPattern = /^[A-Za-z]\w{7,14}$/;

        
        if (email.value.match(emailPattern))
            {
                email.style.border = "1px   solid black"
            }
        else {
            
            email.value=""
            email.placeholder="invalid email"
            //email.focus()
            email.style.border = "2px   solid red"
            
        }

    

            
            if(password.value.match(passwordPattern)){
                password.style.border = "1px   solid black"
            }
            else
            {
                password.value=""
                password.placeholder="invalid password"
                //email.focus()
                email.style.border = "2px   solid red"
                    
            }

    var user = {
        email: email.value,
        password: password.value
    }

    localStorage.setItem('user', JSON.stringify(user))






}

function getUser(){
    var user = localStorage.getItem("user");

    console.log(JSON.parse(user).email)
    //localStorage.removeItem()
}

getUser()

function signup() {

}