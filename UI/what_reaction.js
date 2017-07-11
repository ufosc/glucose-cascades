// get question
// get title text from question
// get image from question
// get choices from question
// get correct choice from question

var correctChoice = 1;
var data = "";

function loadImage(image) {
    document.getElementById("image").src = image;
}

function loadChoices() {
    document.getElementById("choice0").innerHTML;
}

function loadTitleText(text) {
    document.getElementById("titleText").innerHTML = text;
}

function choiceIsSelected(choice) {
    if (choice == correctChoice) {
        correctChoiceIsSelected();
    }
    else {
        incorrectChoiceIsSelected();
    }
}

function nextQuestion() {

    parseQuestion();
    loadImage();
    loadChoices();
}
function getData() {
    data = new Promise(function(resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4) {
                // The request is done; did it work?
                if (xhr.status == 200) {
                    // Yes, use `xhr.responseText` to resolve the promise
                    var text = xhr.responseText.split("\n");
                    resolve(text);
                } else {
                    // No, reject the promise
                    reject(xhr);
                }
             }
        };
        xhr.open("GET", "/questions.txt");
        xhr.send();
    });
}

function parseQuestion() {
    data.then(function(text){
        var questionNumber = Math.floor ( (Math.random() * (text.length / 8) ) ) ;
        console.log(questionNumber);
        document.getElementById("choice0").innerHTML = text[3];
    });
}

function correctChoiceIsSelected() {
    document.getElementById("result-div").classList.remove('alert-danger');
    document.getElementById("result-div").classList.add('alert');
    document.getElementById("result-div").classList.add('alert-success');
    console.log("Correct!");
    document.getElementById("result").innerHTML = "Correct!";
    if(document.getElementById("next-question")===null){
        var button = document.createElement("button");
        button.innerHTML = "Next Question";
        button.setAttribute("class", "btn btn-large btn-default next-question");
        button.setAttribute("onclick", "nextQuestion()");
        button.setAttribute("id", "next-question");
        document.getElementById("result-div").appendChild(button);
    }
}

function incorrectChoiceIsSelected() {
    document.getElementById("result-div").classList.remove('alert-success');
    document.getElementById("result-div").classList.add('alert');
    document.getElementById("result-div").classList.add('alert-danger');
    console.log("Incorrect! Try again!");
    document.getElementById("result").innerHTML = "Incorrect! Try again!";
    if(document.getElementById("next-question")!==null){
        document.getElementById("result-div").removeChild(document.getElementById("next-question"));
    }
}
