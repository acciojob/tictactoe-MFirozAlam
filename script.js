//your JS code here. If required.
const submitBtn = document.getElementById("submit");

const startScreen = document.getElementById("start-screen");
const gameScreen = document.getElementById("game-screen");

const player1Input = document.getElementById("player1");
const player2Input = document.getElementById("player2");

const message = document.querySelector(".message");
const cells = document.querySelectorAll(".cell");

let player1 = "";
let player2 = "";

let currentPlayer = "x";
let currentTurn = "";

let board = ["", "", "", "", "", "", "", "", ""];

const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],

  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],

  [0, 4, 8],
  [2, 4, 6]
];

// Start Game
submitBtn.addEventListener("click", () => {

  player1 = player1Input.value;
  player2 = player2Input.value;

  if (player1 === "" || player2 === "") {
    alert("Please enter both player names");
    return;
  }

  startScreen.style.display = "none";
  gameScreen.style.display = "block";

  currentTurn = player1;

  message.innerText = `${currentTurn}, you're up`;
});

// Cell Click
cells.forEach((cell, index) => {

  cell.addEventListener("click", () => {

    // Prevent overwriting
    if (board[index] !== "") {
      return;
    }

    // Put X or O
    if (currentPlayer === "x") {
      cell.innerText = "x";
      board[index] = "x";
    } else {
      cell.innerText = "o";
      board[index] = "o";
    }

    // Check Winner
    if (checkWinner()) {
      message.innerText = `${currentTurn} congratulations you won!`;
      return;
    }

    // Change Turn
    if (currentPlayer === "x") {
      currentPlayer = "o";
      currentTurn = player2;
    } else {
      currentPlayer = "x";
      currentTurn = player1;
    }

    message.innerText = `${currentTurn}, you're up`;
  });

});

// Winner Function
function checkWinner() {

  for (let combo of winningCombinations) {

    let [a, b, c] = combo;

    if (
      board[a] !== "" &&
      board[a] === board[b] &&
      board[b] === board[c]
    ) {
      return true;
    }
  }

  return false;
}
