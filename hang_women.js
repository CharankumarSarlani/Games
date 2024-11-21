const answer = "rhythm";

function hangingMan(chances) {
  let manStructure = "";
  manStructure = " _______\n";
  manStructure += " |    |\n";
  manStructure += " |    👩‍🦰\n";

  switch (chances) {
    case 1:
      manStructure += " |       \n";
      manStructure += " |     \n";
      manStructure += " |     \n";
      manStructure += " |       \n";
      manStructure += "_|___\n";
      return manStructure;

    case 2:
      manStructure += " |   \\|/\n";
      manStructure += " |     \n";
      manStructure += " |     \n";
      manStructure += " |       \n";
      manStructure += "_|___\n";
      return manStructure;

    case 3:
      manStructure += " |   \\|/\n";
      manStructure += " |    |\n";
      manStructure += " |     \n";
      manStructure += " |       \n";
      manStructure += "_|___\n"
      return manStructure;

    case 4:
      manStructure += " |   \\|/\n";
      manStructure += " |    |\n";
      manStructure += " |    |\n";
      manStructure += " |       \n";
      manStructure += "_|___\n";
      return manStructure;

    case 5:
      manStructure += " |   \\|/\n";
      manStructure += " |    |\n";
      manStructure += " |    |\n";
      manStructure += " |   / \\\n";
      manStructure += "_|___\n\n  KILLED 🔪\n";
      return manStructure;

    case 6:
      manStructure = "";
      manStructure += "   👩‍🦰\n";
      manStructure += "  \\|/\n";
      manStructure += "   |\n";
      manStructure += "   |\n";
      manStructure += "  / \\\nSAVED\n";
      return manStructure;
  }
}

function saveMan(chance) {
  switch (chance) {
    case 1:
      console.log(hangingMan(1));
      return;

    case 2:
      console.log(hangingMan(2));
      return;

    case 3:
      console.log(hangingMan(3));
      return;

    case 4:
      console.log(hangingMan(4));
      return;

    case 5:
      console.log(hangingMan(5));
      console.log("[answer]: ", answer);
      return;

    case 6:
      console.log(hangingMan(6));
      return;
  }
}

function isAnswerCorrect(userInput, answer) {
  return answer === userInput;
}

function promptUserToAnswer() {
  let chancesLeft = 5;
  let index = 1;

  console.log("                                       chances left:", 5);

  while (index <= 5) {
    let userInput = prompt("\nguess word ? :");

    if (isAnswerCorrect(userInput, answer)) {
      saveMan(6);
      console.log("Ohh God ! Thank you for saving 😇!");
      break;
    }

    saveMan(index);

    if (index != 5) {
      console.log("PLEASE SAVE ME🥹!")
    }

    console.log("------------------------------------");
    console.log("\n                                    chances left:",
      --chancesLeft);

    index++;
  }
}

function play() {
  console.log("QUESTION: music has ?");
  promptUserToAnswer();
}

play();
