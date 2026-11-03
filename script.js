function getComputerChoice(){
    return Math.floor(Math.random() * 3) + 1;
}

function getHumanChoice(){
    let humanChoice = prompt("enter rock , paper or scissor");
    humanChoice = humanChoice.toLowerCase();
    switch(humanChoice){
        case "rock":
            return 1;
        case "paper":
            return 2;
        case "scissor":
            return 3;
    }
}

let humanScore = 0;
let computerScore = 0;

function playRound(){
    let computerChoice = getComputerChoice();
    let humanChoice = getHumanChoice();

    if(humanChoice === 1 && computerChoice === 2){
        console.log("You lose , PAPER beats ROCK");
        computerScore++;
    }
    else if(humanChoice === 2 && computerChoice === 3){
        console.log("You lose , SCISSOR beats PAPER");
        computerScore++;
    }
    else if(humanChoice === 3 && computerChoice === 1){
        console.log("You lose , ROCK beats SCISSOR");
        computerScore++
    }
    else if(computerChoice === 1 && humanChoice === 2){
        console.log("You win , PAPER beats ROCK");
        humanScore++;
    }
    else if(computerChoice === 2 && humanChoice === 3){
        console.log("You win , SCISSOR beats PAPER");
        humanScore++;
    }
    else if(computerChoice === 3 && humanChoice === 1){
        console.log("You win , ROCK beats SCISSOR");
        humanScore++;
    }
    else{
        console.log("Tie!!!");
    }
}

function playGame(){
    for(let i = 0 ; i<5 ; ++i){
        playRound();
    }
    console.log("Final Score : ");
    console.log(`Computer Score = ${computerScore}`);
    console.log(`Human Score = ${humanScore}`);
    if(humanScore > computerScore){
        console.log("You win 🔥")
    }
    else{
        console.log("You Lose 🥲")
    }
    humanScore,computerScore = 0;

}