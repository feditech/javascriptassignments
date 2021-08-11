
let login = () => {
    let email = document.getElementById("email")
    let password = document.getElementById("password")
    let successdiv = document.getElementById("successdiv")
    let errordiv = document.getElementById("errordiv")
    let loader = document.getElementById("loader")
    let loadertext = document.getElementById("loadertext")

    loader.style.display = "block";
    loadertext.style.display = 'none';

    firebase.auth().signInWithEmailAndPassword(email.value, password.value)
        .then((res) => {
            // Signed in
            var user = res.user;
            successdiv.innerText = "Sign in Successful"

            loader.style.display = "none";
            loadertext.style.display = 'block';
            successdiv.style.display= "block"

            // ...
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            loader.style.display = "none";
            loadertext.style.display = 'block';

        });



}


let register = () => {
    let username = document.getElementById("username")
    let email = document.getElementById("email")
    let password = document.getElementById("password")
    let successdiv = document.getElementById("successdiv")
    let errordiv = document.getElementById("errordiv")
    let loader = document.getElementById("loader")
    let loadertext = document.getElementById("loadertext")

    loader.style.display = "block";
    loadertext.style.display = 'none';

    firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
        .then((res) => {
            // Signed in 
            var user = res.user;
            firebase.database().ref(`users/${user.uid}`).set(
                {
                    Username: `${username.value}`,
                    Email: `${email.value}`,
                    Password: `${password.value}`
                }
            ).then((res) => {
                successdiv.innerText = "Sign up successful"
                successdiv.style.display = "block";
                loadertext.style.display = "block";
                errordiv.style.display = "none";
                loader.style.display = "none";
                username.value = ""
                email.value = ""
                password.value = ""

                setTimeout(() => {
                    window.location = "login.html"
                }, 1000)

            })


        })
        .catch((error) => {

            var errorMessage = error.message;
            errordiv.innerText = errorMessage;
            errordiv.style.display = "block";
            successdiv.style.display = "none";
            loader.style.display = "none";
            loadertext.style.display = "block";


            // ..
        });
}




