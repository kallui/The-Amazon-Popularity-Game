let item = {
    name: 'Banana Phone',
    numOfRatings: 15,
    url: "https://m.media-amazon.com/images/I/61T7-sgbZOL._AC_SL1500_.jpg"
}

const itemArray = []

itemArray[0] = {name: 'Banana Phone',
numOfRatings: 15,
url: "https://m.media-amazon.com/images/I/61T7-sgbZOL._AC_SL1500_.jpg"}


itemArray[1] = {name: 'Mirror',
numOfRatings: 12,
url: "https://m.media-amazon.com/images/I/61go0qfA1iL._AC_SY879_.jpg"}



//Returns true if "item1 > item2" OR "Item 1 is more popular than Item 2"
function compareTwoItems(clicked) {
    if (clicked == 1) {
        document.documentElement.style
    .setProperty('--item2URL', "url('https://m.media-amazon.com/images/I/71Ev4nKqnQS._AC_SL1500_.jpg')");
    } else {
        document.documentElement.style
        .setProperty('--item1URL', "url('https://m.media-amazon.com/images/I/71Ev4nKqnQS._AC_SL1500_.jpg')");
    }
}




function change(int) {
    if (int == 1) {

    }
}