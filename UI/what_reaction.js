var correctChoice = 1;

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