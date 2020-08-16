// Assignment code here
function generatePassword(){
  // list of characters
  var lower = "abcdefghijklmnopqrstuvwxyz";
  var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numeric = "0123456789";
  var special = "!@#$%^&*";


  // asking user for input
  var useLowerCase=confirm("Would you like lowercase characters?");
  var useUpperCase=confirm("Would you like upperchase characters?");
  var useNumeric=confirm("Would you like numeric characters?");
  var useSpecial=confirm("Would you like special characters?");

  // loop to validate inputs
  while (useLowerCase == false && useUpperCase == false && useNumeric == false && useSpecial == false){
    alert("You must select at least one type of character");
    useLowerCase=confirm("Do you want to include lowercase characters?");
    useUpperCase=confirm("Do you want to include uppercase characters?");
    useNumeric=confirm("Do you want to include numeric characters?");
    useSpecial=confirm("Do you want to include special characters?");
  }

  var passwordLength=parseInt(prompt("For password length, please choose between 8 and 128 characters."));
  while(passwordLength < 8 || passwordLength > 128) {
    alert("You must select between 8 and 128 characters");
    passwordLength=parseInt(prompt("For password length, please choose between 8 and 128 characters."));  

  }

  // arrays
  var all = '';

  if (useLowerCase==true){
    all += lower;
  }
  if (useUpperCase==true){
    all += upper;
  }
  if (useNumeric==true){
    all += numeric;
  }
  if (useSpecial==true){
    all += special;
  }

  var password = '';
  for(var i = 0; i < passwordLength; i++)
    {
      password += all.charAt(Math.floor(Math.random()*all.length));
    }
      return password;

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
