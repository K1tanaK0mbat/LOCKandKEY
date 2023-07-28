// Assignment code here
//WHEN I click the button to generate a password
//THEN I am presented with a series of prompts for password criteria
//WHEN prompted for password criteria
//THEN I select which criteria to include in the password
//WHEN prompted for the length of the password
//THEN I choose a length of at least 8 characters and no more than 128 characters
//WHEN asked for character types to include in the password
//THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var header=document.querySelector("#header");

function Upper(){
    const Alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXTZ"; 
    return Alphabet[Math.floor(Math.random() * alphabet.length)]

}
function Lower(){
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
  return alphabet[Math.floor(Math.random() * alphabet.length)]
}

function Both(){
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  return alphabet[Math.floor(Math.random() * alphabet.length)]; 
}

function numba(){
let x=Math.floor((Math.random()*9)+1);
}

function Special(){
var characters="$#_()*&%@"
return characters[Math.floor(Math.random() * characters.length)]; 
}

// Write password to the #password input

function Criteria() {
    var userChoice=window.prompt ("Choose Criteria:Length, Case, Numbers, Special");
if (userChoice==="Length"){
    aNumber=Number(window.prompt("Pick a number from 8-128 Characters",""));
var value1=aNumber
}

 else if (userChoice=== "Case") {
      var Cases= window.prompt("Upper or Lower, or Both");
       if(Cases=== "Upper") {
       Upper();
       }else if(Cases==="Lower"){
       Lower();
        
       } else if (Cases==="Both") {
        Both();
       }
        
    } else if (userChoice=== "Numbers") {
        var Numbers=window.confirm("Do You Want Numbers in Your Passowrd?");
        if (Numbers) {
           numbas();
        }
    }
    else if (userChoice=== "Special") {
       var spec=window.confirm("Do You WantSpecial Characters?");
        if(spec) {
            Special();
        }
        }

}

public static String randomCharacterString(int length) {
  String randomCharacters = value2+value3+value4;
  StringBuffer randomString = new StringBuffer(length);
  Random random = new Random();

  for (int i = 0; i < length; i++) {
      int randomIndex = random.nextInt(randomCharacters.length());
      char randomChar = randomCharacters.charAt(randomIndex);
      randomString.append(randomChar);
  }

  return randomString.toString();
}

function generatePassword () {
  String randomString1 = randomCharacterString(value1);
  System.out.println("Your Password " + randomString1);
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}




// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);
header.addEventListener("click",Criteria);