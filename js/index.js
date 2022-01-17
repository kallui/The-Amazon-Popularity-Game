let item = {
    name: 'Banana Phone',
    numOfRatings: 15,
    url: "https://m.media-amazon.com/images/I/61T7-sgbZOL._AC_SL1500_.jpg"
}

const itemArray = []

itemArray[0] = {name: 'Banana Phone',
numOfRatings: 20,
url: "https://m.media-amazon.com/images/I/61T7-sgbZOL._AC_SL1500_.jpg"}


itemArray[1] = {name: 'Mirror',
numOfRatings: 10,
url: "https://m.media-amazon.com/images/I/61go0qfA1iL._AC_SY879_.jpg"}

itemArray[2] = {name: 'Bounty Paper Tower',
numOfRatings: 8500,
url: 'https://m.media-amazon.com/images/I/81RfQ85XJKL._AC_SX679_.jpg'}

itemArray[3] = {name: 'Cottonelle Toilet Paper',
numOfRatings: 59020,
url: 'https://m.media-amazon.com/images/I/810ytwZbkJS._AC_SX522_.jpg'}

itemArray[4] = {name: 'Bellroy Slim Wallet',
numOfRatings: 10,
url: 'https://m.media-amazon.com/images/I/61Vtv7hVkWL._AC_UX695_.jpg'}

itemArray[5] = {name: 'Amazon Essential Socks',
numOfRatings: 4230,
url: 'https://m.media-amazon.com/images/I/91J-numyfaL._AC_UX679_.jpg'}

itemArray[6] = {name: 'Dortala Sofa',
numOfRatings: 2,
url: 'https://m.media-amazon.com/images/I/71tuA60M0cL._AC_SX679_.jpg'}

itemArray[7] = {name: 'Craftsmam Hammer',
numOfRatings: 1380,
url: 'https://m.media-amazon.com/images/I/61aKrv6NzBL._AC_SX522_.jpg'}

itemArray[8] = {name: 'Diyife Key Lock Box',
numOfRatings: 510,
url: 'https://m.media-amazon.com/images/I/71Pmmi+bpCL._AC_SX679_.jpg'}

itemArray[9] = {name: 'North Face Infant Hoodie',
numOfRatings: 70,
url: 'https://m.media-amazon.com/images/I/71AP5WxDd1L._AC_UX679_.jpg'}

itemArray[10] = {name: 'Outward Dog Treat Puzzle',
numOfRatings: 8060,
url: 'https://m.media-amazon.com/images/I/81TxartXF7L._AC_SX522_.jpg'}

itemArray[11] = {name: 'Atomic Habits Book',
numOfRatings: 46720,
url: 'https://images-na.ssl-images-amazon.com/images/I/515mvgd0pXL._SX329_BO1,204,203,200_.jpg'}

itemArray[12] = {name: 'Wet n Wild Lipstick',
numOfRatings: 5050,
url: 'https://m.media-amazon.com/images/I/61ZXr0o3ceL._AC_SX679_.jpg'}

itemArray[13] = {name: 'Ecolution PopCorn Popper',
numOfRatings: 200,
url: 'https://m.media-amazon.com/images/I/81aTLT1IstL._AC_SX679_.jpg'}

itemArray[14] = {name: 'GYMAX Treadmill',
numOfRatings: 1260,
url: 'https://m.media-amazon.com/images/I/61VUyZ92OaL._AC_SX522_.jpg'}

itemArray[15] = {name: 'Amazon Basics Dumbells',
numOfRatings: 21560,
url: 'https://m.media-amazon.com/images/I/81YvGI3D0HL._AC_SX522_.jpg'}

itemArray[16] = {name: 'Kindle',
numOfRatings: 3120,
url: 'https://m.media-amazon.com/images/I/61Ww4abGclL._AC_SX679_.jpg'}

itemArray[17] = {name: 'GOTRAX Electric Scooter',
numOfRatings: 50,
url: 'https://m.media-amazon.com/images/I/61TBcpBMmjL._AC_SX522_.jpg'}

itemArray[18] = {name: 'ecobee SmartThermostat',
numOfRatings: 460,
url: 'https://m.media-amazon.com/images/I/511k68zeC9L._AC_SX679_.jpg'}

itemArray[19] = {name: 'Pamray Winter Boots',
numOfRatings: 500,
url: 'https://m.media-amazon.com/images/I/71CX8UKHLML._AC_UY695_.jpg'}

itemArray[20] = {name: 'Amazon Echo Dot',
numOfRatings: 62780,
url: 'https://m.media-amazon.com/images/I/6182S7MYC2L._AC_SX679_.jpg'}



console.log(itemArray[0].name)

// //Returns true if "item1 > item2" OR "Item 1 is more popular than Item 2"
// function compareTwoItems(item1, item2) {
//     if(item1.numOfRatings > item2.numOfRatings) {
//         document.documentElement.style
//     .setProperty('--item1URL', "url('https://m.media-amazon.com/images/I/71Ev4nKqnQS._AC_SL1500_.jpg')");
//         return true;
//     }
//     return false;
// }

//Returns true if "item1 > item2" OR "Item 1 is more popular than Item 2"


// function compareTwoItems(clicked) {
    
//     if (clicked == 1) {
//         counter = counter + 1
//         document.documentElement.style
//     .setProperty('--item2URL', "url(" + itemArray[counter].url + ")");
//     } else {
//         counter = counter + 1
//         document.documentElement.style
//         .setProperty('--item1URL', '' + "url(" + itemArray[counter].url + ")");
//     }

// }
let oldImageArrayIndex = 0
let newImageArrayIndex = 1
let nextImageArrayIndex = 2

let oldImageOnLeft = true 
let newImageOnLeft = false

function leftItemMorePopular() {
    if (itemArray[oldImageArrayIndex].numOfRatings > itemArray[newImageArrayIndex].numOfRatings) {
        return oldImageOnLeft;       
    } else {
        return newImageOnLeft;
    }
}

function switchImage(clickedOnLeft) {
    if (clickedOnLeft == leftItemMorePopular()) {
        if (leftItemMorePopular()) {
            document.documentElement.style.setProperty('--item2URL', "url(" + itemArray[nextImageArrayIndex].url + ")");
        } else {
            document.documentElement.style.setProperty('--item1URL', "url(" + itemArray[nextImageArrayIndex].url + ")");
        }
        oldImageArrayIndex = newImageArrayIndex
        newImageArrayIndex = nextImageArrayIndex
        nextImageArrayIndex++ // can be changed to random new array index
    } else {
        // game over
    }
}


console.log("yes")
console.log(compareTwoItems(itemArray[0],itemArray[1]))
console.log()
