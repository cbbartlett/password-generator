// Assignment Code
var generateBtn = document.querySelector("#generate");
var completedPassword = [];

// Write password to the #password input
function writePassword() {
  var password = completedPassword;
  var passwordText = document.querySelector("#password");

  console.log("Button has been clicked!");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var lowerCha = ["p", "y", "f", "g", "c", "l", "a", "o", "e", "u", "i", "d", "h", "t", "n", "s", "q",
               "j", "k", "x", "b", "m", "w", "v", "z"];
var upperCha = ["P", "Y", "F", "G", "C", "L", "A", "O", "E", "U", "I", "D", "H", "T", "N", "S", "Q",
               "J", "K", "X", "B", "M", "W", "V", "Z"];
var nums = ["0","1","2","3","4","5","6","7","8","9"];
var specialCha = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(",
                  ")", "-", "_", "=", "+", "[", "{", "]", "}", "|", ";", ":", "'",
                  ",", "<", ".", ">", "/", "?"];

var applicable = [];
var cP = "";

if(generateBtn.addEventListener("click", function generatePassword()
{
  var numberOfChar = window.prompt("How many characters would you like your password to be?");
  console.log(numberOfChar);

  var yesSpecial = window.confirm("Would you like to include special characters in your password?");
  console.log(yesSpecial);

  var yesLower = window.confirm("Would you like to include lower case letters in your password?");
  console.log(yesLower);

  var yesUpper = window.confirm("Would you like to include Upper case letters in your password?");
  console.log(yesUpper);

  var yesNums = window.confirm("Would you like to include numbers in your password?");
  console.log(yesNums);

  if(yesSpecial)
    applicable = applicable.concat(specialCha);

  if(yesLower)
    applicable = applicable.concat(lowerCha);

  if(yesUpper)
    applicable = applicable.concat(upperCha);

  if(yesNums)
    applicable = applicable.concat(nums);


  for(i = 0; i < numberOfChar; i++)
  {
    completedPassword = completedPassword.concat(applicable[Math.floor(Math.random()*applicable.length)]);
  }

  for(var i = 0; i < numberOfChar; i++)
  {
    cP += completedPassword[i];
  }

  console.log(cP);
  writePassword();
  return completedPassword;
}))

function generatePassword()
{
  return password;
}
