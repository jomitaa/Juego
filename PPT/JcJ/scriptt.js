/*
const gamecontenedor = document.querySelector(".contenedor"),
    user1resultado = document.querySelector(".usuario1 img"),
    user2resultado = document.querySelector(".usuario2 img"),
    resultado = document.querySelector(".resultado"),
    optionImages = document.querySelectorAll(".opc_img"),
    puntajeJugador1 = document.getElementById("puntajeU1"),
    puntajeJugador2 = document.getElementById("puntajeU2");


let puntajeJ1 = 0;
let puntajeJ2 = 0;

function checkWinner() {
    if (puntajeJ1 === 3) {
        resultado.textContent = "¡El Jugador 1 gana!";
        resetGame();
    } else if (puntajeJ2 === 3) {
        resultado.textContent = "¡El Jugador 2 gana!";
        resetGame();
    }
}


function resetGame() {
    puntajeJ1 = 0;
    puntajeJ2 = 0;
    puntajeJugador1.textContent = 0;
    puntajeJugador2.textContent = 0;
}

let currentPlayer = 1;

function determinarGanador(eleccionJugador1, eleccionJugador2) {

}

optionImages.forEach((image, index) => {
    image.addEventListener("click", (e) => {

        image.classList.add("active");

        user1resultado.src = user2resultado.src = "images/rock.png";
        resultado.textContent = "El Ganador es...";
        currentPlayer = currentPlayer === 1 ? 2 : 1;

        if (currentPlayer === 1) {
            eleccionJugador1 = e.target.querySelector("img").src;
        } else if (currentPlayer === 2) {
            eleccionJugador2 = e.target.querySelector("img").src;
        }


        document.getElementById("startBtn").addEventListener("click", () => {

            if (user1resultado.src && user2resultado.src) {


                gamecontenedor.classList.add("start");

                setTimeout(() => {
                    gamecontenedor.classList.remove("start");
                    if (currentPlayer == 1) {
                        eleccionJugador1 = e.target.querySelector("img").src;
                    } else {
                        eleccionJugador2 = e.target.querySelector("img").src;
                    }

                    let imageSrc = e.target.querySelector("img").src;

                    if (currentPlayer === 1) {
                        user1resultado.src = imageSrc;
                        currentPlayer = 2;
                    } else {
                        user2resultado.src = imageSrc;
                        currentPlayer = 1;
                    }


                    if (eleccionJugador1 === eleccionJugador2) {

                        resultado.textContent = "¡Empate!";
                    } else if (
                        (eleccionJugador1 === "images/rock.png" && eleccionJugador2 === "images/scissors.png") ||
                        (eleccionJugador1 === "images/rock.png" && eleccionJugador2 === "images/lizard.png") ||
                        (eleccionJugador1 === "images/paper.png" && eleccionJugador2 === "images/rock.png") ||
                        (eleccionJugador1 === "images/paper.png" && eleccionJugador2 === "images/spock.png") ||
                        (eleccionJugador1 === "images/scissors.png" && eleccionJugador2 === "images/paper.png") ||
                        (eleccionJugador1 === "images/scissors.png" && eleccionJugador2 === "images/lizard.png") ||
                        (eleccionJugador1 === "images/lizard.png" && eleccionJugador2 === "images/spock.png") ||
                        (eleccionJugador1 === "images/lizard.png" && eleccionJugador2 === "images/paper.png") ||
                        (eleccionJugador1 === "images/spock.png" && eleccionJugador2 === "images/rock.png") ||
                        (eleccionJugador1 === "images/spock.png" && eleccionJugador2 === "images/scissors.png")
                    ) {
                        // Jugador 1 gana
                        resultado.textContent = "¡El Jugador 2 gana!";
                        puntajeJ2++;
                        puntajeJugador2.textContent = puntajeJ2;
                    } else {
                        // Jugador 2 gana
                        resultado.textContent = "¡El Jugador 1 gana!";
                        puntajeJ1 = puntajeJ1+1;
                        puntajeJugador1.textContent = puntajeJ1;

                        chekWnner();
                    }
                }, 1700);
            }
        });
    });
});
*/

