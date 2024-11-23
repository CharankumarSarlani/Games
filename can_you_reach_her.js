let playerXCoordinate = 0;
let playerYCoordinate = 0;

// unneccesarily running loop along PATH variable.
function isInCorrectPath(playerXCoordinate, playerYCoordinate) {
  const PATH = "00-01-02-03-13-23-24-34-44-54-64-65-66-67-68-78-79-89-99";

  for (let position = 0; position < PATH.length; position++) {
    if (PATH[position] === "-")
      continue;

    if (playerXCoordinate === +PATH[position] && playerYCoordinate === +PATH
    [position + 1]) {
      return true;
    }
  }

  return false;
}

function getGridTile(row, column) {
  const LAST_INDEX = 9;

  return row === LAST_INDEX && column === LAST_INDEX ? "👩‍🦰" : "🟦";
}

// function is too lengthy!!
function createGameBoard(playerXCoordinate, playerYCoordinate) {
  let string = addEscapeSequences("\n", 1);

  for (let row = 0; row < 10; row++) {
    for (let column = 0; column < 10; column++) {
      if (row === playerXCoordinate && column === playerYCoordinate) {

        string += isInCorrectPath(playerXCoordinate, playerYCoordinate) ?
          "🧑‍🦰" : "😹";
        continue;
      }

      string += getGridTile(row, column);
    }

    string += addEscapeSequences("\n", 1);
  }

  return string;
}

function printGameBoard() {
  console.log(createGameBoard(playerXCoordinate, playerYCoordinate));
}

function getPosition(direction, position) {
  if (direction === 's' || direction === 'd') {
    return position + 1;
  }

  return position - 1;
}

// change function name!!
function __play(movement) {
  switch (movement) {
    case 's': playerXCoordinate = getPosition("s", playerXCoordinate); break;
    case 'w': playerXCoordinate = getPosition("w", playerXCoordinate); break;
    case 'd': playerYCoordinate = getPosition("d", playerYCoordinate); break;
    case 'a': playerYCoordinate = getPosition("a", playerYCoordinate); break;
  }

  printGameBoard();
  if (!isInCorrectPath(playerXCoordinate, playerYCoordinate)) {
    printResettedTable();
  }
}

function printResettedTable() {
  playerXCoordinate = 0;
  playerYCoordinate = 0;
  wait(5);
  console.clear();
  printGameBoard();
}

function isValidInput(playerInput) {
  return playerInput === "s" || playerInput === "a" || playerInput === "w" ||
    playerInput === "d";
}

function getPlayerInput() {
  return prompt("[w - UP] [s - DOWN] [a - LEFT] [d - RIGHT]");
}

function validatePlayerInput() {
  let playerInput = getPlayerInput();

  if (isValidInput(playerInput)) {
    return playerInput;
  }

  handleInvalidInput();
}

function handleInvalidInput() {
  console.clear();
  printGameBoard();
  console.log(" ‼️ INVALID INPUT  ‼️ ");
  validatePlayerInput();
}

function play() {
  let movement = "";
  for (let movesLeft = 100; movesLeft > 0; movesLeft--) {
    __play(movement);
    console.log("MOVES LEFT:", movesLeft);

    movement = validatePlayerInput();
    console.clear();
  }

  console.log("YOU LOST HER 💔");
}

// animation segment
function wait(delay) {
  for (let buffer = 0; buffer < delay * 100000000; buffer++) {
  }
}

function getLoadingAnimation(message) {
  const dot = "⚪️";
  let animatedMessage = message;

  for (let index = 0; index < 4; index++) {
    animatedMessage = message;

    for (let subIndex = 0; subIndex < 8; subIndex++) {
      animatedMessage += dot;
      console.clear();
      console.log(animatedMessage);
      wait(3);
    }
  }

  console.clear();
}

function addEscapeSequences(escapeSequence, times) {
  let escapeSeqString = "";
  for (let index = 0; index < times; index++) {
    escapeSeqString += escapeSequence;
  }

  return escapeSeqString;
}

function playAnimation() {
  const message = addEscapeSequences("\n", 13) + addEscapeSequences("\t", 2) +
    "LOADING GAME ASSETS";
  getLoadingAnimation(message);
}

playAnimation();
play();