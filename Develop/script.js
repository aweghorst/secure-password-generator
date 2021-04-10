// Assignment Code
//Prompting the user for a password
function passwordPrompt() {
  //Password Length
  var passwordLength = parseInt(prompt("How many characters would you like your password to be?"));
  if (isNaN(passwordLength) === true) {
    alert("Answer must be a number!");
    passwordPrompt();
  }
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Choose a length between 8 and 128!");
    passwordPrompt();
  }

  //Password Criteria Prompting
  var isNumbers = confirm("Would you like it to contain numbers?");
  var isUpperCase = confirm("Would you like it to contain UPPERCASE letters?");
  var isLowerCase = confirm("Would you like it to contain lowercase letters?");
  var isSpecialCharacters = confirm("Would you like it to contain Special characters?");

  //Check if user selected at least one option
  if (
    isNumbers === false &&
    isUpperCase === false &&
    isLowerCase === false &&
    isSpecialCharacters === false) {
    alert("Your password must contain numbers, letters, or special characters!");
    passwordPrompt();
  }

  //Create final alert string
  var alertString = "Your password will be " + passwordLength + " characters long and will contain the following characters: "
  if (isNumbers === true) {
    alertString += "'Numbers', ";
  }
  if (isUpperCase === true) {
    alertString += "'Uppercase', ";
  }
  if (isLowerCase === true) {
    alertString += "'Lowercase', ";
  }
  if (isSpecialCharacters === true) {
    alertString += "'Special Characters', ";
  }
  alert(alertString.slice(0, -2));

  //Create an object from the user input
  var userResponse = {
    passwordLength: passwordLength,
    isNumbers: isNumbers,
    isUpperCase: isUpperCase,
    isLowerCase: isLowerCase,
    isSpecialCharacters: isSpecialCharacters,
  };

  return userResponse;
}

//Build the Password
function passwordCreate(userResponse) {
  //--ARRAYS--
  //Numbers Array
  var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  //Upper Case Letters Array
  var upperCaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  //Lower Case Letters Array
  var lowerCaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  //Special Characters Array
  var specialCharacters = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', '\(', '\)', '\{', '\}', '\[', '\]', '~', '\`', '-', '_', '.'];

  //Build array of desired character types
  var charTypes = [];
  if (userResponse.isNumbers === true) {
    charTypes.push(numbers);
  }
  if (userResponse.isUpperCase === true) {
    charTypes.push(upperCaseLetters);
  }
  if (userResponse.isLowerCase === true) {
    charTypes.push(lowerCaseLetters);
  }
  if (userResponse.isSpecialCharacters === true) {
    charTypes.push(specialCharacters);
  }

  //--Generate Password--
  //Select a random Array
  function selectFromArray(list) {
    var randIndex = Math.floor(Math.random() * list.length);
    var randItem = list[randIndex];
    return randItem;
  }

  //Build Password
  var password = '';

  for (i = 0; i < userResponse.passwordLength; i++) {
    var charArray = selectFromArray(charTypes);
    var randCharacter = selectFromArray(charArray);
    password += randCharacter;
  }
  return password;
}

//Master Function to Generate Password
function generatePassword() {
  var userResponse = passwordPrompt();
  var password = passwordCreate(userResponse);
  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);