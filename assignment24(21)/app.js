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
       infinix: {
        zero_8: {
            name: "Infinix Zero 8",
            src: "infinix-zero8.jpg", //image path
            screenSize: 6.85, //in inches
            os: "Android 10",
            cpu: "Mediatek Helio G90T",
            ram: [8], //in GBs
            rom: [128], //in GBs
            backCameras: [64, 8, 2, 2], //in MPs
            frontCameras: [48, 8], //in MPs
            battery: 4500, //in mAh
            colors: ["Silver Diamond", "Black Diamond", "Green Diamond"],
        },
        smart_5: {
            name: "Infinix Smart 5",
            src: "infinix-smart5.jpg", //image path
            screenSize: 6.6, //in inches
            os: "Android 10", //Go Edition
            cpu: "Mediatek Helio A20",
            ram: [2, 3], //in GBs
            rom: [32, 64], //in GBs
            backCameras: [13, 8, "QVGA"], //in MPs
            frontCameras: [8], //in MPs
            battery: 5000, //in mAh
            colors: ["Ocean Wave", "Quetzal Cyan", "Midnight Black"],
        },
        hot_10: {
            name: "Infinix Hot 10",
            src: "infinix-hot10.jpg", //image path
            screenSize: 6.78, //in inches
            operatingSystem: "Android 10",
            cpu: "Mediatek Helio G70",
            ram: [3, 4, 6], //in GBs
            rom: [64, 128], //in GBs
            backCameras: [16, 2, 2, "QVGA"], //in MPs
            frontCameras: [8], //in MPs
            battery: 5200, //in mAh
            colors: ["Obsidian Black", "Amber Red", "Moonlight Jade", "Ocean Wave"],
        },
        note_8: {
            name: "Infinix Note 8",
            src: "infinix-note8.jpg", //image path
            screenSize: 6.95, //in inches
            os: "Android 10",
            cpu: "Mediatek Helio G80",
            ram: [6], //in GBs
            rom: [128], //in GBs
            backCameras: [64, 2, 2, 2], //in MPs
            frontCameras: [16, 2], //in MPs
            battery: 5200, //in mAh
            colors: ["Gray", "Blue", "Green"],
        },
        note_10_pro: {
            name: "Infinix Note 10 Pro",
            src: "infinix-note10-pro.jpg", //image path
            screenSize: 6.81, //in inches
            os: "Android 11",
            cpu: "Mediatek Helio G95",
            ram: [6, 8], //in GBs
            rom: [64, 128, 256], //in GBs
            backCameras: [64, 8, 2, 2], //in MPs
            frontCameras: [16], //in MPs
            battery: 5000, //in mAh
            colors: ["Black", "Purple", "Nordic Secret"],
        },
    },
    samsung: {
        galaxy_a51: {
            name: "Samsung Galaxy A51",
            src: "samsung-galaxy-a51.jpg", //image path
            screenSize: 6.5, //in inches
            os: "Android 11",
            cpu: "Exynos 9611",
            ram: [4, 6, 8], //in GBs
            rom: [64, 128, 256], //in GBs
            backCameras: [48, 12, 5, 5], //in MPs
            frontCameras: [32], //in MPs
            battery: 4000, //in mAh
            colors: ["Prism Crush Black", "Prism Crush White", "Prism Crush Blue", "Prism Crush Pink"],
        },
        galaxy_a12: {
            name: "Samsung Galaxy A12",
            src: "samsung-galaxy-a12.jpg", //image path
            screenSize: 6.5, //in inches
            os: "Android 11",
            cpu: "Mediatek Helio P35",
            ram: [2, 3, 4, 6], //in GBs
            rom: [32, 64, 128], //in GBs
            backCameras: [48, 5, 2, 2], //in MPs
            frontCameras: [8], //in MPs
            battery: 5000, //in mAh
            colors: ["Black", "White", "Blue", "Red"],
        },
        galaxy_a32: {
            name: "Samsung Galaxy A32",
            src: "samsung-galaxy-a32.jpg", //image path
            screenSize: 6.4, //in inches
            os: "Android 11",
            cpu: "Mediatek Helio G80",
            ram: [4, 6, 8], //in GBs
            rom: [64, 128], //in GBs
            backCameras: [64, 8, 5, 5], //in MPs
            frontCameras: [20], //in MPs
            battery: 5000, //in mAh
            colors: ["Awesome Black", "Awesome White", "Awesome Blue", "Awesome Violet"],
        },
        galaxy_a52: {
            name: "Samsung Galaxy A52",
            src: "samsung-galaxy-a52.jpg", //image path
            screenSize: 6.5, //in inches
            os: "Android 11",
            cpu: "Qualcomm Snapdragon 720G",
            ram: [4, 6, 8], //in GBs
            rom: [128, 256], //in GBs
            backCameras: [64, 12, 5, 5], //in MPs
            frontCameras: [32], //in MPs
            battery: 4500, //in mAh
            colors: ["Awesome Black", "Awesome White", "Awesome Violet", "Awesome Blue"],
        },
        galaxy_a52_5g: {
            name: "Samsung Galaxy A52 5G",
            src: "samsung-galaxy-a52-5g.jpg", //image path
            screenSize: 6.5, //in inches
            os: "Android 11",
            cpu: "Qualcomm Snapdragon 750G 5G",
            ram: [6, 8], //in GBs
            rom: [128, 256], //in GBs
            backCameras: [64, 12, 5, 5], //in MPs
            frontCameras: [32], //in MPs
            battery: 4500, //in mAh
            colors: ["Awesome Black", "Awesome White", "Awesome Violet", "Awesome Blue"],
        },
     }


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
