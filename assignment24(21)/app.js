var mobiles = {
    iphone: {

        iphone7: {
            name: "iphone7",
            src: "images//img1.jpg", //image path
            screenSize: 4.7, //in inches
            os: "iOS 8",
            cpu: "Qualcomm Snapdragon 678",
            // ram: [2, 6], //in GBs
            // rom: [64, 128], //in GBs
            // backCameras: [48, 8, 2, 2], //in MPs
            // frontCameras: [13], //in MPs
            // battery: 5000, //in mAh
            // colors: ["Shadow Black", "Frost White", "Aqua Green"],
        },
        iphone8: {
            name: "iphone8",
            src: "images//img2.jpg", //image path
            screenSize: 4.7, //in inches
            os: "iOS 8",
            cpu: "Qualcomm Snapdragon 678",
            // ram: [2, 6], //in GBs
            // rom: [64, 128], //in GBs
            // backCameras: [48, 8, 2, 2], //in MPs
            // frontCameras: [13], //in MPs
            // battery: 5000, //in mAh
            // colors: ["Shadow Black", "Frost White", "Aqua Green"],
        },
        iphoneSe: {
            name: "iphone Se",
            src: "images//img3.jpg", //image path
            screenSize: 4.7, //in inches
            os: "iOS 8",
            cpu: "Qualcomm Snapdragon 678",
            // ram: [2, 6], //in GBs
            // rom: [64, 128], //in GBs
            // backCameras: [48, 8, 2, 2], //in MPs
            // frontCameras: [13], //in MPs
            // battery: 5000, //in mAh
            // colors: ["Shadow Black", "Frost White", "Aqua Green"],
        },

    },

};


var imgSources = ["images//img1.jpg",
    "images//img2.jpg",
    "images//img3.jpg"
]



function main() {
    var i = 0;
    for (var key in mobiles) {
        for (var key1 in mobiles[key]) {
            
            // getting main div
            var main = document.getElementById("main")
            main.className = "flex-container"
            // main.style.margin = "30px";         
            // main.style.display = "flexbox";
            // main.style.justifyContent = "space-around"

            // creating Card main div
            var cardDiv = document.createElement("div")
            cardDiv.className += "card";
            cardDiv.id = "card"


            // creating image tag

            var img = document.createElement("img")
            img.id = "card-image"
            img.src = imgSources[i]
            img.className += "card-img-top";

            // creating body div
            var cardDivBody = document.createElement("div")
            cardDivBody.className += "card-body";


            // creating h5 for phone name 
            var title = document.createElement("h5")
            title.id = "card-title";
            title.className += "card-title";
            title.innerHTML = mobiles[key][key1].name;

            // creating p tag for detail 
            var p = document.createElement("p")
            p.id = "card-text";
            p.className += "card-text";

            // list for specs
            var ul = document.createElement("ul")
            ul.id = "specs-list";
            ul.className= "specs-list"
            // ul.style.listStyleType= no
            var li1 = document.createElement("li")
            var li2 = document.createElement("li")
            var li3 = document.createElement("li")
            
            li1.innerHTML = mobiles[key][key1].screenSize
            li2.innerHTML = mobiles[key][key1].os
            li3.innerHTML = mobiles[key][key1].cpu

            //appending child DIV> img, Body> title, p>ul>li  
            main.appendChild(cardDiv)


            cardDiv.appendChild(img)
            cardDiv.appendChild(cardDivBody)

            cardDivBody.appendChild(title)
            cardDivBody.appendChild(p)

            p.appendChild(ul)

            ul.appendChild(li1)
            ul.appendChild(li2)



            i = i + 1;
        }
    }
}




var brand = document.getElementById("brand")
var phone = document.getElementById("phone")
var searchbtn = document.getElementById("searchbtn")
//searching
searchbtn.onclick = function () {
    if (brand.value === "") {
        brand.placeholder = "invalid"
        return 0
    } else if (phone.value === "") {
        phone.placeholder = "invalid"
        return 0
    }
    var flag = false
    var flag1 = false
    for (var key in mobiles) {
        if (brand.value == key) {
            flag = true
        }
        for (var key1 in mobiles[key]) {
            if (phone.value == key1) {
                flag1 = true
            }
        }
    }

    if(flag==false){
        
        brand.value = ""
        phone.value = ""
        alert("brand not found")
        return 0
    }
    
    if(flag1==false){
        brand.value = ""
        phone.value = ""
        alert("phone not found")
        return 0
    }







    // getting main div
    var main = document.getElementById("main")
    main.className = "flex-container"
    main.innerHTML = ""

    // creating Card main div
    var cardDiv = document.createElement("div")
    cardDiv.className += "card";
    cardDiv.id = "card"


    // creating image tag

    var img = document.createElement("img")
    img.id = "card-image"
    img.src = mobiles[brand.value][phone.value].src
    img.className += "card-img-top";

    // creating body div
    var cardDivBody = document.createElement("div")
    cardDivBody.className += "card-body";


    // creating h5 for phone name 
    var title = document.createElement("h5")
    title.id = "card-title";
    title.className += "card-title";
    title.innerHTML = mobiles[brand.value][phone.value].name

    // creating p tag for detail 
    var p = document.createElement("p")
    p.id = "card-text";
    p.className += "card-text";

    // list for specs
    var ul = document.createElement("ul")
    ul.id = "specs-list";
    ul.className= "specs-list"

    var li1 = document.createElement("li")
    var li2 = document.createElement("li")
    var li3 = document.createElement("li")
            
    li1.innerHTML = mobiles[brand.value][phone.value].screenSize
    li2.innerHTML = mobiles[brand.value][phone.value].os
    li3.innerHTML = mobiles[brand.value][phone.value].cpu

    //appending child DIV> img, Body> title, p>ul>li  
    main.appendChild(cardDiv)


    cardDiv.appendChild(img)
    cardDiv.appendChild(cardDivBody)

    cardDivBody.appendChild(title)
    cardDivBody.appendChild(p)

    p.appendChild(ul)

    ul.appendChild(li1)
    ul.appendChild(li2)

}





main()
