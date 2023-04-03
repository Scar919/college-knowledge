var testq = document.getElementById("questions");
var button = document.getElementById("#press");
var qlist = document.getElementsByClassName("display");
var qanswers = document.getElementsByClassName("answers");
var qcheck = document.getElementsByClassName("check");
var tresults = document.getElementById("results");
var tscore = document.getElementsByClassName("score");
var hslist = document.getElementsByClassName("hs-list");

const questions = [
    { question:
    }
]





function start() {
    button.addEventListener('click', function (event){
        event.preventDefault()
        displayquestions()
    })


}


















