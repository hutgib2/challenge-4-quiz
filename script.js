let questions = [
    {
    numb: 1,
    question: "What does HTML stand for?",
    answer: "Hyper Text Markup Language",
    options: [
      "Hyper Text Preprocessor",
      "Hyper Text Markup Language",
      "Hyper Text Multiple Language",
      "Hyper Tool Multi Language"
    ]
  },
    {
    numb: 2,
    question: "What does CSS stand for?",
    answer: "Cascading Style Sheet",
    options: [
      "Common Style Sheet",
      "Colorful Style Sheet",
      "Computer Style Sheet",
      "Cascading Style Sheet"
    ]
  },
    {
    numb: 3,
    question: "What does PHP stand for?",
    answer: "Hypertext Preprocessor",
    options: [
      "Hypertext Preprocessor",
      "Hypertext Programming",
      "Hypertext Preprogramming",
      "Hometext Preprocessor"
    ]
  },
    {
    numb: 4,
    question: "What does SQL stand for?",
    answer: "Structured Query Language",
    options: [
      "Stylish Question Language",
      "Stylesheet Query Language",
      "Statement Question Language",
      "Structured Query Language"
    ]
  },
    {
    numb: 5,
    question: "What does XML stand for?",
    answer: "eXtensible Markup Language",
    options: [
      "eXtensible Markup Language",
      "eXecutable Multiple Language",
      "eXTra Multi-Program Language",
      "eXamine Multiple Language"
    ]
  },
];





var startQuizBtn = document.getElementById("start-quiz-btn");
var questionText = document.getElementById("question");
var answerDiv = document.getElementById("answer-div");
var heroSection = document.getElementById("hero-section");

startQuizBtn.addEventListener("click", startQuiz);

var questionNumber = 0;

function startQuiz() {
    answerDiv.innerHTML = "";
    heroSection.removeChild(startQuizBtn);
    newQuestion();
}

function newQuestion(){

    while (answerDiv.lastElementChild) {
        answerDiv.removeChild(answerDiv.lastElementChild);
    }

    questionText.innerHTML = questions[questionNumber].question;
    console.log(questions[questionNumber].options);

    var i = 1;
    
    questions[questionNumber].options.forEach(element => {
        var answer = document.createElement("button");
        answer.addEventListener("click", newQuestion);
        answer.innerHTML = i + ". " + element
        answerDiv.appendChild(answer);
        i++;
    });

    questionNumber++;
}