var testq = document.getElementById("questions");
var button = document.getElementById("#press");
var qlist = document.getElementsByClassName("display");
var qanswers = document.getElementsByClassName("answers");
var qcheck = document.getElementsByClassName("check");
var tresults = document.getElementById("results");
var tscore = document.getElementsByClassName("score");
var hslist = document.getElementsByClassName("hs-list");

const questions = [
    { 
        'question': "What is a string used for in JavaScript?",
        'answers': ["Calling a number.", "Holding data that can be represented in text form.", "Creating a loop"],
        'right-index': 1     
        },
    {
        'question': "commonly used data types DO NOT include?",
        'answers': ["Numbers", "Booleans", "Strings", "Alerts"],
        'right-index': 3
         },   
         
    {
        'question': "What does the triple equal sign '===' mean in JavaScript?",
        'answers': ["equal to", "not equal to", "equal value/equal value type"],
        'right-index': 2
        },

    {
        'question': "What are for 'For Loops' used for in JavaScript?",
        'answers': ["To execute a block of code a number of times", "To compare values", "To make a list", "To debug code"],
        'right-index': 0
        },

    {
        'question': "Did you have fun?",
        'answers' : ["Yes!", "Yup!", "Si"],
        'right-index': [0, 1, 2,]
        }, 
]





function start() {
    button.addEventListener('click', function (event){
        event.preventDefault()
        displayquestions()
    })


}


















