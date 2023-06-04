var readlineSync = require('readline-sync')
var age = readlineSync.question("Enter your age: ")

if(age > 25){
    console.log("right")
}else{
    console.log("wrong")
}