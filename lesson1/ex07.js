var readlineSync = require("readline-sync")
var num1 = readlineSync.question("Enter the num1: ")
var num2 = readlineSync.question("Enter the num2: ")

function add(num1, num2) {
    addition = Number(num1) + Number(num2)
    return addition
}
console.log(add(num1,num2))