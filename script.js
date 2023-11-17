// Array of special characters to be included in password
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

// Function to prompt user for password options
let passwordProps = {};

function getPasswordOptions() {
  passwordProps.arrLength = prompt(
    "Length of password? (8 to 128 characters long)"
  );
  passwordProps.isLowerCase = confirm("Lower case characters? (y/n)");
  passwordProps.isUpperCase = confirm("Upper case characters? (y/n)");
  passwordProps.isNumeric = confirm("Numeric characters? (y/n)");
  passwordProps.isSpecial = confirm("Special characters? (y/n)");
}

// Function for getting a random element from an array
function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Function to generate password with user input
function generatePassword() {
  //Call getPasswordOptions to start user prompts
  getPasswordOptions();

  if (
    //Check if length input is a number
    !isNaN(passwordProps.arrLength) &&
    //Check if length is between limits
    passwordProps.arrLength >= 8 &&
    passwordProps.arrLength <= 128 &&
    //Check if at least one of the character types has been selected
    (passwordProps.isLowerCase ||
      passwordProps.isUpperCase ||
      passwordProps.isNumeric ||
      passwordProps.isSpecial)
  ) {

  } else {
    //alert user that input is not valid
    alert("Invalid password criteria. Please check your inputs and try again.");
  }
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
