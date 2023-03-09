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
    question: "Which built-in method removes the last element from an array and returns that element?",
    answer: "pop()",
    options: [
      "last()",
      "get()",
      "pop()",
      "None of the above."
    ]
  },
    {
    numb: 4,
    question: "What is the difference between an opening tag and a closing tag?",
    answer: "Closing tag has a / in front",
    options: [
      "Opening tag has a / in front",
      "Closing tag has a / in front",
      "There is no difference",
      "None of the above."
    ]
  },
    {
    numb: 5,
    question: "Which of the following defines a relative measurement for the height of a font in em spaces?",
    answer: "em",
    options: [
      "%",
      "cm",
      "em",
      "ex"
    ]
  },
];





var startQuizBtn = document.getElementById("start-quiz-btn");
var questionText = document.getElementById("question");
var answerDiv = document.getElementById("answer-div");
var heroSection = document.getElementById("hero-section");
var timerElement = document.getElementById("timer");
var correctDiv = document.getElementById("correct");

startQuizBtn.addEventListener("click", startQuiz);

var questionNumber = 0;
var time = 75;
var counter;

function mainPage(){
  questionText.innerHTML = "Coding Quiz Challenge"
  answerDiv.innerHTML = "Try to answer the following code-related questions within the time limit. Keep in mind that incorrent answers will penalize your score/time by seconds!"
  heroSection.appendChild(startQuizBtn);
  questionNumber = 0;
  time = 75;
  timerElement.innerHTML = "Time: " + time;  
}

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
      if (time < 1) {
        timeUp();
      }
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
    correctDiv.innerHTML = "Wrong!"
  } else {
    correctDiv.innerHTML = "Correct!"
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
  correctDiv.innerHTML = "";
  questionText.innerHTML = "All done!"
  clearInterval(counter);
  timerElement.innerHTML = "Time: " + time;  
  answerDiv.innerHTML = "Your final score is " + time
  answerDiv.appendChild(initialsDiv);

}

var highScores = [
]

var highScoreList = document.createElement("ol");
var goBackBtn = document.createElement("button");
goBackBtn.addEventListener("click", mainPage);
goBackBtn.innerHTML = "Go back";

function showHighScores() {

  // var intialsInput = document.getElementById("initials");
  // console.log(initialsInput.value);
  console.log("high score: ", initialsInput.value)

  highScores.push(initialsInput.value + " - " + time)

  questionText.innerHTML = "High Scores";

  highScoreList.innerHTML = "";
  highScores.forEach((element) => {
    var highScore = document.createElement("li");
    highScore.innerHTML = element;
    highScoreList.appendChild(highScore);
  });

  answerDiv.innerHTML = "";
  answerDiv.appendChild(highScoreList);

  var clearHighScoresBtn = document.createElement("button");
  
  clearHighScoresBtn.innerHTML = "Clear high scores";

  
  clearHighScoresBtn.addEventListener("click", removeHighScores)

  answerDiv.appendChild(goBackBtn);
  answerDiv.appendChild(clearHighScoresBtn);
}

function removeHighScores() {
  highScores = [
  ]
  highScoreList.innerHTML = "";
}

function timeUp() {

  questionText.innerHTML = "Times Up!"
  clearInterval(counter);
  answerDiv.innerHTML = "Please try again"
  answerDiv.appendChild(goBackBtn);
  correctDiv.innerHTML = "";

}