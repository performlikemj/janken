/*  computerPlay */
/*  have an array of options for computer: rock, paper, and scissors */
function computerPlay() {
    const options = ["rock", "paper", "scissors"];
    const selection = options[Math.floor(Math.random() * options.length + 1)];
    return selection;
}
/*  computer picks one at random  and returns choice */