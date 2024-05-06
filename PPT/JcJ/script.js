// Get DOM elements
const gamecontenedor = document.querySelector(".contenedor"),
  user1resultado = document.querySelector(".usuario1 img"),
  user2resultado = document.querySelector(".usuario2 img"),
  resultado = document.querySelector(".resultado"),
  optionImages = document.querySelectorAll(".opc_img"),
  puntajeU1 = document.getElementById("puntajeU1"),
  puntajeU2 = document.getElementById("puntajeU2");

// Variables to store user scores
let puntajeUsuario1 = 0;
let puntajeUsuario2 = 0;

// Function to check for winner
function checkWinner() {
  if (puntajeUsuario1 === 3) {
    resultado.textContent = "¡Jugador 1 gana!";
    resetGame();
  } else if (puntajeUsuario2 === 3) {
    resultado.textContent = "¡Jugador 2 gana!";
    resetGame();
  }
}

// Function to reset the game
function resetGame() {
  puntajeUsuario1 = 0;
  puntajeUsuario2 = 0;
  puntajeU1.textContent = 0;
  puntajeU2.textContent = 0;
}

// Variable to track current player
let currentPlayer = 1;

// Add click event listener to each option image
optionImages.forEach((image, index) => {
  image.addEventListener("click", (e) => {
    image.classList.add("active");
    // Determine which user is making the move based on currentPlayer variable
    const userResultElement = currentPlayer === 1 ? user1resultado : user2resultado;
    const userScoreElement = currentPlayer === 1 ? puntajeU1 : puntajeU2;

    image.classList.add("active");

    // Set the user's choice image source
    userResultElement.src = "images/rock.png";
    userResultElement.setAttribute("data-value", image.querySelector("p").textContent); // Add data-value attribute to store option value

    // Loop through each option image again
    optionImages.forEach((image2, index2) => {
      index !== index2 && image2.classList.remove("active");
    });

    // Switch player
    currentPlayer = currentPlayer === 1 ? 2 : 1;
  });
});

// Add click event listener to start button
document.getElementById("startBtn").addEventListener("click", () => {
  // Check if both players have made their move
  if (user1resultado.src && user2resultado.src) {
    gamecontenedor.classList.add("start");
    // Set a timeout to delay the resultado calculation and animation
    setTimeout(() => {
      gamecontenedor.classList.remove("start");

      let imageSrc = e.target.querySelector("img").src;
      // Set the user image based on the current turn
      if (currentPlayer === 1) {
        user1resultado.src = imageSrc;
        currentPlayer = 2;
      } else {
        user2resultado.src = imageSrc;
        currentPlayer = 1;
      }

      // Get the value of each player's choice
      const user1Value = user1resultado.getAttribute("data-value");
      const user2Value = user2resultado.getAttribute("data-value");



      // Determine the resultado
      const outcomes = {
        "Roca": { "Roca": "Empate", "Papel": "Jugador 2", "Tijera": "Jugador 1", "Lagarto": "Jugador 1", "Spock": "Jugador 2" },
        "Papel": { "Roca": "Jugador 1", "Papel": "Empate", "Tijera": "Jugador 2", "Lagarto": "Jugador 2", "Spock": "Jugador 1" },
        "Tijera": { "Roca": "Jugador 2", "Papel": "Jugador 1", "Tijera": "Empate", "Lagarto": "Jugador 1", "Spock": "Jugador 2" },
        "Lagarto": { "Roca": "Jugador 2", "Papel": "Jugador 1", "Tijera": "Jugador 2", "Lagarto": "Empate", "Spock": "Jugador 1" },
        "Spock": { "Roca": "Jugador 1", "Papel": "Jugador 2", "Tijera": "Jugador 1", "Lagarto": "Jugador 2", "Spock": "Empate" }
      };

      const outcome = outcomes[user1Value][user2Value];
      resultado.textContent = user1Value === user2Value ? "¡Empate!" : `${outcome} gana!!`;

      // Update scores
      if (outcome === 'Jugador 1') {
        puntajeUsuario1++;
      } else if (outcome === 'Jugador 2') {
        puntajeUsuario2++;
      }

      // Display scores
      puntajeU1.textContent = puntajeUsuario1;
      puntajeU2.textContent = puntajeUsuario2;

      // Check for winner
      checkWinner();

      // Reset player choices and remove active class from images
      user1resultado.src = "";
      user2resultado.src = "";
      optionImages.forEach(image => image.classList.remove("active"));
    }, 1700); // Adjust the timeout value as needed
  }
});
