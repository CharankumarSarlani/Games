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

function __takeUserInput(chancesLeft) {
  console.log("-----------------------------------");
  playerOneInput();
  console.log(updatedBoard);

  if (setIndexes(updatedBoard)) {
    console.log("you won");
    return 0;
  }

  if (chancesLeft === 1) {
    console.log("game lost");
    return 0;
  }

  playerTwoInput();
  console.log(updatedBoard);

  return __takeUserInput(chancesLeft - 1);
}

function takeUserInput() {
  let chancesLeft = 5;
  return __takeUserInput(chancesLeft);
}

let key = 0;
function validatePlayerInput(userInput, color) {
  let board = "";
  key = 0;
  for (let index = 0; index < updatedBoard.length; index++) {
    if (userInput == updatedBoard[index]) {
      board += color;
      key = 1;
      continue;
    } else {
      board += updatedBoard[index];
    }
  }

  return board;
}

function setIndexes(updatedBoard) {
  const a1 = updatedBoard[89];
  const a2 = updatedBoard[102];
  const a3 = updatedBoard[115];

  const b1 = updatedBoard[212];
  const b2 = updatedBoard[225];
  const b3 = updatedBoard[238];

  const c1 = updatedBoard[335];
  const c2 = updatedBoard[348];
  const c3 = updatedBoard[361];

  const row1 = a1 === a2 && a1 === a3;
  const row2 = b1 === b2 && b1 === b3;
  const row3 = c1 === c2 && c1 === c3;

  const col1 = a1 === b1 && a1 === c1;
  const col2 = a2 === b2 && a2 === c2;
  const col3 = a3 === b3 && a3 === c3;

  const diagnol1 = a1 === b2 && a1 === c3;
  const diagnol2 = a3 === b2 && a3 === c1;

  return row1 || row2 || row3 || col1 || col2 || col3 || diagnol1 || diagnol2;
}

const sourceTable = getSourceTable();
let updatedBoard = sourceTable;

console.log(sourceTable);
takeUserInput();
