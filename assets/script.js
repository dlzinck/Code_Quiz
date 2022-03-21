//Global
let startQuiz = document.getElementById("#startBtn");
let quizPannel = document.getElementById(".questions");
let questions = document.getElementById("#questions");
let choiceA = document.getElementById("#A");
let choiceB = document.getElementById("#B");
let choiceC = document.getElementById("#C");
let choiceD = document.getElementById("#D");
let timer = document.getElementById("#timer");
let scores = document.getElementById("#scores");
let scoreTracker = document.getElementById("#scoreTracker");

//Questions for quiz
let quizQuestions = [
    {
        question: "If there is a mistkae, problem, or bug in the computer program, there is a what?",
        choiceA: "Correct!",
        choiceB: "Wrong!",
        choiceC: "Wrong!",
        choiceD: "Wrong!",
    },
    {
        question: "Which one of these lines are of an array?",
        choiceA: "Wrong!",
        choiceB: "Wrong!", 
        choiceC: "Correct!",
        choiceD: "Wrong!",
    },
    {
        question: "Who was the console.log() function designed to help?",
        choiceA: "Correct!",
        choiceB: "Wrong!",
        choiceC: "Wrong!",
        choiceD: "Wrong!",
    },
    {
        question: "What can you make as programmer?",
        choiceA: "Wrong!",
        choiceB: "Wrong!",
        choiceC: "Wrong!",
        choiceD: "Correct!",
    },
    {
        quesstion: "What does HTML stand for?",
        choiceA: "Wrong!",
        choiceB: "Wrong!",
        choiceC: "Correct!",
        choiceD: "Wrong!",
    },
];

//Variables for timer
let previousQuestion = questions.length -1;
let time = 0;
let questionTime = 10
let score = 0


















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
