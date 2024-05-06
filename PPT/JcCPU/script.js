// Get DOM elements
const gamecontenedor = document.querySelector(".contenedor"),
  userresultado = document.querySelector(".usuario img"),
  cpuresultado = document.querySelector(".cpu img"),
  resultado = document.querySelector(".resultado"),
  optionImages = document.querySelectorAll(".opc_img"),
  puntajeU = document.getElementById("puntajeU"),
  puntajeC = document.getElementById("puntajeC");

// Variables to store user and CPU scores
let puntajeUsuario = 0;
let puntajeCPU = 0;

// Function to check for winner
function checkWinner() {
  if (puntajeUsuario === 3) {
    resultado.textContent = "¡El Usuario gana!";
    resetGame();
  } else if (puntajeCPU === 3) {
    resultado.textContent = "¡La CPU gana!";
    resetGame();
  }
}

// Function to reset the game
function resetGame() {
  puntajeUsuario = 0;
  puntajeCPU = 0;
  puntajeU.textContent = 0;
  puntajeC.textContent = 0;
}

// Loop through each option image element
optionImages.forEach((image, index) => {
  image.addEventListener("click", (e) => {
    image.classList.add("active");

    userresultado.src = cpuresultado.src = "images/rock.png";
    resultado.textContent = "El Ganador es...";

    // Loop through each option image again
    optionImages.forEach((image2, index2) => {
      // If the current index doesn't match the clicked index
      // Remove the "active" class from the other option images
      index !== index2 && image2.classList.remove("active");
    });

    gamecontenedor.classList.add("start");

    // Set a timeout to delay the resultado calculation
    setTimeout(() => {
      gamecontenedor.classList.remove("start");
      // Get the source of the clicked option image
      let imageSrc = e.target.querySelector("img").src;
      // Set the user image to the clicked option image
      userresultado.src = imageSrc;

      // Generate a random number between 0 and 4 for the new options (lagarto and Spock)
      let randomNumber = Math.floor(Math.random() * 5);
      // Create an array of CPU image options including the new options
      let cpuImages = ["images/rocks.png", "images/paper.png", "images/scissors.png", "images/lagarto.png", "images/spock.png"];
      // Set the CPU image to a random option from the array
      cpuresultado.src = cpuImages[randomNumber];

      // Assign a letter value to the CPU option (R for rock, P for paper, S for scissors, L for lizard, V for Spock)
      let cpuValue = ["R", "P", "S", "L", "V"][randomNumber];
      // Assign a letter value to the clicked option (based on index)
      let userValue = ["R", "P", "S", "L", "V"][index];

      // Create an object with all possible outcomes including the new options
      let outcomes = {
        RR: "Empate",
        RP: "Cpu",
        RS: "Usuario",
        RL: "Usuario",
        RV: "Cpu",
        PR: "Usuario",
        PP: "Empate",
        PS: "Cpu",
        PL: "Cpu",
        PV: "Usuario",
        SR: "Cpu",
        SP: "Usuario",
        SS: "Empate",
        SL: "Usuario",
        SV: "Cpu",
        LR: "Cpu",
        LP: "Usuario",
        LS: "Cpu",
        LL: "Empate",
        LV: "Usuario",
        VR: "Usuario",
        VP: "Cpu",
        VS: "Usuario",
        VL: "Cpu",
        VV: "Empate",
      };

      // Look up the outcome value based on user and CPU options
      let outComeValue = outcomes[userValue + cpuValue];

      // Display the resultado
      resultado.textContent = userValue === cpuValue ? "Hay Empate" : `${outComeValue}!!`;

      // Update scores and display
      if (outComeValue === 'Usuario') {
        puntajeUsuario++;
      } else if (outComeValue === 'Cpu') {
        puntajeCPU++;
      }
      puntajeU.textContent = puntajeUsuario;
      puntajeC.textContent = puntajeCPU;

      // Check for winner
      checkWinner();

    }, 1700);
  });
});
