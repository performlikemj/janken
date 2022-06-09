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
    