const gamecontenedor = document.querySelector(".contenedor"),
user1resultado = document.querySelector(".usuario1 img"),
user2resultado = document.querySelector(".usuario2 img"),
resultado = document.querySelector(".resultado"),
optionImages = document.querySelectorAll(".opc_img"),
puntajeJugador1 = document.getElementById("puntajeU1"),
puntajeJugador2 = document.getElementById("puntajeU2");

let puntajeJ1 = 0;
let puntajeJ2 = 0;

function checkWinner() {
if (puntajeJ1 === 3) {
    resultado.textContent = "¡El Jugador 1 gana!";
    resetGame();
} else if (puntajeJ2 === 3) {
    resultado.textContent = "¡El Jugador 2 gana!";
    resetGame();
}
}

function resetGame() {
puntajeJ1 = 0;
puntajeJ2 = 0;
puntajeJugador1.textContent = 0;
puntajeJugador2.textContent = 0;
}

let currentPlayer = 1;

function determinarGanador(eleccionJugador1, eleccionJugador2) {
if (eleccionJugador1 === eleccionJugador2) {
    return 0; // empate
} else if (
    (eleccionJugador1 === "images/rock.png" && eleccionJugador2 === "images/scissors.png") ||
    (eleccionJugador1 === "images/rock.png" && eleccionJugador2 === "images/lagarto.png") ||
    (eleccionJugador1 === "images/paper.png" && eleccionJugador2 === "images/rock.png") ||
    (eleccionJugador1 === "images/paper.png" && eleccionJugador2 === "images/spock.png") ||
    (eleccionJugador1 === "images/scissors.png" && eleccionJugador2 === "images/paper.png") ||
    (eleccionJugador1 === "images/scissors.png" && eleccionJugador2 === "images/lagarto.png") ||
    (eleccionJugador1 === "images/lagarto.png" && eleccionJugador2 === "images/spock.png") ||
    (eleccionJugador1 === "images/lagarto.png" && eleccionJugador2 === "images/papel.png") ||
    (eleccionJugador1 === "images/spock.png" && eleccionJugador2 === "images/rock.png") ||
    (eleccionJugador1 === "images/spock.png" && eleccionJugador2 === "images/scissors.png")
) {
    return 1; // jugador 1 gana
} else {
    return 2; // jugador 2 gana
}
}

optionImages.forEach((image, index) => {
image.addEventListener("click", (e) => {
    image.classList.add("active");

    user1resultado.src = user2resultado.src = "images/rock.png";
    resultado.textContent = "El Ganador es...";
    currentPlayer = currentPlayer === 1 ? 2 : 1;

    document.getElementById("startBtn").addEventListener("click", () => {
        if (user1resultado.src && user2resultado.src) {
            gamecontenedor.classList.add("start");
            setTimeout(() => {
                gamecontenedor.classList.remove("start");

                let imageSrc = e.target.querySelector("img").src;

                if (currentPlayer === 1) {
                    user1resultado.src = imageSrc;
                    currentPlayer = 2;
                    eleccionJugador2 = e.target.querySelector("img").src;
                    
                } else {
                    user2resultado.src = imageSrc;
                    currentPlayer = 1;
                    eleccionJugador1 = e.target.querySelector("img").src;
                    
                }

                let resultadoRonda = determinarGanador(eleccionJugador1, eleccionJugador2);

                if (resultadoRonda === 0) {
                    resultado.textContent = "¡Empate!";
                } else if (resultadoRonda === 1) {
                    resultado.textContent = "¡El Jugador 1 gana!";
                    puntajeJ1++;
                    puntajeJugador1.textContent = puntajeJ1;
                } else {
                    resultado.textContent = "¡El Jugador 2 gana!";
                    puntajeJ2++;
                    puntajeJugador2.textContent = puntajeJ2;
                }

                checkWinner();
            }, 1700);
        }
    });
});
});