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
      function () { Lengthy() },
      function () { Case() },
      function () { Numbers() },
      function () { specialch() },
    ]
    for (i = 0; i < require.length; i++) {
      require[i]();
    }
  });




// Write password to the #password input
function Welcome() {
  var userChoice = window.confirm(("Before we start, you have to choose how you'd like your password."));

  if (userChoice) {
    window.confirm("Answer the following questions for:Length, Case, Numbers, Special");
  }
}


let Lengthy =function() {
  let strToNr=prompt("How many characters in your password?");
strToNr=Number(strToNr);
  if (Number > 8 && Number < 128) {
    return strToNr;
  
  } console.log(strToNr);
}

function Case(length) {
  var Cases = prompt("Upper or Lower, or Both");
  if (Cases === "Upper") {
    function Upper(length) {
      let result = '';
      if(length<=128);
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      let counter = 0;
      while (counter < length) {
        result += characters[Math.floor(Math.random() * characters.length)];
        counter += 1;
      }
      return result;
    } 
    console.log(Upper(length));

  } else if (Cases === "Lower") {
    function Lower(length) {
    let result = '';
    length<=128;
    const characters = 'abcdefghijklmnopqrstuvwxyz';
    let counter = 0;
    while (counter < length) {
      result +=  characters[Math.floor(Math.random() * characters.length)];
      counter += 1;
    }
    return result;
}
console.log(Lower(length));

  } else if (Cases === "Both") {
    function Both(length) {
    let result = '';
    length<=128;
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let counter = 0;
    while (counter < length) {
      result += characters[Math.floor(Math.random() * characters.length)];
      counter += 1;
    }
    return result;
}
console.log(Both(length));
  }

}


function Numbers(length) {
  var Numbers = window.confirm("Do You Want Numbers in Your Passowrd?");
  if (Numbers) {
    function numbas(length) {
    var text = " ";
    length<=128;
    var charset = "123456798";
    for( var i=0; i < length; i++ )
        text += charset.charAt(Math.floor(Math.random() * charset.length));
    return text;
}
console.log(numbas(length));}
}

function specialch(length) {
  var spec = window.confirm("Do You Want Special Characters?");
  if (spec) {
    function Special(length) {
      length<=128;
  var text = " ";
    var charset = "'$#_()*&%@'";
    for( var i=0; i < length; i++ )
        text += charset.charAt(Math.floor(Math.random() * charset.length));
    return text;
}
console.log(Special(length));
  }
}

function generatePassword() {
  function GenPass(result) {
    const Var1= Case(Lengthy);
     const var2=Numbers(Lengthy); 
    const var3=specialch(Lengthy);
let passkey=Var1+var2+var3;
result= passkey;
}
console.log(GenPass);

}


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
 
}



generateBtn.addEventListener("click", writePassword);