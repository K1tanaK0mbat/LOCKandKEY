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

function Length(){
    aNumber=Number(window.prompt("Pick a number from 8-128 Characters",""));
}

function Upper(){
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXTZ";  
}
function Lower(){
    var characters = "abcdefghiklmnopqrstuvwxyz";  
}
function Both (){
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";  
}

function numba(){
let x=Math.floor((Math.random()*9)+1);
}

function Special(){
var characters="$#_()*&%@"
}

// Write password to the #password input
function Criteria() {
    var userChoice=window.prompt ("Choose Criteria:Length, Up/LowerCase, Numbers, Special");
if (userChoice==="Length"){
    Length();
}

 else if (userChoice=== "Case") {
       window.prompt("Upper or Lower, or Both");
       if(userChoice=== "Upper") {
        Upper();
       }else if(userChoice==="Lower"){
        Lower();
       } else if (userChoice==="Both") {
        Both ();
       }
        
    } else if (userChoice=== "Numbers") {
        var numbas=window.confirm("Yes","No");
        if (numbas) {
           numba();
        }
    }
    else if (userChoice=== "Special") {
       var spec=window.confirm("Special Characters");
        if(spec) {
            Special();
        }
        }

}


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", Criteria);