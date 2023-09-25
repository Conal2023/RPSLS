function play(playerChoice) {
    const choices = ['Rock', 'Paper', 'Scissors', 'Lizard', 'Spock'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    let resultMessage = '';

    if (playerChoice === computerChoice) {
        resultMessage = `It's a tie!. Computer chose ${computerChoice} too! Go again!!`
    }
    else if (
        (playerChoice === 'Rock' && (computerChoice === 'Scissors' || computerChoice  === 'Lizard')) ||
        (playerChoice === 'Paper' && (computerChoice === 'Rock' || computerChoice === 'Spock')) ||
        (playerChoice === 'Scissors' && (computerChoice === 'Paper' || computerChoice === 'Lizard')) ||
        (playerChoice === 'Lizard' && (computerChoice === 'Spock' || computerChoice === 'Paper')) ||
        (playerChoice === 'Spock' && (computerChoice === 'Scissors' || computerChoice === 'Rock'))
    )
    {
        resultMessage = `You win! Congratulations. Computer chose ${computerChoice}.`;
    }
    else{
        resultMessage = `You Lose! Try Again. Computer chose ${computerChoice}.`;
    }
    document.getElementById('result').innerText = resultMessage
}