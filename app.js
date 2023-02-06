const cells = document.querySelectorAll(".cell");
const startButton = document.getElementById("startButton");

let namePlayer1;
let namePlayer2;
let player1 = "X";
let player2 = "O";
let currentPlayer;

function renderPlayer() {
  currentPlayer = currentPlayer === player1 ? player1 : player2;
  const activePlayer = currentPlayer === player1 ? namePlayer1 : namePlayer2;
  const activePlayerElement = document.querySelector(
    `.players[id="${currentPlayer === player1 ? player1 : player2}"]`
  );
  activePlayerElement.textContent = activePlayer;
}

function PlayerName() {
  namePlayer1 = prompt("Player 1: Please enter your name");
  namePlayer2 = prompt("Player 2: Please enter your name");
  renderPlayer();
}

function setGame() {
  const element = document.getElementById(startButton.id);
  element.textContent = "Let's Play";
}
startButton.addEventListener("click", () => {
  PlayerName();
});

cells.forEach((cells) => {
  cells.addEventListener("click", clickEvent);
});

function clickEvent() {
  console.log("hello");
}
