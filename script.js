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


var Upper=function(){
    const Alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXTZ"; 
    return Alphabet[Math.floor(Math.random() * alphabet.length)]

}
var Lower=function(){
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
  return alphabet[Math.floor(Math.random() * alphabet.length)]
}

var Both=function(){
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  return alphabet[Math.floor(Math.random() * alphabet.length)]; 
}

var numba=function(){
let x=Math.floor((Math.random()*9)+1);
}

var Special=function(){
var characters="$#_()*&%@"
return characters[Math.floor(Math.random() * characters.length)]; 
}

// Write password to the #password input
function Criteria() {
    var userChoice=window.prompt ("Choose Criteria:Length, Case, Numbers, Special");
if (userChoice==="Length"){
    aNumber=Number(window.prompt("Pick a number from 8-128 Characters",""));

}

 else if (userChoice=== "Case") {
      var Cases= window.prompt("Upper or Lower, or Both");
       if(Cases=== "Upper") {
       var value2=Upper;
       }else if(Cases==="Lower"){
       var value2=Lower;
        
       } else if (Cases==="Both") {
        var value2=Both;
       }
        
    } else if (userChoice=== "Numbers") {
        var numbas=window.confirm("Do You Want Numbers in Your Passowrd?");
        if (numbas) {
           var value3=numba;
        }
    }
    else if (userChoice=== "Special") {
       var spec=window.confirm("Do You WantSpecial Characters?");
        if(spec) {
            var value4=Special;
        }
        }

}

function generatePassword () {
        var randomValues =" "
        var stringValues = value2+value3+value4;
        var sizeOfCharacter = aNumber;
        for (var i = 0; i < numberOfCharacters; i++) {
           randomValues = randomValues+stringValues.charAt(Math.floor(Math.random() * sizeOfCharacter));
        }
        return randomValues;
}


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
window.addEventListener("click",Criteria);