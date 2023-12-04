function getComputerChoice() {
    let options = ["rock", "paper", "scissors"];
    return options[Math.floor(Math.random() * options.length)]
}


function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "Tie";
    } else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            return "Win";
        }

    } else if (playerSelection == "scissors") {
        if (computerSelection == "paper") {
            return "Win";

        }
    } else {
        if (computerSelection == "scissors") {
            return "Win";
        }
    }

    return "Lose";


}

function game() {
    let winUser = 0;
    let winComputer = 0;
    
    while (winComputer < 3 && winUser < 3){
    console.log("Score: User " + winUser + " x " + winComputer + " Computer");

    let user = prompt ("Rock, paper or scissors? ");
    let computer = getComputerChoice();
    let result = playRound(user.toLowerCase(), computer);

    user = user.charAt(0).toUpperCase() + user.slice(1);
    if (result == "Win"){
        console.log("You Win! " + user +" beats " + computer + ".");
        winUser++;
    } else if (result == "Lose") {
        console.log("You Lose! " + user + " does not beats " + computer + ".");
        winComputer++;
    } else {
        console.log("It's a TIE!");
    }

}
    console.log("Final Score: User " + winUser + " x " + winComputer + " Computer");

}