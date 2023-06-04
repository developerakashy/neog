var questionOne = {
    question: "Who is my favourite superhero? ",
    answer: "Dhruv"
}

var questionTwo = {
    question: "Which is my favourite song? ",
    answer: "Channa Meraya"
}

var readlineSync = require('readline-sync')
var userAnswer = readlineSync.question(questionOne.question)

var score = 0

function quiz(userAnswer, answer) {
    if( userAnswer.toUpperCase() === answer.toUpperCase() ) {
        console.log("You entered correct answer")
        score += 1
    }else{
        console.log("You entered wrong answer")
    }
    console.log("Your current score: "+score)
    console.log("-----------------")
}
quiz(userAnswer, questionOne.answer)
var userAnswer = readlineSync.question(questionTwo.question)
quiz(userAnswer, questionTwo.answer)