/*
RANDOM CODES
*/

//NOTE: submit button is initially disabled upon loading of this page see <body> in html [cite: 176]
var code = ' '; //to store generated codes and initialize to empty value [cite: 176]
var getCode = ''; //to store entered code [cite: 177]
var btnvalue; //for button boolean value [cite: 178]

//create variable to hold the type of characters we want to show as codes [cite: 178]
var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#\$'; [cite: 179]

//Function to generate combination of characters
function generateCode() {
  //Generate character multiple times using a loop
  for (i = 1; i <= 8; i++) {
    var char = Math.random() * str.length; //random select a character from the variable and then store in a new variable
    code += str.charAt(char); //accumulate the generated character into a string of 8 characters
  }
  return code; //return the final accumulated string when loop ends
}

//Get HTML element to display
document.getElementById("codes").innerHTML = generateCode();

//determine when to able or disable button [cite: 182]
function disableButton(btnvalue) { // This is refer to as parameter that can pass data (a boolean in this case) into the function [cite: 182]
  document.getElementById("submit").disabled = btnvalue; //able/disable button [cite: 183]

  if (btnvalue == true) { //test if button is disabled or enabled [cite: 188]
    //set button and label color translucent [cite: 188]
    document.getElementById("submit").style.backgroundColor = "rgba(73, 119, 209, 0.3)"; [cite: 189, 194]
    document.getElementById("submit").style.color = "rgba(255, 255, 255, 0.5)"; [cite: 189]
  } else {
    //set button and label color with no transparency [cite: 192]
    document.getElementById("submit").style.backgroundColor = "rgba(73, 119, 209, 1)"; [cite: 195, 204]
    document.getElementById("submit").style.color = "rgba(255, 255, 255, 1)"; [cite: 195]
  }
}

//listen to user input code [cite: 202]
var codebox = document.getElementById("codeentered"); //get textbox [cite: 202]
codebox.addEventListener("input", evaluateCode); //listen to code entered in textbox [cite: 205]

//run function if detected user had entered a character in textbox [cite: 207]
function evaluateCode() {
  getCode = document.getElementById("codeentered").value; //get character entered [cite: 212]
  var charset1 = getCode.trim(); //remove any hidden characters entered [cite: 214]
  var charset2 = code.trim(); //remove any hidden characters generated [cite: 216]

  //test if code entered matches the number of generated characters [cite: 218]
  if (charset1.length == charset2.length && charset1 == charset2) { [cite: 218]
    disableButton(false); //if match, Run the function to enable button [cite: 220]
  }
}