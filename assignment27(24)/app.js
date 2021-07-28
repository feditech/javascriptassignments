date = new Date()
var maindiv = document.getElementById('main')
var articles;
var fulldiv = document.getElementById('readfull')

// main code starts here

let searchData = async () => {
      maindiv.innerHTML = ""
      var searchItem = document.getElementById('searchItem').value;
      await setData(searchItem)
}


let getData = (search) => {
      return new Promise((resolve, reject) => {
            fetch(`https://newsapi.org/v2/everything?q=${search}&from=${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate() - 1}&sortBy=popularity&apiKey=720de357eefe4929b36d470b9c92cf64`)
                  .then(data => data.json())
                  .then(data => {
                        resolve(data)
                  })
                  .catch(err => err)
      })
}

let setData = async (search) => {
      maindiv.style.display= "inline" //will only display 
      fulldiv.style.display="none"
      maindiv.innerHTML=""
      let a = await getData(search)
      articles = a.articles

      for (var i = 0; i < articles.length; i++) {
            var card = `
            <div class="col-lg-2.4">
            <div id="card" class="card " style="width: 18rem;">
         <img class="card-img-top" src=${articles[i].urlToImage} alt="Card image cap">
         <div class="card-body">
           <h5 class="card-title">${articles[i].title}</h5>
           <h3 class="card-text">${articles[i].author}</h3>
         
      <div class="hideValues" id="hideValues">
           <p class="card-text">${articles[i].description}</p> <br>
           <p  class="card-text">${articles[i].content}</p> <br>
           <p class="card-text"><b>Publish Date:</b> ${articles[i].publishedAt}</p> <br>
           <p  class="card-text"><b>Sources:</b> ${articles[i].source.name}</p> <br>
           <p  class="card-text"><b>URL:</b> ${articles[i].url}</p> <br>
            
           </div>

           <a href="#"  class="btn btn-primary" onclick="readfull(this)"  id="readfullbtn" >read full story</a>
   </div>

   </div>
   </div>`
            maindiv.innerHTML += card;    
      }

}


setData("Apple")


function readfull(a) {
      maindiv.style.display= "none"
      fulldiv.style.display="block"
      fulldiv.innerHTML=""

      var fullcard = a.parentNode.parentNode
      var toShow = document.getElementById("hideValues")
      var toHide = document.getElementById("readfullbtn")
      
      
  
      console.log(fullcard)
      
       fulldiv.appendChild(fullcard)

       toShow.style.display = "block"
       toHide.style.display = "none"

       
      }
