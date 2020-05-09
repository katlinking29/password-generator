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
var num = ["0","1", "2", "3", "4", "5", "6", "7", "8", "9"]
var spCharacter = ["~", "!", "#", "$", "%", "^", "&", "*", "-", "+", ",", "'", "*", "=", "/", ":", "<", ">", "?", "\",;", "[", "]", "{", "}"]

// defining the generatePassword function so that when I click the button the password is input and able to be viewed on the DOM
function generatePassword() {

// setting a variable to contain the password as a string
var thePassword = ("")

// creating a function that generates a random number for the indexes I will pull from my arrays based on user input
function randomNumber(pw) {
  return (Math.floor(Math.random() * pw))
}
// Does the user want to inlcude capital letters in their password?
var userPasswordCase= confirm("Would you like to include capital letters in your password?")

// Does the user want to inlcude numbers in their password?
var userPasswordNumber = confirm("Would you like to include numbers in your password?")
console.log(userPasswordNumber)

// Does the user want to include special characters in their password?
var userPasswordSpCharacter= confirm("Would you like to include special characters in your password?")

// How many characters does the user want their password to be?
var userPasswordLength = prompt("How many characters would you like to include in your password?")
    if (userPasswordLength < 8) {
      alert("Your password must be at least 8 characters long"); 
      prompt("How many characters would you like to include in your password?");
    }

    else if (userPasswordLength > 128) {
      alert("Your password cannot exceed 128 characters"); 
      prompt("How many characters would you like to include in your password?");
    } 

// A for looop is added so that I loop through code above and pull the indices from my arrays. It will loop through based on the password length the user chooses
  for (var i=0; i < userPasswordLength; i++) {

    // choose a value from the alphaCapital array based on if the user input is true 
    if (userPasswordCase === true) {
      var passwordOutput = alphaCapital[randomNumber(alphaCapital.length)]
    }

    // choose a value from the num array based on if the user input is true 
    else if (userPasswordNumber === true) {
      var passwordOutput = num[randomNumber(num.length)]
    }

    // choose a value from the spCharacter array based on if the user input is true 
    else if (userPasswordSpCharacter === true) {
      var passwordOutput = spCharacter[randomNumber(spCharacter.length)]
    }

    // choose a value from the alphalowerCase arrays based on if the user input is false for uppercase letters
    else if (userPasswordCase === false) {
      var passwordOutput = alphaLowerCase[randomNumber(alphaLowerCase.length)]
    }

    thePassword = thePassword + passwordOutput 
  }
  
  return thePassword
  }
