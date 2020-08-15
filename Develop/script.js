// Assignment code here
function generatePassword(){
  // list of characters
  var lower = "abcdefghijklmnopqrstuvwxyz";
  var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var number = "0123456789";
  var special = "!@#$%^&*";

  var passwordString="";

  // asking user for input
  var useLowerCase=confirm("Would you like lowercase characters?");
  var useUpperCase=confirm("Would you like upperchase characters?");
  var useNumeric=confirm("Would you like numeric characters?");
  var useSpecial=confirm("Would you like special characters?");

  // 

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
