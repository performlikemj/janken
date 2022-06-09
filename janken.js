/*  computerPlay */
function computerPlay() {
    /*  have an array of options for computer: rock, paper, and scissors */
    const options = ["rock", "paper", "scissors"];
    /*  computer picks one at random  and returns choice */
    const selection = options[Math.floor(Math.random() * options.length)];
    return selection;
}
