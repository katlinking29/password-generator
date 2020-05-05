// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Variable to store password character output options
var alphaCapital = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"] 
var alphaLowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var number = ["0","1", "2", "3", "4", "5", "6", "7", "8", "9"]
var spCharacter = ["~", "!", "#", "$", "%", "^", "&", "*", "-", "+", ",", "'", "*", "=", "/", ":", "<", ">", "?", "\",;", "[", "]", "{", "}"]

// User input to set password parameters
var userPasswordCapital= confirm("Would you like to include capital letters in your password?")
var userPasswordNumber = confirm("Would you like to include numbers in your password?")
var userPasswordSpCharacter= confirm("Would you like to include special characters in your password?")
var userPasswordLength = prompt("How many characters would you like to include in your password?")


// Based on the user's input, return random indices from the arrays
var passwordParameters = {
  // Does the user want to inlcude capital letters in their password?
  letterCase: function() {

      if (userPasswordCapital === true) {
         return Math.floor(Math.random() * alphaCapital.length)
        // pull from the capital array; use mathrandom to choose a random number, and then when you call the function, you'll do the array name.index number from the array (random number)
      }
  
      else if (userPasswordCapital === false) {
         return Math.floor(Math.random() * alphaLowerCase.length)
        // pull from the alphalowercase array
      }
  },
  // Does the user want to inlcude numbers in their password?
  numberCheck: function() {
      if (userPasswordNumber === true) {
         return Math.floor(Math.random() * number.length)
     }

     else if (userPasswordNumber === false) {
      return ("null")
   }
  },
// Does the user want to include special characters in their password?
  spCharacterCheck: function() {

      if (userPasswordSpCharacter === true) {
          return Math.floor(Math.random() * spCharacter.length)
       } 

       else if (userPasswordSpCharacter === false) {
        return ("null")
     }
  },
// How many characters does the user want their password to be?
  passwordLength: function() {

    if (userPasswordLength < 8) {
      alert("Your password must be at least 8 characters long"); 
      prompt("How many characters would you like to include in your password?");
      return(this.userPasswordLength)
      // how do I adjust the value for userPasswordLength based on the user's prompt input?
    }

    else if (userPasswordLength > 128) {
      alert("Your password cannot exceed 128 characters"); 
      prompt("How many characters would you like to include in your password?");
      return this.userPasswordLength
    } 

    else if (userPasswordLength > 8 || userPasswordLength < 128 || userPasswordLength == 8 || userPasswordLength == 128) {
      return userPasswordLength
    }
  }
}


for (var i=0; i < userPasswordLength; i++) {

console.log(passwordParameters.letterCase())
console.log(passwordParameters.numberCheck())
console.log(passwordParameters.spCharacterCheck())
console.log(passwordParameters.passwordLength())

}

// Next steps, I need to input the index value from my arrays, based on the user's selections. 