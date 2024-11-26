let playerXCoordinate = 0;
let playerYCoordinate = 0;

function repeat(string, times) {
  if (times === 0) {
    return "";
  }

  return string + repeat(string, times - 1);
}

function getRandomIntInRange(start, end) {
  return Math.floor(Math.random() * ((end + 1) - start)) + start;
}

function getRandomPath() {
  const PATH1 = "00-01-02-03-13-23-24-34-44-54-64-65-66-67-68-78-79-89-99";
  const PATH2 = "00-10-11-12-13-14-15-25-26-36-35-45-55-65-75-85-95-96-97-98-99"
  const PATH3 = "00-10-20-21-31-32-42-52-62-63-73-74-84-83-93-94-95-96-97-98-99"

  const number = getRandomIntInRange(1, 3);

  switch (number) {
    case 1: return PATH1;
    case 2: return PATH2;
    case 3: return PATH3;
  }
}

const PATH = getRandomPath();

function isInCorrectPath() {

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
let DESTINATION_ICON = "🍟";

function getHorizontalLine(column, row, length, gameBoard, icon) {

  if (column > length - 2) {
    icon = isInLastPosition(row, column) ? DESTINATION_ICON : GRID_TILE;
    return icon;
  }

  if (row === playerXCoordinate && column === playerYCoordinate) {
    icon = isInCorrectPath() ? PLAYER_ICON : BOMB_ICON;

    return icon + getHorizontalLine(column + 1, row, length, gameBoard);
  }

  return GRID_TILE + getHorizontalLine(column + 1, row, length, gameBoard);
}

function createGameBoard(height, width) {
  let gameBoard = repeat("\n", 1);

  for (let row = 0; row < height; row++) {
    gameBoard += getHorizontalLine(0, row, width, gameBoard, "");

    gameBoard += repeat("\n", 1);
  }

  return gameBoard;
}

function printGameBoard() {
  const height = 10;
  const width = 10;

  console.log(createGameBoard(height, width));
}

function getPosition(direction, position) {
  if (direction === 's' || direction === 'd') {
    return position + 1;
  }

  return position - 1;
}

// change function name!!
function printPlayerMovements(movement) {
  switch (movement) {
    case 's': playerXCoordinate = getPosition("s", playerXCoordinate); break;
    case 'w': playerXCoordinate = getPosition("w", playerXCoordinate); break;
    case 'd': playerYCoordinate = getPosition("d", playerYCoordinate); break;
    case 'a': playerYCoordinate = getPosition("a", playerYCoordinate); break;
  }

  printGameBoard();
  if (!isInCorrectPath()) {
    resetGameBoard();
    printGameBoard();
  }
}

function resetGameBoard() {
  playerXCoordinate = 0;
  playerYCoordinate = 0;
  wait(5);
  console.clear();
}

function handleInvalidInput() {
  console.clear();
  printGameBoard();
  console.log(" ‼️ INVALID INPUT  ‼️ ");
  return validatePlayerInput();
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

  return handleInvalidInput();
}

function gameResult(resultMessage, status) {
  if (status) {
    PLAYER_ICON = GRID_TILE;
    DESTINATION_ICON = "🥣";
    resetGameBoard();
  }

  printGameBoard();
  console.log(resultMessage);
}

function __game(movesLeft, movement) {

  if (movesLeft === 0) {
    return gameResult("YOU LOST FOOD", 0);
  }

  printPlayerMovements(movement);
  console.log("MOVES LEFT:", movesLeft);

  if (isInLastPosition(playerXCoordinate, playerYCoordinate)) {
    return gameResult("🎊 HURRAY , THANK YOU FOR FEEDING 🎉", 1);
  }

  movement = validatePlayerInput();
  console.clear();

  return __game(movesLeft - 1, movement);
}

function game() {
  const movement = "";
  const movesLeft = 100;

  __game(movesLeft, movement);
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

function playAnimation() {
  const message = repeat("\n", 13) + repeat("\t", 2) +
    "LOADING GAME ASSETS ";
  getLoadingAnimation(message);
}

playAnimation();
game();
