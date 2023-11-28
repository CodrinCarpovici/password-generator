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
let pass = "";

function getPasswordOptions() {
  passwordProps.arrLength = prompt(
    "Length of password? (8 to 128 characters long)"
  );
  //confirmatin prompts asking user for inputs
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
  //added empty string to this function call so that it clears the previous one
  pass = "";
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
    //loop to generate a password as long as the user wishes
    for (let i = 0; i < passwordProps.arrLength; i++) {
      //conditions to check
      let conditions = [
        passwordProps.isLowerCase && lowerCasedCharacters,
        passwordProps.isUpperCase && upperCasedCharacters,
        passwordProps.isNumeric && numericCharacters,
        passwordProps.isSpecial && specialCharacters,
      ];

      let randomCondition;
      //random condition selected to only generate one of the 4 types of characters
      do {
        randomCondition = getRandom(conditions.filter(Boolean));
      } while (!randomCondition);
      //add random character to password
      pass += getRandom(randomCondition);
    }

    return pass;
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
