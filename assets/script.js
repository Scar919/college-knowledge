var startBtn = document.getElementById("#start");
var questionEl = document.getElementById("#questpg");
var displayEl = document.getElementsByClassName(".display");
var timeEl = document.getElementById("#time")
var resultEl = document.getElementById("#results");
var scoreEl = document.getElementsByClassName(".score");
var hslist = document.getElementsByClassName(".hs-list");

var questions = [
    { 
        'question': "What is a string used for in JavaScript?",
        'answers': ["Calling a number.", "Holding data that can be represented in text form.", "Creating a loop"],
        'rightIndex': 1     
        },
    {
        'question': "commonly used data types DO NOT include?",
        'answers': ["Numbers", "Booleans", "Strings", "Alerts"],
        'rightIndex': 3
         },   
         
    {
        'question': "What does the triple equal sign '===' mean in JavaScript?",
        'answers': ["equal to", "not equal to", "equal value/equal value type"],
        'rightIndex': 2
        },

    {
        'question': "What are for 'For Loops' used for in JavaScript?",
        'answers': ["To execute a block of code a number of times", "To compare values", "To make a list", "To debug code"],
        'rightIndex': 0
        },

    {
        'question': "Did you have fun?",
        'answers' : ["Yes!", "Yup!", "Si"],
        'rightIndex': [0, 1, 2,]
        }, 
]

let currentqindex = 0;
const time = questions.length * 15;
let timerId;



function testStart() {
   const timeInterval =1000
   const timeId = setInterval(countdown, timeInterval);
   
   //shows questions and hides start screen
   const startScreen = document.getElementById("start-screen");
   startScreen.setAttribute("class", "hide");
   questionEl.removeAttribute("class");

   //begin test
   timeEl.textContent = time;
   retrieveQ ();
}


function retrieveQ(){
    var currentq = questions[currentqindex];
    var prompt = document.getElementById("questions-container")
    prompt.textContent = currentq.prompt;
    dislayEl.innerHTML = "";
    currentq.answers.foreach(function(display, i) {
        var displayBtn = document.createElement("button");
        displayBtn.setAttribute("value", display);
        displayBtn.textContent = i + 1 + ". " + display;
        displayBtn.onclick = questionsClick;
        displayEl.appendChild(displayBtn);
    });
}

function questionsClick() {
    if (this.value !== questions[currentqindex].answers[questions[currentqindex].rightIndex]) {
        time -= 10;
        if (time < 0) {
            time = 0;
        }
        timeEl.textContent = time;
        scoreEl[0].textContent ='Incorrect! the correct answer was ${questions[currentqindex].answers}.';
         scoreEl.style.color = "red";
    }else{
        scoreEl[0].textContent = 'Correct!';
        scoreEl.style.color = 'green';
    }
        scoreEl.setAttribute("class", "score");
        setTimeout(function() {
            scoreEl.setAttribute("class", "score hide");
        },2000);
        currentqindex++;
        if (currentqindex === questions.length) {
            end();
        }else{
            retrieveq();
        }
    }

    var finalScoreEl = document.getElementById("final-score")
    function end() {
        clearInterval(timeId);
        var endscreenEl = document.getElementById("end");
        endscreenEl.removeAttribute("class");
        finalScoreEl.textContent = time;
        questionEl.setAttribute("class", "hide");
    }

    function countdown() {
time--;
timeEl.textContent = time;
if (time <=0) {
    end(); 
    }
}

startBtn.onclick = testStart;
   













