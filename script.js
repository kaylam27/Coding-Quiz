var timeEl = document.getElementById("time");
var startEl = document.getElementById("start");
var questions = document.getElementById("info");
var scoreboardEl = document.getElementById("high-scores");
var scoresEl = document.getElementById("scores");

var secondsLeft = 60;

var myQuestions = [
    {
        question: "Commonly used datatypes DO NOT include:",
        answers: {
            a: "a. numbers",
            b: "b. strings",
            c: "c. booleans",
            d: "d. alerts"
    },
        correctAnswer: "d"
    },
    {
        question: "The condition in an if/else statement is enclosed within _______.",
        answers: {
            a: "a. parentheses",
            b: "b. square brackets",
            c: "c. curly brackets",
            d: "d. quotes"
    },
        correctAnswer: "a"
    },
    {
        question: "Arrays in Javascript can be used to store _______.",
        answers: {
            a: "a. booleans",
            b: "b. numbers and strings",
            c: "c. other arrays",
            d: "d. all of the above"
     },
        correctAnswer: "d"
    },
    {
        question: "String values must be enclosed within _______ when being assigned to variables.",
        answers: {
          a: "a. parentheses",
          b: "b. quotes",
          c: "c. commas",
          d: "d. curly brackets"
    },
        correctAnswer: "b"
    }
  ];

function setTime() {
    event.preventDefault();
    var timerInterval = setInterval(function() {
        secondsLeft--;
        if (secondsLeft > 0) {
            timeEl.textContent = secondsLeft + " seconds left!!";
        } else {
            timeEl.textContent = "TIME'S UP!!";
        }
    }, 1000);
}

for (i = 0; i < myQuestions.length; i++) {
    function quiz() {
        event.preventDefault();
        questions.textContent = myQuestions[i];
    }
}

function seeHighScores() {
    event.preventDefault()
    scoreboardEl.style.display = "block";
}

function addScores() {
    
}

startEl.addEventListener("click", setTime);
startEl.addEventListener("click", quiz);
scoreboardEl.addEventListener("click", seeHighScores);
