var button = document.createElement("button");
button.innerHTML = "click to start test";

var Qlist = document.getElementById("questions");
Qlist.appendChild(button);

button.addEventListener("click", function(event) {
    alert("yes");
});