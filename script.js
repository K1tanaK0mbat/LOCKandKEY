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
function Welcome () {
 var userChoice= window.confirm(("Before we start, you have to choose how you'd like your password."));
  
 if (userChoice) {
  window.prompt("Answer the following questions for:Length, Case, Numbers, Special");
 }
}


function Length (){
    aNumber=Number(window.prompt("Pick a number from 8-128 Characters",""));

}

function Case () {
   var Cases=prompt("Upper or Lower, or Both");
       if(Cases=== "Upper") {
       Upper();
       }else if(Cases==="Lower"){
       Lower();
        
       } else if (Cases==="Both") {
        Both();
       }}
        
    function Numbers () {
        var Numbers=window.confirm("Do You Want Numbers in Your Passowrd?");
        if (Numbers) {
           numbas();
        }}
    
    function specialch() {
       var spec=window.confirm("Do You Want Special Characters?");
        if(spec) {
            Special();
        }
        }
 
        
        
        generateBtn.addEventListener("click",
        function (){
          var require = [
  function () {Welcome()},
  function() { Length() },
  function() { Case() },
  function() { Numbers() },
  function() { specialch() },
  function() {writePassword()}
]
for (i = 0; i < require.length; i++) {
  require[i]();
}
        });