// get question
// get title text from question
// get image from question
// get choices from question
// get correct choice from question
/*global document: false */

var data = "";
var answer = "";

function loadImage(image) {
    "use strict";
    document.getElementById("product").src = image;
}

function loadChoices() {
    "use strict";
    document.getElementById("choice0").innerHTML;
}

function loadTitleText(text) {
    "use strict";
    document.getElementById("titleText").innerHTML = text;
}

function choiceIsSelected(choice) {
    "use strict";
    answer.then(function (data) {
        var stringAnswer = document.getElementById("choice" + choice).getAttribute("choice");
        if (stringAnswer === data) {
            correctChoiceIsSelected();
        } else {
            incorrectChoiceIsSelected();
        }
    });
}

function getData() {
    "use strict";
    //fetch the list of questions from the web server
    data = new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                // The request is done; did it work?
                if (xhr.status === 200) {
                    // Yes, use `xhr.responseText` to resolve the promise
                    //Split the text by new lines and resolve the array of strings
                    var text = xhr.responseText.split("\r\n");
                    resolve(text);
                } else {
                    // No, reject the promise
                    reject(xhr);
                }
            }
        };
        xhr.open("GET", "/questions3.txt");
        xhr.send();
    });
}

function nextQuestion() {
    "use strict";
    document.getElementById("result-div").classList.add('hidden');
    data.then(function (data) {
        //parse the next question
        var questionNumber = Math.floor( (Math.random() * (data.length / 8) ) );
        var type = data[( questionNumber * 8 ) + 1];
        var title = data[( questionNumber * 8 ) + 2];
        var choices = [data[( questionNumber * 8 ) + 3], data[( questionNumber * 8 ) + 4],
                        data[( questionNumber * 8 ) + 5], data[( questionNumber * 8 ) + 6] ];
        //save the correct answer choice
        var correctChoice = choices[0];
        //shuffle the array of choices using a Fisher-Yates shuffle
        for(var i = choices.length-1; i>=1; i--){
            var j = Math.floor(Math.random() * (i+1));
            var temp = choices[i];
            choices[i] = choices[j];
            choices[j] = temp;
        }
        //update the answer choices
        for(var i = 0; i <choices.length; i++){
            //store the choice string so we can easily retrieve it later
            document.getElementById("choice" + i).setAttribute("choice", choices[i]);
            //load images in the buttons
            if (type === "test"){
                document.getElementById("choice" + i).innerHTML = '<img class="choice-group" src="images/' + choices[i] + '" />';
            //load text in the buttons
            } else {
                document.getElementById("choice" + i).innerHTML = choices[i];
            }
        }
        //load the new image
        loadImage("images/" + title);
        //hide the reactant and reaction arrow if they are not needed
        if (type === "Name_the_molecule"){
            document.getElementById("reactant").classList.add('hidden');
            document.getElementById("reaction_arrow").classList.add('hidden');
        //otherwise, display them
        } else {
            document.getElementById("reactant").classList.remove('hidden');
            document.getElementById("reaction_arrow").classList.remove('hidden');
        }
        //resolve the correct answer choice into a new promise
        answer = Promise.resolve(correctChoice);
    });
}

function correctChoiceIsSelected() {
    document.getElementById("result-div").classList.remove('hidden');
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
    document.getElementById("result-div").classList.remove('hidden');
    document.getElementById("result-div").classList.remove('alert-success');
    document.getElementById("result-div").classList.add('alert');
    document.getElementById("result-div").classList.add('alert-danger');
    console.log("Incorrect! Try again!");
    document.getElementById("result").innerHTML = "Incorrect! Try again!";
    if(document.getElementById("next-question")!==null){
        document.getElementById("result-div").removeChild(document.getElementById("next-question"));
    }
}
