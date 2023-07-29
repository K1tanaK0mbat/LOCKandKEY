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
var StartBtn = document.querySelector("#start");

StartBtn.addEventListener("click",
  function () {
    var require = [
      function () { Welcome() },
      function () { Length() },
      function () { Case() },
      function () { Numbers() },
      function () { specialch() },
    ]
    for (i = 0; i < require.length; i++) {
      require[i]();
    }
  });

function Upper(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}


function Lower(length) {
    let result = '';
    const characters = 'abcdefghijklmnopqrstuvwxyz';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}


function Both(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}

function numbas(len) {
  {
    var text = " ";
    var charset = "123456798";
    for( var i=0; i < len; i++ )
        text += charset.charAt(Math.floor(Math.random() * charset.length));
    return text;
}
 
}


function Special(len) {
  var text = " ";
    var charset = "'$#_()*&%@'";
    for( var i=0; i < len; i++ )
        text += charset.charAt(Math.floor(Math.random() * charset.length));
    return text;
}

// Write password to the #password input
function Welcome() {
  var userChoice = window.confirm(("Before we start, you have to choose how you'd like your password."));

  if (userChoice) {
    window.confirm("Answer the following questions for:Length, Case, Numbers, Special");
  }
}


let Length =function() {
  var length=prompt("How many characters in your password?");
let strToNr=length;
strToNr=Number(strToNr);
  if (length > 8 && length < 128) {
    return strToNr;
  }
}

function Case() {
  var Cases = prompt("Upper or Lower, or Both");
  if (Cases === "Upper") {
    Upper();
  } else if (Cases === "Lower") {
    Lower();

  } else if (Cases === "Both") {
    Both();
  }
}

function Numbers() {
  var Numbers = window.confirm("Do You Want Numbers in Your Passowrd?");
  if (Numbers) {
    numbas();
  }
}

function specialch() {
  var spec = window.confirm("Do You Want Special Characters?");
  if (spec) {
    Special();
  }
}


var randomPass= function combinedCharacers() {
  var value1=Case();
  var value2=Numbers();
  var value3=specialch();
  var together=value1+value2+value3;
  
}

function generatePassword() {

}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  

}



generateBtn.addEventListener("click", writePassword);