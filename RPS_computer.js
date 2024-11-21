function getHelp() {
  console.log("-----help-----\n");
  console.log("how to play?");
  console.log("1 is for 🪨");
  console.log("2 is for  📰");
  console.log("3 is for ✄\n");

  const isUserWantToContinue = confirm("do you want to continue?");

  if (isUserWantToContinue) {
    rockPaperScissor();
  }
}

function quit() {
  console.log("QUIT!");
}

function invalidInput() {
  console.log("invalid input");
  const isUserContinues = confirm("do you want to continue");

  if (isUserContinues) {
    play();
  }
}

function play() {
  const userChoice = +prompt("\nEnter a number:");
  const computerChoice = Math.floor(Math.random() * 3) + 1;

  if (userChoice > 3) {
    invalidInput();
  }

  console.log("computer choice:", computerChoice);
  if (userChoice === computerChoice) {
    console.log("it's a tie \n");
  }

  if (userChoice === 1 && computerChoice === 2) {
    console.log("'👎' ", "-->🪨 wrapped up by 📰 \n");
  }

  if (userChoice === 1 && computerChoice === 3) {
    console.log("'🏆' ", "-->🪨 breaks ✄ \n");
  }

  if (userChoice === 2 && computerChoice === 1) {
    console.log("'🏆' ", "-->📰 wraps 🪨 \n");
  }

  if (userChoice === 2 && computerChoice === 3) {
    console.log("'👎' ", "-->📰 trimmed by ✄ \n");
  }

  if (userChoice === 3 && computerChoice === 1) {
    console.log("'👎' ", "-->✄ broken by 🪨 \n");
  }

  if (userChoice === 3 && computerChoice === 2) {
    console.log("'🏆' ", "-->✄ trimmed 📰 \n");
  }

  const isUserContinues = confirm("do you want to continue playing");

  if (isUserContinues) {
    play();
  }
}

function rockPaperScissor() {
  const userInput = +prompt("select an option! \n1.Get help\n2.Play\n3.Quit\n")
  switch (userInput) {
    case 1:
      getHelp();
      break;

    case 2:
      play();
      break;

    case 3:
      quit();
      break;

    default:
      invalidInput();
  }
}

console.log("----------- Welcome to '🪨 📰 ✄' ---------- \n");
rockPaperScissor();
quit();