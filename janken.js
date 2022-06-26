/*  computerPlay */
function computerPlay() {
    /*  have an array of options for computer: rock, paper, and scissors */
    const options = ["rock", "paper", "scissors"];
    /*  computer picks one at random  and returns choice */
    const selection = options[Math.floor(Math.random() * options.length)];
    return selection;
}

/*  playerSelection */
/*  create a function that asks the player what they want to play */
function playerSelection() {
    let choice = prompt("Pick rock, paper, or scissors.");
    choice = choice.toLowerCase();
/*  if selection is not equal to rock, paper, or scissors, or quit, ask user
    to choose again */
    if (choice === "rock" || choice === "paper" || choice === "scissors") {
        return choice;
}
}


/*  single game */
/*  takes two parameters, the playerSelection and computerSelection */
function singleRound(userTurn, computerTurn) {
    /*  output outcome of single game */
    if (userTurn === "rock") {
        if (computerTurn === "rock") {
            return "rock vs rock is a Tie"
        } else if (computerTurn === "paper") {
            return "You lose! rock loses to paper"
        } else if (computerTurn === "scissors"){
            return "You win! rock crushes scissors"
        }
    } else if (userTurn === "paper") {
        if (computerTurn === "paper") {
            return "paper vs paper is a Tie"
        } else if (computerTurn === "scissors") {
            return "You lose! paper gets cut by scissors"
        } else if (computerTurn === "rock"){
            return "You win! paper covers up rock"
        }
    } else if (userTurn === "scissors") {
        if (computerTurn === "scissors") {
            return "scissors vs scissors is a Tie"
        } else if (computerTurn === "rock") {
            return "You lose! rock breaks scissors"
        } else if (computerTurn === "paper") {
            return "You win! scissors cuts paper"
        }       
}
}


/*  create function to play the game 5 times 
function game() { */
    /*  user a for loop to go through the game 5 times 
    for (let i=0; i<5; i++) {  */
        /*  in the for loop, run the function to ask player what choice is 
        let userTurn = playerSelection();
        let computerTurn = computerPlay();
        let result = singleRound(userTurn, computerTurn);
        console.log(result);
    }
} */


function buttonSelect(){
    let computerTurn = computerPlay();
    if (this.className === 'rock') {
         let result = singleRound('rock', computerTurn);
         console.log(result);
    } else if (this.className === 'paper') {
        let result = singleRound('paper', computerTurn);
        console.log(result);
    } else if (this.className === 'scissors') {
        let result = singleRound('scissors', computerTurn);
        console.log(result);
    }
} 


const butts = document.querySelectorAll('button');
butts.forEach( butt => butt.addEventListener('click', buttonSelect));



/* game(); */
