const startBtn = document.getElementById("start-btn");
const nextButton = document.getElementById("ext-btn");
const questionContainerElement = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");

let shuffledQuestions, correctQuestionIndex;
let quizScore = 0;

startBtn.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
  correctQuestionIndex++;
  setNextQuestion();
});

function startGame() {
  startBtn.classList.add('hide');
  shuffledQuestions = question.sort(() => Math.random() - 0.5);
  correctQuestionIndex = 0;
  questionContainerElement.classList.remove('hide')
  setNextQuestion();
  quizScore = 0;
}

function setNextQuestion() {
  resetState();
  showQuestion(shuffledQuestions[correctQuestionIndex]);
}

function showQuestion(question) {
  questionElement.innerText = question.question;
  question.answers.forEach((answer) => {
    const button = document.createElement('button')
    button.innerText = answer.text;
    button.classList.add('btn');
    if (answer.corrent) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer);
    answerButtonsElement.appendChild(button);
  });
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
    const selectedButton=e.target
    const correct =selectedButton.dataset.correct

  setStatusClass(document.body,correct);
  Array.from(answerButtonsElement.children).forEach((button) => {
    setStatusClass(button,button.dataset.correct)
  })
  if (shuffledQuestions.length > correctQuestionIndex + 1) {
    nextButton.classList.remove("hide");
  } else {
    startBtn.innerText = "restart"
    startBtn.classList.remove("hide")
  }
  if (selectedButton.dataset = correct) {
    quizScore++
  }
  document.getElementById('right-answers').innerText=quizScore
}

function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add("correct");
  } else {
    element.classList.add("wrong");
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct');
  element.classList.remove('wrong');
}

const questions = [
  {
    question: "what is question 1",
    answers: [
      { text: "answer 1", correct: true },
      { text: "answer 2", correct: false },
      { text: "answer 3", correct: false },
      { text: "answer 4", correct: false },
    ],
  },
  {
    question: "what is question 2",
    answers: [
      { text: "answer 1", correct: false },
      { text: "answer 2", correct: false },
      { text: "answer 3", correct: true },
      { text: "answer 4", correct: false },
    ],
  },
  {
    question: "what is question 3",
    answers: [
      { text: "answer 1", correct: false },
      { text: "answer 2", correct: true },
      { text: "answer 3", correct: false },
      { text: "answer 4", correct: false },
    ],
  },
  {
    question: "what is question 4",
    answers: [
      { text: "answer 1", correct: true },
      { text: "answer 2", correct: false },
      { text: "answer 3", correct: false },
      { text: "answer 4", correct: false },
    ],
  },
  {
    question: "what is question 5",
    answers: [
      { text: "answer 1", correct: false },
      { text: "answer 2", correct: false },
      { text: "answer 3", correct: false },
      { text: "answer 4", correct: true },
    ],
  },
];
