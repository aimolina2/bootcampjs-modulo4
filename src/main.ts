import "./style.css";

console.log("Hello Typescript!");

let turn: number = 0;

function nextTurn() {
  const takeTurn = document.getElementById("turn");
  if (takeTurn) {
    turn++;
    takeTurn.innerHTML = turn.toString();
  }
}

function prevTurn() {
  const takeTurn = document.getElementById("turn");
  if (turn <= 0) {
    return;
  }
  if (takeTurn) {
    turn--;
    takeTurn.innerHTML = turn.toString();
  }
}

function resetTurn() {
  const takeTurn = document.getElementById("turn");
  if (takeTurn) {
    turn = 0;
    takeTurn.innerHTML = turn.toString();
  }
}

const nextButton = document.getElementById("next-button");
const prevButton = document.getElementById("prev-button");
const resetButton = document.getElementById("reset-button");

nextButton?.addEventListener("click", () => nextTurn());
prevButton?.addEventListener("click", () => prevTurn());
resetButton?.addEventListener("click", () => resetTurn());
