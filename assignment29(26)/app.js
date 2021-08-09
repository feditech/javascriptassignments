





let register = () => {
    let uname = document.getElementById("uname");
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let data = {
        Username: uname.value,
        email: email.value,
        password: password.value
    }
    firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
        .then((res) => {
            firebase.database().ref(`users`).child(res.user.uid).set(data)
            
        })
        .catch((error) => {
            var errorMessage = error.message;
            console.log("error=>", errorMessage)
        });
}



let login = () => {
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    firebase.auth().signInWithEmailAndPassword(email.value, password.value)
        .then((userCredential) => {
            var user = userCredential.user;
            firebase.database().ref(`users/${user.uid}`)
            .once('value',(data)=>{
                console.log(data.val())
            })
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorMessage)
        });
}