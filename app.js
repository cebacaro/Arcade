const cells = document.querySelectorAll(".cell");
const startButton = document.getElementById("startButton");
const playAgain = document.getElementById("playAgain");
const winner = document.getElementById("winner");

let player1 = {
  name: "",
  symbol: "X",
};
let player2 = {
  name: "",
  symbol: "O",
};
let currentPlayer = player1.name;

function setGame() {
  function getName1() {
    let nameValue1 = prompt("Player 1, enter your name");
    player1.name = nameValue1;
  }

  function getName2() {
    nameValue = prompt("Player 2, enter your name");
    player2.name = nameValue;
  }
  getName1();
  getName2();
  renderPlayer();
}

function renderPlayer() {
  const player1Name = document.getElementById("player1");
  player1Name.innerText = player1.name;
  const player2Name = document.getElementById("player2");
  player2Name.innerText = player2.name;
  console.log(player1, player2);
}

function clickCells(event) {
  if (event.target.textContent) {
    return;
  }
  event.target.textContent = currentPlayer.symbol;
  if (checkWinner(currentPlayer.symbol)) {
    currentPlayer = currentPlayer === player1 ? player2 : player1;
    winner.innerText = `${currentPlayer.name} is the winner!`;
    showResButton();
  } else {
    currentPlayer = currentPlayer === player1 ? player2 : player1;
  }
}

function resetGame() {
  for (let i = 0; i < cells.length; i++) {
    cells[i].innerText = "";
  }
  currentPlayer = player1;
  winner.innerText = "";
  setGame();
}
playAgain.addEventListener("click", resetGame);
startButton.addEventListener("click", setGame);

function checkWinner(player) {
  let winner = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < winner.length; i++) {
    const [col1, col2, col3] = winner[i];
    if (
      cells[col1].textContent === player &&
      cells[col2].textContent === player &&
      cells[col3].textContent === player
    ) {
      playAgain.style.zIndex = 3;
      console.log(player1, player2);
      return true;
    }
  }
  return false;
}

for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener("click", clickCells);
}
// testing git

// document.getElementsByClassName("restartGame")[0].style.zIndex = 3;
