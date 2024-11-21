function isSnakeFoundAt(position) {
  const isSnakeFound1 = position === 28 || position === 37 || position === 48;
  const isSnakeFound2 = position === 75 || position === 94 || position === 96;

  return isSnakeFound2 || isSnakeFound1;
}

function isLadderFoundAt(position) {
  const isLadderFound1 = position === 4 || position === 12 || position === 14;
  const isLadderFound2 = position === 22 || position === 41 || position === 54;

  return isLadderFound1 || isLadderFound2;
}

function moveToSnakeTailFrom(position) {
  switch (position) {
    case 28:
      return 10;
    case 37:
      return 3;
    case 48:
      return 16;
    case 75:
      return 32;
    case 94:
      return 71;
    case 96:
      return 42;
  }
}

function climbLadderFrom(position) {
  switch (position) {
    case 4:
      return 56;
    case 12:
      return 50;
    case 14:
      return 55;
    case 22:
      return 58;
    case 41:
      return 79;
    case 54:
      return 88;
  }
}

function isPositionExceeding(position) {
  return position > 100;
}

function getPosition(position) {

  if (isSnakeFoundAt(position)) {
    playerPosition = moveToSnakeTailFrom(position);
    console.log("snake bite 🐍, now you are at:", playerPosition);
    return playerPosition;
  }

  if (isLadderFoundAt(position)) {
    playerPosition = climbLadderFrom(position);
    console.log("climbed ladder 🪜, now you are at:", playerPosition);
    return playerPosition;
  }

  console.log("your Position is", position);
  return position;
}

function rollDice(playerPosition) {
  const diceNumber = Math.ceil(Math.random() * 6);
  console.log("dice number, p1:", diceNumber);

  playerPosition += diceNumber;

  if (isPositionExceeding(playerPosition)) {
    console.log("your Position is exceeding", playerPosition);
    playerPosition -= diceNumber;
    console.log("currently you are at ", playerPosition);
    return playerPosition;
  }

  return getPosition(playerPosition);
}

function __play(playerOnePosition, playerTwoPosition) {
  const P1 = prompt("Roll the dice for P1");
  if (!P1) {
    playerOnePosition = rollDice(playerOnePosition);
  }
  
  const P2 = prompt("\nRoll the dice for P2");
  if (!P2) {
    playerTwoPosition = rollDice(playerTwoPosition);
  }
  
  if (playerOnePosition === 100) {
    console.log("player 1 won");
  }

  if (playerTwoPosition === 100) {
    console.log("player 2 won");
  }

  if (playerOnePosition != 100 && playerTwoPosition != 100) {
    console.log("------------------------------------------------");
    return __play(playerOnePosition, playerTwoPosition);
  }
}

function play() {
  const playerOnePosition = 0;
  const playerTwoPosition = 0;
  return __play(playerOnePosition, playerTwoPosition);
}

let playerPosition = 0;

console.log("🐍's and 🪜's\n");
play();
