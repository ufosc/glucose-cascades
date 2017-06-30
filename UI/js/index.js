function deleteModeSelect(mode) {
    document.getElementById("page").removeChild(document.getElementById("mode-select"));
    return;
}

function createButton(){
    var button = document.createElement("button");
    document.getElementById("page").appendChild(button);
}
