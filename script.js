let you;
let yourScore = 0;
let opponent;
let opponentScore = 0;

let choices = ["rock", "paper", "scissors"];

window.onload = function () {
    for(let i = 0; i < 3; i++) {
        //img id = "rock"> src = "rock.png">
        let choice = document.createElement("img");
        choice.id = choices[i];
        choice.src = choices[i] + ".png";
        document.getElementById("choices").append(choice);
    }
}