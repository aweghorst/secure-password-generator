// Assignment Code

var generateBtn = document.querySelector("#generate");

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
  generateBtn.addEventListener("click", writePassword);