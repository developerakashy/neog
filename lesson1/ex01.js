var readlineSync = require('readline-sync')

var userName = readlineSync.question("What's your name? ")

var greetingName = "Welcome " + userName
console.log(greetingName)