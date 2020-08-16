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
  if (useLowerCase==true){
    caseArray.push(lowerCaseChar);
  }
  if (useUpperCase==true){
    caseArray.push(upperCaseChar);
  }
  if (useNumeric==true){
    caseArray.push(numericChar);
  }
  if (useSpecial==true){
    caseArray.push(specialChar)
  }

  for(var i=0;i<passwordLength;i++){
      var randomCharArrayNum;
      var selectedCharArray;
      var randomCharNum;
      var randomChar

      randomCharArrayNum= parseInt(Math.floor(Math.random()*caseArray.length))
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
