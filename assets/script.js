let questionBank = [
    {   
        question: "If there is a mistkae, problem, or bug in the computer program, there is a what?",
        selection: ["Bug", "Loop", "Error", "Issue"],
        answer: "Bug"
    },
    {   
        question:"What does HTML stand for?",
        selection: ["Hyper Text Markup Language", "Hyper Text Markup Language", "Hyperlinks Text Markup Language", "Hyper Tag Markup Language"],
        answer: "Hyper Text Markup Language"
    },
    {   
        question: "Inside which HTML element do we put the JavaScript?", 
        selection: ["<script>", "<js>", "<javascript>", "<JS>"],
        answer: "<script>"
    },
    {
        question: "Which one of these lines are of an array?",
        selection: ["123456789", "{The dogs name is Scarlett!}", "[Dave, Sandy, Johny, Bill]", ' "123456789" ' ],
        answer: "[Dave, Sandy, Johny, Bill]"
    },
    {
        question: "Who was the console.log() function designed to help?",
        selection: ["Chefs", "Programmers", "Policemen", "Firefighters"],
        answer: "Programemrs"
    },
    {
        question: "How can you add a comment in a JavaScript?",
        selection: ["'This is a comment", "//This is a comment", "<!--This is a comment-->", "<!**This is a comment**>"],
        answer: "//This is a comment"
    },
    {
        question: "How do you create a function in JavaScript?",
        selection: ["function = myFunction()", "function:myFunction()", "function myFunction()", "$Function()"],
        answer: "function myFunction()"
    },
    {
        question: "What can you make as programmer?",
        selection: ["Games", "Websites", "Apps", "Games, Websites, and Apps"],
        answer: "Games, Websites, and Apps"
    },
    {
        question: "JavaScript is the same as Java?",
        selection: ["True", "False", "Maybe", "I don't know"],
        answer: "False"
    }
];

let startButton = document.querySelector("#startButton");
let highScore = document.querySelector("#highScores");
let timerDisplay = document.querySelector(".timer");
let gamePanel = document.querySelector("#gamePanel");
let question = document.querySelector("#question");
let A = document.querySelector("#A");
let B = document.querySelector("#B");
let C = document.querySelector("#C");
let D = document.querySelector("#D");
let answer = document.querySelector("#answer");
let feedback1 = document.querySelector("#feedback1");
let card = document.querySelector("#multipleChoice");
let inputForm = document.querySelector("#inputForm");
let scoreCard = document.querySelector("#scoreCard");
let scoreButton = document.querySelector("#scoreButton");
let initialsBox = document.querySelector("#initialsBox");
let submitButton = document.querySelector("#submitButton");
let backButton = document.querySelector("#backButton");
let clearButton = document.querySelector("#clearButton");
let start = document.querySelector(".start");
let timeLeft = questionBank.length * 10;
let q = 0;
let s = 0;
let score = 0;
let scoreList = [];
let timeInterval;

//Placed all event listeners here to keep organized
startButton.addEventListener("click", function () {
    timer();
    revealQuestions();
    start.classList.add("hide");
    gamePanel.classList.remove("hide");
    highScore.style.display = "none";
    scoreCard.classList.add("hide");
});

submitButton.addEventListener("click", function (event) {
    event.preventDefault();
    let usersInitials = initialsBox.value.trim();
    let newScore = {
    users: usersInitials,
    score: score,
    }
    scoreList.push(newScore);
    saveScores();
    highScoresList();
    inputForm.classList.add("hide");
    scoreCard.classList.remove("hide");
});
  
highScore.addEventListener("click", function () {
    scoreCard.classList.remove("hide");
    highScore.classList.add("hide");
    start.classList.add("hide");
    highScoresList();
});
  
//Event listener for go back button 
backButton.addEventListener("click", function () {
    location.reload();
});
  
// Event listener for clear scores button
clearButton.addEventListener("click", function () {
    scoreList = [];
    start.classList.add("hide");
    localStorage.setItem("highScore", JSON.stringify(scoreList));
    highScoresList();
    saveScores();
});
  
retrieveScores();
card.addEventListener("click", function (event) {
    event = event.target;
    compareAnswer(event.textContent.trim());
});

//Timer function for the timer of the code quiz
function timer() {
  timeInterval = setInterval(function () {
    timeLeft--;
    timerDisplay.textContent = "TIMER: " + timeLeft;

    if (timeLeft === 0 || q >= questionBank.length) {
      clearInterval(timeInterval);
      endGame();
    }
  }, 1000);
}

//Reveals questions and answers from the questionBank
function revealQuestions() {
  if (q < questionBank.length) {
    question.textContent = questionBank[q].question;
    A.textContent = questionBank[q].selection[0];
    B.textContent = questionBank[q].selection[1];
    C.textContent = questionBank[q].selection[2];
    D.textContent = questionBank[q].selection[3];
  } else {
    endGame();
  }
}

//Tells users if guess is correct or wrong
function compareAnswer(event) {
  if (q >= questionBank.length) {
    endGame();
    saveScores();
    clearInterval(timeInterval);
  } else {
    if (event === questionBank[q].answer) {
      feedback1.textContent = "Correct!";
    } else {
      timeLeft -= 10;
      feedback1.textContent = "Wrong!";
    }
    score = timeLeft;
    q++;
    revealQuestions();
  }
}

//Retrieves the scores from local storage
function retrieveScores() {
  let storedScore = JSON.parse(localStorage.getItem("highScore"));
  if (storedScore !== null) {
    scoreList = storedScore;
  }
}

//Saves the scores to local storage
function saveScores() {
  localStorage.setItem("highScores", JSON.stringify(scoreList));
}

//showing & hiding page items based on ending of the game
function endGame() {
  highScore.innerHTML = score;
  scoreButton.style.display = "inline-block";
  gamePanel.classList.add("hide");
  inputForm.classList.remove("hide");
  timerDisplay.classList.add("hide");
  highScore.classList.add("hide");
  highScoresList();
}

// Keeping track of top 10 leaders from local storage w/ loop
function highScoresList() {
  removeFromHighScoresList();
  addToHighScoresList();
  scoreList.sort((a, b) => {
    return b.score - a.score;
  });

  //Only shows the top four scores
  topTen = scoreList.slice(0, 10);

  for (let i = 0; i < topTen.length; i++) {
    let users = topTen[i].users;
    let score = topTen[i].score;

    let newDiv = document.createElement("div");
    highScore.appendChild(newDiv);

    let newLabel = document.createElement("label");
    newLabel.textContent = users + " - " + score;
    newDiv.appendChild(newLabel);
  }
}

//Adding userss initials to the high scores 
function addToHighScoresList() {
  let highScoresDiv = document.createElement("div");
  highScoresDiv.setAttribute("id", "usersInitials");
  document.getElementById("highScores").appendChild(highScoresDiv);
}

//Removing userss initials from the high scores
function removeFromHighScoresList() {
  let removeScores = document.getElementById("usersInitials");
  if (removeScores !== null) {
    removeScores.remove();
  } else {
  }
}