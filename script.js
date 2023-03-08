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
var timerElement = document.getElementById("timer");

startQuizBtn.addEventListener("click", startQuiz);

var questionNumber = 0;
var time = 75;
var counter;

function startQuiz() {
    answerDiv.innerHTML = "";
    heroSection.removeChild(startQuizBtn);
    startTimer();

    newQuestion();
}

function startTimer(){
  counter = setInterval(timer, 1000);
    function timer(){
      time--;
      timerElement.innerHTML = "Time: " + time;  
    }
}

function newQuestion(){

    while (answerDiv.lastElementChild) {
        answerDiv.removeChild(answerDiv.lastElementChild);
    }

    if (questionNumber >= questions.length) {
      showResults();
      return;
    }

    questionText.innerHTML = questions[questionNumber].question;
    //console.log(questions[questionNumber].options);

    var i = 1;
    
    questions[questionNumber].options.forEach(element => {
        var answer = document.createElement("button");

        answer.addEventListener("click", function() {
          checkAnswer(questionNumber, element);
        });

        answer.innerHTML = i + ". " + element
        answerDiv.appendChild(answer);
        i++;
    });

    questionNumber++;
}

function checkAnswer(questionNumber, answer){

  console.log(questions[questionNumber - 1].answer)

  if (questions[questionNumber - 1].answer != answer) {
    time = time - 15;
    timerElement.innerHTML = "Time: " + time;
  }
  

  newQuestion();
}
// pass in 2 parameters;


var initialsDiv = document.createElement("div");
var initialsInput = document.createElement("input");
var initialsBtn = document.createElement("button");
initialsBtn.innerHTML = "Submit"
initialsBtn.id = "initialsBtn"
initialsBtn.addEventListener("click", showHighScores)

//initialsDiv.innerHTML = "Enter initials: <input type=\"text\" name=\"initials\" id=\"initials\"></input><input class=\"submit\" type=\"submit\" value=\"Submit\">"

initialsDiv.innerHTML = "Enter initials: ";
initialsDiv.appendChild(initialsInput)
initialsDiv.appendChild(initialsBtn)


function showResults() {
  questionText.innerHTML = "All done!"
  clearInterval(counter);
  timerElement.innerHTML = "Time: " + time;  
  answerDiv.innerHTML = "Your final score is " + time
  answerDiv.appendChild(initialsDiv);

}

var highScores = [
]

function showHighScores() {

  // var intialsInput = document.getElementById("initials");
  // console.log(initialsInput.value);
  console.log("high score: ", initialsInput.value)

  highScores.push(initialsInput.value + " - " + time)

  questionText.innerHTML = "High Scores";

  var highScoreList = document.createElement("ol");

  highScores.forEach((element) => {
    var highScore = document.createElement("li");
    highScore.innerHTML = element;
    highScoreList.appendChild(highScore);
  });

  answerDiv.innerHTML = "";
  answerDiv.appendChild(highScoreList);

}