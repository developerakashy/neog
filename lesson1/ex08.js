var readlineSync = require("readline-sync")
console.log("Which team won the IPL 2023? ")
var userAnswer = readlineSync.question("Enter your answer: ")
userAnswer = userAnswer.toUpperCase()

var answer = "CSK"
var score = 0
 
function check(userAnswer,answer) {
    if(userAnswer == answer){
        score += 1
        console.log("You answered right. Your score is "+score)
    }else{
        console.log("You answered wrong. Your score is "+score)
    }
}
check(userAnswer,answer)