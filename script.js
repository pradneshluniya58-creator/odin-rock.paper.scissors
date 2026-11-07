const input = document.querySelector('input');
const btn = document.querySelector('button');
const div = document.querySelector('div');
const list = document.querySelector('ul');

let rounds = 0;
let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    return Math.floor(Math.random() * 3) + 1;
}

function getHumanChoice(humanChoice){
    let temp = humanChoice.toLowerCase();
    switch(temp){
        case "rock":
            return 1;
        case "paper":
            return 2;
        case "scissors":
            return 3;
    }
}

function playRound(humanChoice , computerChoice , p){

    if(humanChoice === 1 && computerChoice === 2){
        p.textContent = "You lose , PAPER beats ROCK";
        
        computerScore++;
        return false;
    }
    else if(humanChoice === 2 && computerChoice === 3){
        p.textContent = "You lose , SCISSOR beats PAPER";
        computerScore++;
        return false;
    }
    else if(humanChoice === 3 && computerChoice === 1){
        p.textContent = "You lose , ROCK beats SCISSOR";
        computerScore++;
        return false;
    }
    else if(computerChoice === 1 && humanChoice === 2){
        p.textContent = "You win , PAPER beats ROCK";
        humanScore++;
        return true;
    }
    else if(computerChoice === 2 && humanChoice === 3){
        p.textContent = "You win , SCISSOR beats PAPER";
        humanScore++;
    }
    else if(computerChoice === 3 && humanChoice === 1){
        p.textContent = "You win , ROCK beats SCISSOR";
        humanScore++;
        return true;
    }
    else{
        p.textContent = "Tie!!!";
        return undefined;
    }
}

const  p = document.createElement('p');
const li1 = document.createElement('li');
const li2 = document.createElement('li');  

div.appendChild(p);

btn.addEventListener('click' , e => {
    e.preventDefault();

    let computerChoice = getComputerChoice();
    let humanChoice = input.value;
    let temp = getHumanChoice(humanChoice);

    input.value = '';

    
    playRound(temp , computerChoice , p);
    
    rounds++; 

    if (rounds === 1) {
        li1.remove();
        li2.remove();
    }

    if(rounds >= 5){
        if(computerScore > humanScore){
            p.textContent = 'You Lose';

            li1.textContent = `Computer Score : ${computerScore}`;
            li2.textContent = `Human Score : ${humanScore}`;

            list.appendChild(li1);
            list.appendChild(li2); 
        }
        else if(humanScore > computerScore){
            p.textContent = 'You Win';

            li1.textContent = `Human Score : ${humanScore}`;
            li2.textContent = `Computer Score : ${computerScore}`;

            list.appendChild(li1);
            list.appendChild(li2);
        }
        else{
            p.textContent = 'TIE';

            li1.textContent = `Computer Score : ${computerScore}`;
            li2.textContent = `Human Score : ${humanScore}`;

            list.appendChild(li1);
            list.appendChild(li2);
        }
        rounds = 0;
        humanScore = 0;
        computerScore = 0;
    }

    input.focus();
});