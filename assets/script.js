//Global
let startQuiz = document.getElementById("#startBtn");
startBtn.addEventListener('click', startQuiz)
let questionContainer = document.getElementById("questions-container");
let questions = document.getElementById("#questions");
let choiceA = document.getElementById("#A");
let choiceB = document.getElementById("#B");
let choiceC = document.getElementById("#C");
let choiceD = document.getElementById("#D");
let timer = document.getElementById("#timer");
let scores = document.getElementById("#scores");
let scoreTracker = document.getElementById("#scoreTracker");
let previousQuestion = questions.length -1;
let time = 0;
let questionTime = 10;
let score = 0;
let timeLeft = 100;
let randomQuestion;
let currentQuestion;

//Questions for quiz
let quizQuestions = [
    {
        question: "If there is a mistkae, problem, or bug in the computer program, there is a what?",
        choices: [
            {text: 'aA', correct: true },
            {text: '10', correct: false}
        ]
    },
    {
        question: "Which one of these lines are of an array?",
        choices: [
            {text: 'cC', correct: true },
            {text: '10', correct: false}
        ]
    },
    {
        question: "Who was the console.log() function designed to help?",
        answers: [
            {text: 'aA', correct: true },
            {text: '10', correct: false}
        ]
    },
    {
        question: "What can you make as programmer?",
        answers: [
            {text: 'dD', correct: true },
            {text: '10', correct: false}
        ]
    },
    {
        quesstion: "What does HTML stand for?",
        answers: [
            {text: 'cC', correct: true },
            {text: '10', correct: false}
        ]
    }
];

function startQuiz() {

    questionContainer.classList.remove('hide');
    revealQuestions();
}

function revealQuestions() {
    let quest = questions[currentQuestion];
    questions.innerHTML = "<p>" + quest.question + "</p>";
    choiceA.innerHTML = quest.choiceA;
    choiceB.innerHTML = quest.choiceB;
    choiceC.innerHTML = quest.choiceC;
    choiceD.innerHTML = quest.choiceD;
}

startQuiz.addEventListener("click", beginQuiz);

function beginQuiz() {
    startQuiz.style.display = "none";
    revealQuestions();
    quizPannel.style.display = "block";
    revealScores();
    setTimer();
}

//Reveals the scores
function revealScores() {
    for (let questIndex = 0; questIndex <= previousQuestion; questIndex++) {
        scores.innerHTML += "<div class='progress' id='+ questIndex +'></div>";
    }
}

//Reveals timer

function setTimer () {
    let timerInterval = setInterval(function() {
        secondsLeft--;
        timer.textContent = secondsLeft + "Seconds Left!";
        if (secondsLeft === 1) {
            timer.textContent = secondsLeft + "Second Left!";
        }
        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            revealScores();
        }
    }, 1000);
}

function checkAnswer() {
    if (userInput = quizQuestions[currentQuestion].correct) {
        score++;
        answerCorrect();
    }
    else {
        answerWrong();
    }
    time = 0;
    if (currentQuestion < previousQuestion) {
        currentQuestion++;
        revealQuestions();
    }
    else {
        clearInterval(timeClock);
        revealScores();
    }
}

function answerCorrect() {}

function answerWrong() {}

function revealScores() {
    scoreTracker.style.display = "block";
}















//QUESTIONS AND ANSWERS
// question: "If there is a mistkae or error in the computer program, there is a what?",
// choiceA: "Correct!", (Bug)
// choiceB: "Wrong!", (Loop)
// choiceC: "Wrong!", (Error)
// choiceD: "Wrong!", (Issue)

// question: "Which one of these lines are of an array?",
// choiceA: "Wrong!", (123456789)
// choiceB: "Wrong!", ("123456789")
// choiceC: "Correct!", [Dave, Sandy, Johny, Bill]
// choiceD: "Wrong!", {The dogs name is Scarlett!}

// question: "Who was the console.log() function designed to help?"
// choiceA: "Correct!", (Programmers),
// choiceB: "Wrong!", (Chefs),
// choiceC: "Wrong!", (Policemen),
// choiceD: "Wrong!", (Fire Fighters),

// question: "What can you make as programmer?",
// choiceA: "Wrong!", (Games),
// choiceB: "Wrong!", (Websites),
// choiceC: "Wrong!", (Apps),
// choiceD: "Correct!", (All the Above),

// question: "What does HTML stand for?",
// choiceA: "Wrong!", (Hyper Tag Markup Language),
// choiceB: "Wrong!", (Hyperlinks Text Marking Language),
// choiceC: "Correct!", (Hyper Text Markup Language),
// choiceD: "Wrong!", (Hyperlinks Text Markup Language),
