// get question
// get title text from question
// get image from question
// get choices from question
// get correct choice from question

var correctChoice = 1;

function loadImage(image) {
    document.getElementById("image").src = image;
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

function correctChoiceIsSelected() {
    console.log("Correct!");
    document.getElementById("result").innerHTML = "Correct!";
}

function incorrectChoiceIsSelected() {
    console.log("Incorrect! Try again!");
    document.getElementById("result").innerHTML = "Incorrect! Try again!";
}