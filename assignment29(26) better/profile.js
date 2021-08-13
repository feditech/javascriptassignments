firebase.auth().onAuthStateChanged((user) => {
    if (user) {
     
        let username = document.getElementById("username")
        let email = document.getElementById("email")
        
        var uid = user.uid;
        firebase.database().ref(`users/${uid}`)
        .once('value',(data)=>{
            username.innerHTML =  data.val().Username
            email.innerHTML = data.val().Email
        })
     // ...
    } else {
      // User is signed out
      // ...
    }
  });


  let logout = ()=>{
      firebase.auth().signOut()
      .then((res) =>{
          window.location = "login.html"
      } )
  }
  


  let load = ()=>{
      profiledata = document.getElementById("profiledata")
      loader = document.getElementById("loader")

      profiledata.style.display= "none"

      loader.style.display = "block"
      
  }