const cells = document.querySelectorAll(".cell");
const startButton = document.getElementById("startButton");
const playAgain = document.getElementById("playAgain");
const winner = document.getElementById("winner");
const singlePlayer = document.getElementById("singlePlayer");
const twoPlayers = document.getElementById("twoPlayers");
let gameOver = false;

let player1 = {
  name: "",
  symbol: "X",
};
let player2 = {
  name: "",
  symbol: "O",
};

let currentPlayer = player1;

function setGame() {
  // Get names
  function getName1() {
    player1.name = prompt("Player 1, enter your name");
  }

  function getName2() {
    player2.name = prompt("Player 2, enter your name");
  }

  if (twoPlayers.selected) {
    getName1();
    getName2();
  } else {
    getName1();
    player2.name = "computer";
  }

  displayPlayerNames();
  gameOver = false;
}

function displayPlayerNames() {
  const player1Name = document.getElementById("player1");
  player1Name.innerText = player1.name;
  const player2Name = document.getElementById("player2");
  player2Name.innerText = player2.name;
}

function clickCells(event) {
  if (event.target.textContent || gameOver) {
    return;
  }
  event.target.textContent = currentPlayer.symbol;
  if (checkWinner(currentPlayer.symbol)) {
    winner.innerText = `${currentPlayer.name} is the winner!`;
    currentPlayer = currentPlayer === player1 ? player2 : player1;
  } else {
    if (checkTie()) {
      winner.innerText = "The game is Tie!";
    } else {
      currentPlayer = currentPlayer === player1 ? player2 : player1;
    }
  }
  if (currentPlayer.name === "computer") {
    emptyCells = [];
    for (let i = 0; i < cells.length; i++) {
      if (cells[i].textContent === "") {
        emptyCells.push(cells[i]);
      }
    }
    if (emptyCells.length > 0) {
      let computerChoice =
        emptyCells[Math.floor(Math.random() * emptyCells.length)];
      computerChoice.click();
    }
  }
}

function resetGame() {
  for (let i = 0; i < cells.length; i++) {
    cells[i].innerText = "";
  }
  currentPlayer = player1;
  winner.innerText = "";
  setGame();
  playAgain.style.zIndex = -1;
}

startButton.addEventListener("click", setGame);
playAgain.addEventListener("click", resetGame);

function checkWinner(playerSymbol) {
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
      cells[col1].textContent === playerSymbol &&
      cells[col2].textContent === playerSymbol &&
      cells[col3].textContent === playerSymbol
    ) {
      gameOver = true;
      playAgain.style.zIndex = 3;
      return true;
    }
  }
  return false;
}

function checkTie() {
  for (let i = 0; i < cells.length; i++) {
    if (cells[i].textContent === "") {
      return false;
    }
  }
  winner.innerText = "The game is Tie!";
  gameOver = true;
  playAgain.style.zIndex = 3;
  return true;
}

for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener("click", clickCells);
}
