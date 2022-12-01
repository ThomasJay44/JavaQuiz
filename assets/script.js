var h1El = document.querySelector("h1");
var li1 = document.querySelector(".answerOne");
var li2 = document.querySelector(".answerTwo");
var li3 = document.querySelector(".answerThree");
var li4 = document.querySelector(".answerFour");
var timer = document.querySelector(".timer");

var questionOne = {
    question: "Question one text",
    answerOne:["a", true],
    answerTwo:["b", true],
    answerThree:["c", true],
    answerFour:["d", false],
}

var questionTwo = {
    question: "Question two text",
    answerOne:["a", false],
    answerTwo:["b", true],
    answerThree:["c", true],
    answerFour:["d", true]
}

var questionThree = {
    question: "Question three text",
    answerOne:["a", true],
    answerTwo:["b", false],
    answerThree:["c", true],
    answerFour:["d", true]
}

var questionFour = {
    question: "Question four text",
    answerOne:["a", true],
    answerTwo:["b", true],
    answerThree:["c", true],
    answerFour:["d", false]
}

var questionFour = {
    question: "Question five text",
    answerOne:["a", true],
    answerTwo:["b", true],
    answerThree:["c", true],
    answerFour:["d", false]
}

var questionList = [questionOne, questionTwo, questionThree, questionFour, questionFive]
var timeRemaing = 100;
var currentQuestion = 0;

startQuiz.addEventListener("click", displayQuestion)

function startQuiz() {
    var timeinterval = setInterval(function() {
        timeLeft--;
        timer.textContent = timeLeft + " seconds remaining";
        displayQuestion();
        if (timeLeft === 0) {
            clearInterval(timeInterval);
        }

    }, 1000)
}

function nextQuestion() {
    if (anser === false) {
        timeLeft -= 15
        displayQuestion(num)
    }
    else {
        displayQuestion(num)
    }
}

