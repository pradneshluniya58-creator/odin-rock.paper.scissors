function getComputerChoice(){
    return Math.floor(Math.random() * 3) + 1;
}

function getHumanChoice(){
    let humanChoice = prompt("enter rock , paper or scissors");
    humanChoice = humanChoice.toLowerCase();
    switch(humanChoice){
        case "rock":
            return 1;
        case "paper":
            return 2;
        case "scissors":
            return 3;
    }
}