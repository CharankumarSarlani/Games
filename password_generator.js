const passwordLength = +prompt("Length of the password");

let randomUnicode = "";
let password = "";

function generateRandomUnicode(randomUnicode) {
  return String.fromCharCode(randomUnicode);
}

const startRange = 48;
const endRange = 112;
const difference = endRange - startRange;

function generatePassword(passwordLength) {
  if(passwordLength === 0) {
    return password;
  }

  randomUnicode = Math.floor(Math.random() * difference) + startRange;
  password = password + generateRandomUnicode(randomUnicode);

  return generatePassword(passwordLength - 1);
}

generatePassword(passwordLength);
console.log("The Generated Password is:", password);
