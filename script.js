// Render new question and answer section:
const timer = document.querySelector("#timer");
const questions = document.querySelector("#questions");
const answerBtn = document.querySelector("#answerBtn");
const startBtn = document.querySelector("#startBtn");
const answerA = document.querySelector("#answerA");
const answerB = document.querySelector("#answerB");
const answerC = document.querySelector("#answerC");
const answerD = document.querySelector("#answerD");
const finalScore = document.querySelector(".score");
const choices = document.querySelectorAll(".choice");


// reveal question and answer buttons when clicking start

startBtn.addEventListener("click", reveal)
startBtn.addEventListener("click", beginCountdown)

function reveal() {
startBtn.classList.add("hide");
questions.classList.remove("hide");
answerBtn.classList.remove("hide");
question1()
}

function hide() {
  questions.classList.add("hide");
  answerBtn.classList.add("hide");
}


function question1() {

for (i = 0; i < newQuestion.length; i++ ) {
  questions.textContent =  newQuestion[0].question;

  answerA.textContent = newQuestion[0].answer[0].text;
  answerB.textContent = newQuestion[0].answer[1].text;
  answerC.textContent = newQuestion[0].answer[2].text;
  answerD.textContent = newQuestion[0].answer[3].text;


}
  answerA.addEventListener("click", question2);
  answerB.addEventListener("click", question2);
  answerC.addEventListener("click", question2);
  answerD.addEventListener("click", question2);

}


function question2() {

for (i = 0; i < newQuestion.length; i++ ) {
  questions.textContent =  newQuestion[1].question;

  answerA.textContent = newQuestion[1].answer[0].text;
  answerB.textContent = newQuestion[1].answer[1].text;
  answerC.textContent = newQuestion[1].answer[2].text;
  answerD.textContent = newQuestion[1].answer[3].text;

}
answerA.addEventListener("click", question3);
answerB.addEventListener("click", question3);
answerC.addEventListener("click", question3);
answerD.addEventListener("click", question3);

}

function question3() {

for (i = 0; i < newQuestion.length; i++ ) {
  questions.textContent =  newQuestion[2].question;

  answerA.textContent = newQuestion[2].answer[0].text;
  answerB.textContent = newQuestion[2].answer[1].text;
  answerC.textContent = newQuestion[2].answer[2].text;
  answerD.textContent = newQuestion[2].answer[3].text;

}
answerA.addEventListener("click", renderScores);
answerB.addEventListener("click", renderScores);
answerC.addEventListener("click", renderScores);
answerD.addEventListener("click", renderScores);
answerA.addEventListener("click", hide);
answerB.addEventListener("click", hide);
answerC.addEventListener("click", hide);
answerD.addEventListener("click", hide);
}


// create array of questions with answers

let newQuestion = [
  {
    question: "What does DOM stand for?",
    answer: [
     {text: "Document Object Model", correct: true},
     {text: "Document Obvious Modality", correct: false},
     {text: "Dont Offend the Mind", correct: false},
     {text: "Delta Omni Mic", correct: false},
    ]
  },
  {
    question: "How do you prevent the browser from refreshing automatically?",
    answer: [
     {text: "Prevent Default", correct: true},
     {text: "Prevent DOM", correct: false},
     {text: "Stop Browser", correct: false},
     {text: "Hold Query", correct: false},
    ]
  },
  {
    question: "How do you add an event listener for when the mouse is clicked?",
    answer: [
     {text: ".addeventlistener('click')", correct: true},
     {text: ".Listenforclick", correct: false},
     {text: ".clickbait", correct: false},
     {text: ".clickityclickclic", correct: false},
    ]
  },
];

// begin countdown timer here:

function startTimer(duration, display) {
  var timer = duration, minutes, seconds;
  setInterval(function () {
      minutes = parseInt(timer / 60, 10)
      seconds = parseInt(timer % 60, 10);

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      display.textContent = minutes + ":" + seconds;

      if (--timer < 0) {
          timer = duration;
      }
  }, 1000);
}

function beginCountdown() {
  var fiveMinutes = 60 * 5,
      display = document.querySelector('#timer');
  startTimer(fiveMinutes, display);
};


// create conditional to check if answer correct is true if so then count towards score

let quizScore = 0;


// Score Input Section:
var scoreInput = document.querySelector("#score-text");
var scoreForm = document.querySelector("#score-form");
var scoreList = document.querySelector("#score-list");


var scores = [];




function renderScores() {
  // Clear scoreList element
  scoreList.innerHTML = "";
  finalScore.classList.remove("hide");

  // Render a new li for each score
  for (var i = 0; i < scores.length; i++) {
    var score = scores[i];

    var li = document.createElement("li");
    li.textContent = score;
    scoreList.appendChild(li);
  }

}

// When form is submitted...
scoreForm.addEventListener("submit", function(event) {
  event.preventDefault();

  var scoreText = scoreInput.value.trim();

  // Return from function early if submitted scoreText is blank
  if (scoreText === "") {
    return;
  }

  // Add new scoreText to scores array, clear the input
  scores.push(scoreText);
  scoreInput.value = "";


  // Re-render the list
  renderScores();
});