import "./style.css";

// functions
let turn: number = 0;

function nextTurn(): void {
  if (takeTurn) {
    turn++;
    takeTurn.innerHTML = turn.toString().padStart(2, "0");
  }
}

function prevTurn(): void {
  if (turn > 0 && takeTurn) {
    turn--;
    takeTurn.innerHTML = turn.toString().padStart(2, "0");
  }
}

function resetTurn(): void {
  if (takeTurn) {
    turn = 0;
    takeTurn.innerHTML = turn.toString().padStart(2, "0");
  }
}

function editTurn(): void {
  if (customTurn && takeTurn) {
    const valueTurn = customTurn?.value;
    turn = +valueTurn;
    takeTurn.innerHTML = turn.toString().padStart(2, "0");
  }
}

// const declaradas para el uso en functions
const takeTurn = document.getElementById("turn") as HTMLElement;
const customTurn = document.getElementById("custom-turn") as HTMLInputElement;
const nextButton = document.getElementById("next-button") as HTMLButtonElement;
const prevButton = document.getElementById("prev-button") as HTMLButtonElement;
const resetButton = document.getElementById(
  "reset-button"
) as HTMLButtonElement;
const customButton = document.getElementById(
  "publish-button"
) as HTMLButtonElement;

// eventos
nextButton?.addEventListener("click", () => nextTurn());
prevButton?.addEventListener("click", () => prevTurn());
resetButton?.addEventListener("click", () => resetTurn());
customButton?.addEventListener("click", () => editTurn());
