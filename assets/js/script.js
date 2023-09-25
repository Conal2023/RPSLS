function play(playerChoice) {
    const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    let resultMessage = '';

    if (playerChoice === computerChoice) {
        resultMessage = `It's a tie!. Computer chose ${computerChoice} too! Go again!!`
    }
    else if (
        (playerChoice === '' && (computerChoice === '' || computerChoice  === '')) ||
        (playerChoice === '' && (computerChoice === '' || computerChoice === '')) ||
        (playerChoice === '' && (computerChoice === '' || computerChoice === '')) ||
        (playerChoice === '' && (computerChoice === '' || computerChoice === '')) ||
        (playerChoice === '' && (computerChoice === '' || computerChoice === ''))
    )
}