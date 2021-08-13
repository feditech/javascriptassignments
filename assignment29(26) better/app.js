
let login = () => {
    let email = document.getElementById("email")
    let password = document.getElementById("password")
    let successdiv = document.getElementById("successdiv")
    let errordiv = document.getElementById("errordiv")
    let loader = document.getElementById("loader")
    let loadertext = document.getElementById("loadertext")

    loader.style.display = "block";
    loadertext.style.display = 'none';
    errordiv.style.display="none"

    firebase.auth().signInWithEmailAndPassword(email.value, password.value)
        .then((res) => {
            // Signed in

            var user = res.user;
            successdiv.innerText = "Sign in Successful"
            loader.style.display = "none";
            loadertext.style.display = 'block';
            successdiv.style.display= "block"


            // console.log(firebase.auth().currentUser)              
    
            setTimeout(()=>{
                window.location = "profile.html"
            },1000)

        })
        .catch((error) => {
           
            var errorMessage = error.message;
            loader.style.display = "none";
            loadertext.style.display = 'block';
            successdiv.style.display= "none"
            errordiv.innerText= errorMessage;
            errordiv.style.display="block"
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




// let profile = ()=>{
  
    
        
//     try{
//         let username = document.getElementById("username")
//         let email = document.getElementById("email")
//         let userid = firebase.auth().currentUser.uid
//         firebase.database().ref(`users/${userid}`)
//         .once('value',(data)=>{
//             username.innerText = data.val().Username
//             email.innerText = data.val().Email
      
            
//           })     
//     }catch(error){
// console.log(error)
//     }
        
   
    
//     } 
        
//     document.addEventListener('DOMContentLoaded', function() {
//         // your code here
//      }, false);
        




// let logout = ()=>{

// }


// to get data from data base 

    //     firebase.database().ref(`users/${user.uid}`)
        //     .once('value',(data)=>{
        //         let fetcheddata = data.val();
            
        //            for(var key in fetcheddata){
        //                         console.log(key,fetcheddata[key])
                
        //     }
            
                
        // })