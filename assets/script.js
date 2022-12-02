var h1El = document.querySelector("h1");
var li1 = document.querySelector(".answerOne");
var li2 = document.querySelector(".answerTwo");
var li3 = document.querySelector(".answerThree");
var li4 = document.querySelector(".answerFour");
var timer = document.querySelector(".timer");
var startQuiz = document.querySelector("")
var startButton = document.querySelector
var nextQuestion = document.querySelector
 
var questionOne = {
    question: "Which of these is a color",
    answerOne:["orange", true],
    answerTwo:["banana", false],
    answerThree:["jacket", false],
    answerFour:["box", false],
}

var questionTwo = {
    question: "Which of these is a number",
    answerOne:["apple", false],
    answerTwo:["Television", false],
    answerThree:["gorilla", false],
    answerFour:["seven", true]
}

var questionThree = {
    question: "Which is not a shape",
    answerOne:["circle", false],
    answerTwo:["square", false],
    answerThree:["hexagon", false],
    answerFour:["the pentagon", true]
}

var questionFour = {
    question: "Question four text",
    answerOne:["a", true],
    answerTwo:["b", false],
    answerThree:["c", false],
    answerFour:["d", false]
}

var questionFour = {
    question: "Question five text",
    answerOne:["a", true],
    answerTwo:["b", false],
    answerThree:["c", false],
    answerFour:["d", false]
}

var questionList = [questionOne, questionTwo, questionThree, questionFour, questionFive]
var timeRemaing = 100;
var currentQuestion = 0;

startQuiz.addEventListener("click", displayQuestion);
//starts quiz
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
//cycles through questions
function displayQuestion() {
    h1El.textContent = questionList[num].question
    li1.textContent = questionList[num].answerOne[0]
    li2.textContent = questionList[num].answerTwo[0]
    li3.textContent = questionList[num].answerThree[0]
    li4.textContent = questionList[num].answerFour[0]
    currentQuestion++
    
}
//deduct time from timer
function nextQuestion() {
    if (answer === false) {
        timeLeft -= 15
        displayQuestion(num)
    }
    else {
        displayQuestion(num)
    }
}

