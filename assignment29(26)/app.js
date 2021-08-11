

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
            localStorage.setItem("user", JSON.stringify(data))
            adduser();
            
            
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
                .once('value', (data) => {
                    console.log(data.val())
                })
        })
        .catch((error) => {
            var errorMessage = error.message;
            console.log(errorMessage)
        });
}



var users=[]
let adduser = ()=>{

            let user = localStorage.getItem("user")
            let userobj = JSON.parse(user)
            users.push(userobj)
            console.log(users)
            // window.location.assign("index.html")

            // let main = document.getElementById("main1")
            // main.innerHTML += `User: ${userobj.Username} Email: ${userobj.email}`
            
}


let myFun = ()=>{
    // let main = document.getElementById("main1")
    // let data= document.createElement("<div>")
    // data.innerHTML += JSON.stringify(users) 
    // main.appendChild(data)
}