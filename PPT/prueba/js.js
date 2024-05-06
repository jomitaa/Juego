let player1Score = 0;
let player2Score = 0;

const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const player1Choice = button.innerText;
        const player2Choice = getRandomChoice();
        const result = determineWinner(player1Choice, player2Choice);
        updateScore(result);
        alert(`Jugador 1 eligió: ${player1Choice}\nJugador 2 eligió: ${player2Choice}\n${result}`);
    });
});

function getRandomChoice() {
    const choices = ['Piedra', 'Papel', 'Tijeras'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function determineWinner(choice1, choice2) {
    if (choice1 === choice2) {
        return "¡Empate!";
    } else if (
        (choice1 === "Piedra" && choice2 === "Tijeras") ||
        (choice1 === "Papel" && choice2 === "Piedra") ||
        (choice1 === "Tijeras" && choice2 === "Papel")
    ) {
        player1Score++;
        return "¡Jugador 1 gana!";
    } else {
        player2Score++;
        return "¡Jugador 2 gana!";
    }
}

function updateScore(result) {
    const player1ScoreElement = document.getElementById('player1Score');
    const player2ScoreElement = document.getElementById('player2Score');
    player1ScoreElement.textContent = player1Score;
    player2ScoreElement.textContent = player2Score;
}
