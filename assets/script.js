//Global
let startBtn = document.getElementById("startBtn");
startBtn.addEventListener('click', startQuiz)
let questionContainer = document.getElementById("questions-container");

let questions = document.getElementById("questions");
let answers = document.getElementById("answers");

let timer = document.getElementById("timer");
let time = 0;
let questionTime = 10;
let score = 0;
let timeLeft = 100;
let randomQuestion = 0;
let currentQuestion = 0;

//Questions for quiz
let quizQuestions = [
    {
        question: "If there is a mistkae, problem, or bug in the computer program, there is a what?",
        choices: [
            {text: 'Bug', correct: true },
            {text: 'Loop', correct: false},
            {text: 'Error', correct: false},
            {text: 'Issue', correct: false},

        ]
    },
    {
        question: "Which one of these lines are of an array?",
        choices: [
            {text: '123456789', correct: false},
            {text: '{The dogs name is Scarlett!}', correct: false},
            {text: '[Dave, Sandy, Johny, Bill]', correct: true },
            {text: '"123456789"', correct: false},

        ]
    },
    {
        question: "Who was the console.log() function designed to help?",
        answers: [
            {text: 'Chefs', correct: false},
            {text: 'Policemen', correct: false},
            {text: 'Firefighters', correct: false},
            {text: 'Programmers', correct: true },
        ]
    },
    {
        question: "What can you make as programmer?",
        answers: [
            {text: 'Games', correct: false},
            {text: 'Apps', correct: false},
            {text: 'Websites', correct: false},
            {text: 'All the above', correct: true },
        ]
    },
    {
        quesstion: "What does HTML stand for?",
        answers: [
            {text: 'Hyper Text Markup Language', correct: true },
            {text: 'Hyperlinks Text Marking Language', correct: false},
            {text: 'Hyperlinks Text Markup Language', correct: false},
            {text: 'Hyper Tag Markup Language', correct: false},
        ]
    }
];

function startQuiz() {
    randomQuestion = quizQuestions.sort(() => Math,random() - .5)
    currentQuestion = 0
    revealNextQuestions();
}

function revealNextQuestions() {
    resetPannel();
    showQuestion(randomQuestion[currentQuestion])
}

function showQuestion(question) {
    questions.innerText = question.question
    quizQuestions.answers.forEach(answer => {
        let choices = document.getElementById("choices")
        choices.innerText = answer.text
        choices.classList.add('button')
        if (answer.correct) {
            choices.dataset.correct = answer.correct
        }
        choices.addEventListener('click', selectChoice)
        answers.appendChild(button)
    })
}

function selectChoice(e) {

}

function resetPannel() {
    while (choices.removeChild(choices.firstChild)) {
        answers.removeChild(answers.firstChild)
    }
}







// function setTimer () {
//     let timerInterval = setInterval(function() {
//         secondsLeft--;
//         timer.textContent = secondsLeft + "Seconds Left!";
//         if (secondsLeft === 1) {
//             timer.textContent = secondsLeft + "Second Left!";
//         }
//         if (secondsLeft === 0) {
//             clearInterval(timerInterval);
//             revealScores();
//         }
//     }, 1000);
// }


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
