var homeTown = "MUMBAI"
var count = 0

var readlineSync = require("readline-sync")
var townName = readlineSync.question("Enter your town name: ")

if(townName.toLocaleUpperCase() == homeTown){
    count += 1
    console.log(count)
}else{
    console.log(count)
}