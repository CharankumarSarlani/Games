function repeat(string) {
  string = "┏";
  for (let index = 0; index < 2; index++) {
    for (let index = 0; index < times; index++) {
      string += "━";
    }

    string += "┳";
  }
  string += "┓";

  return string;
}

function header() {
  const header = "┏━━━━━━━━━━━━┳━━━━━━━━━━━━┳━━━━━━━━━━━━┓";
  return header;
}

function linePrinting() {
  let line = "";
  for (let i = 0; i < 3; i++) {
    line += "┃";
    for (let k = 0; k < 12; k++) {
      line += " ";
    }
  }
  line += "┃";
  return line;
}

let number = 0;
function cellNumberPrinting() {
  let line = "";
  for (let i = 0; i < 3; i++) {
    line += "┃";
    number++;
    for (let k = 0; k < 6; k++) {
      line += " ";
    }
    line += number;

    for (let k = 0; k < 5; k++) {
      line += " ";
    }
  }
  line += "┃";
  return line;
}

function seperatorPrinting() {
  let line = "";
  line += "┣";
  for (let i = 0; i < 2; i++) {
    for (let k = 0; k < 12; k++) {
      line += "━";
    }
    line += "╋";
  }
  for (let k = 0; k < 12; k++) {
    line += "━";
  }

  line += "┫";
  return line;
}

function footer() {
  const footer = "┗━━━━━━━━━━━━┻━━━━━━━━━━━━┻━━━━━━━━━━━━┛";
  return footer;
}

let sourceBoard = "";
function getSourceTable() {
  sourceBoard += header() + "\n";

  for (let index = 0; index < 3; index++) {

    sourceBoard += linePrinting() + "\n";
    sourceBoard += cellNumberPrinting() + "\n";

    if (index != 2) {
      sourceBoard += seperatorPrinting() + "\n";
    }
  }

  sourceBoard += footer() + "\n";
  return sourceBoard;
}

// ------------------ game segment ------------------
let key = 0;
function validatePlayerInput(playerInput, playerIcon) {
  let board = "";
  key = 0;
  for (let index = 0; index < updatedBoard.length; index++) {
    if (playerInput == updatedBoard[index]) {
      board += playerIcon;
      key = 1;
      continue;
    } else {
      board += updatedBoard[index];
    }
  }

  return board;
}

function playerOneInput() {
  let playerOneIcon = 'O';
  const userInput = +prompt("Enter a number [P1] ○:");
  updatedBoard = validatePlayerInput(userInput, playerOneIcon);
}

function playerTwoInput() {
  let playerTwoIcon = 'X';
  const userInput = +prompt("Enter a number [P2] ●:");
  updatedBoard = validatePlayerInput(userInput, playerTwoIcon);
}

function isPlayerWon(updatedBoard) {
  const a1 = updatedBoard[89];
  const a2 = updatedBoard[102];
  const a3 = updatedBoard[115];

  const b1 = updatedBoard[212];
  const b2 = updatedBoard[225];
  const b3 = updatedBoard[238];

  const c1 = updatedBoard[335];
  const c2 = updatedBoard[348];
  const c3 = updatedBoard[361];

  if(a1 === a2 && a1 === a3) {
    return true;
  }

  if(b1 === b2 && b1 === b3) {
    return true;
  }

  if(c1 === c2 && c1 === c3) {
    return true;
  }

  if(a1 === b1 && a1 === c1) {
    return true;
  }

  if(a2 === b2 && a2 === c2) {
    return true;
  }

  if(a3 === b3 && a3 === c3) {
    return true;
  }

  if(a1 === b2 && a1 === c3) {
    return true;
  }

  if(a3 === b2 && a3 === c1) {
    return true;
  }

  return false;
}

function __getPlayerInput(chancesLeft) {
  console.log("-----------------------------------");
  playerOneInput();
  console.log(updatedBoard);

  if (isPlayerWon(updatedBoard)) {
    console.log("you won");
    return;
  }

  if (chancesLeft === 1) {
    console.log("game lost");
    return;
  }

  playerTwoInput();
  console.log(updatedBoard);

  return __getPlayerInput(chancesLeft - 1);
}

function play() {
  let chancesLeft = 5;
  return __getPlayerInput(chancesLeft);
}

const sourceTable = getSourceTable();
let updatedBoard = sourceTable;

console.log(sourceTable);
play();
