function play(playerChoice) {
    const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    let resultMessage = '';

    if (playerChoice === computerChoice) {
        resultMessage = `It's a tie!. Computer chose ${computerChoice} too! Go again!!`
    }
    else if (
        (playerChoice === 'rock' && (computerChoice === 'scissors' || computerChoice  === 'lizard')) ||
        (playerChoice === 'paper' && (computerChoice === 'rock' || computerChoice === 'spock')) ||
        (playerChoice === 'scissors' && (computerChoice === 'paper' || computerChoice === 'lizard')) ||
        (playerChoice === 'lizard' && (computerChoice === 'spock' || computerChoice === 'paper')) ||
        (playerChoice === 'spock' && (computerChoice === 'scissors' || computerChoice === 'rock'))
    )
    {
        resultMessage = `You win! Congratulations. Computer chose ${computerChoice}.`;
    }
    else{
        resultMessage = `You Lose! Try Again. Computer chose ${computerChoice}.`;
    }
}