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
    let choice = prompt("Pick rock, paper, or scissors. Or quit to give up");
    choice = choice.toLowerCase();
/*  if selection is not equal to rock, paper, or scissors, or quit, ask user
    to choose again */
    if (choice === "rock" || choice === "paper" || choice === "scissors") {
        return choice;
    } else if (choice === "quit") {
        return;
    } else {
        playerSelection();
    }
}

const userTurn = playerSelection();
const computerTurn = computerPlay();
/*  single game */
/*  takes two parameters, the playerSelection and computerSelection */
function singleRound(userTurn, computerTurn) {
    /*  output outcome of single game */
    switch (userTurn === "rock") {
        case (computerTurn === "rock"):
            console.log("Tie");
            return "Tie!";
        case (computerTurn === "paper"):
            console.log("You lose!");
            return "You lose! Paper beats rock.";
        case (computerTurn === "scissors"):
            console.log("You win!");
            return "You win! Rock beats scissors";
    }

    switch (userTurn === "paper") {
        case (computerTurn === "paper"):
            console.log("Tie");
           return "Tie!";
        case (computerTurn === "scissors"):
            console.log("You lose!");
            return "You lose! Scissors beats rock.";
        case (computerTurn === "rock"):
            console.log("You win!");
            return "You win! paper beats rock";
    }

    switch (userTurn === "scissors") {
        case (computerTurn === "scissors"):
            console.log("Tie");
           return "Tie!";
        case (computerTurn === "rock"):
            console.log("You lose!");
            return "You lose! rock beats rock.";
        case (computerTurn === "paper"):
            console.log("You win!");
            return "You win! Scissors beats rock";
    }
    
}
