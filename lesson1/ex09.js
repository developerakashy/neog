var star = "*"

function repeatingStar(star, times) {
    var starRepeat = ""
    for(let i = 0; i <times; i++) {
        starRepeat += star
    }
    return starRepeat
}

var readlineSync = require('readline-sync')
var userInput = readlineSync.question("Enter number: ")

for(var j = 1; j < Number(userInput)+1; j++) {
    console.log(repeatingStar(star, j))
}

