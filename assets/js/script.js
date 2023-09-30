const playerScoreRef = document.getElementById("pscore")
const computerScoreRef = document.getElementById("cscore")

document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function () {
            const playerChoice = this.getAttribute("data-playerChoice")
            const resetBtn = document.getElementById("score-reset")
            if(!playerChoice && resetBtn){
                playerScoreRef.innerHTML = 0;
                computerScoreRef.innerHTML = 0;
            } else {
            play(playerChoice)
            }
        })
    }
})

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
        playerScoreRef.innerHTML = parseInt(playerScoreRef.innerHTML) + 1;
    }
    else{
        resultMessage = `You Lose! Try Again. Computer chose ${computerChoice}.`;
    computerScoreRef.innerHTML = parseInt(computerScoreRef.innerHTML) + 1;
    }
    document.getElementById('result').innerText = resultMessage
}