let playerXCoordinate = 8;
let playerYCoordinate = 9;

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

function isInLastPosition(row, column) {
  const LAST_INDEX = 9;

  return row === LAST_INDEX && column === LAST_INDEX;
}

let PLAYER_ICON = "🧑‍🦰";
const GRID_TILE = "🟦";
const BOMB_ICON = "😹";
let DESTINATION_ICON = "👩‍🦰";

// function is too lengthy!!
function createGameBoard(playerXCoordinate, playerYCoordinate) {
  let string = addEscapeSequences("\n", 1);

  for (let row = 0; row < 10; row++) {
    for (let column = 0; column < 10; column++) {
      if (row === playerXCoordinate && column === playerYCoordinate) {

        string += isInCorrectPath(playerXCoordinate, playerYCoordinate) ?
          PLAYER_ICON : BOMB_ICON;
        continue;
      }

      string += isInLastPosition(row, column) ? DESTINATION_ICON : GRID_TILE;
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
    printResettedBoard();
  }
}

function printResettedBoard() {
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

function gameResult(resultMessage) {
  console.clear();

  DESTINATION_ICON = "💖";
  PLAYER_ICON = GRID_TILE;
  printResettedBoard();
  console.log(resultMessage);
}

function CanYouReachHer() {
  let movement = "";

  for (let movesLeft = 100; movesLeft > 0; movesLeft--) {
    __play(movement);
    console.log("MOVES LEFT:", movesLeft);

    if (isInLastPosition(playerXCoordinate, playerYCoordinate)) {
      return gameResult("🎊 YOU REACHED HER 🎉");
    }

    movement = validatePlayerInput();
    console.clear();
  }

  return gameResult("YOU LOST HER 💔");
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

// playAnimation();
CanYouReachHer();
