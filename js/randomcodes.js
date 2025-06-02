/*
RANDOM CODES
*/

var code = ''; // to store generated codes and initialize to empty value (CHANGED from ' ')
var getCode = ''; //to store entered code
var btnvalue; //for button boolean value

//create variable to hold the type of characters we want to show as codes
var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#\$';

//Function to generate combination of characters
function generateCode() {
  // Ensure the 'code' variable is reset for each generation if this function were called multiple times,

  // If it's initialized with a space, that space will be prepended.
  for (i = 1; i <= 8; i++) {
    var char = Math.random() * str.length;
    code += str.charAt(char);
  }
  return code;
}

//Get HTML element to display
document.getElementById("codes").innerHTML = generateCode();

//determine when to able or disable button
function disableButton(btnvalue) { // This is refer to as parameter that can pass data (a boolean in this case) into the function
  document.getElementById("submit").disabled = btnvalue; //able/disable button

  if (btnvalue == true) { //test if button is disabled or enabled
    //set button and label color translucent
    document.getElementById("submit").style.backgroundColor = "rgba(73, 119, 209, 0.3)";
    document.getElementById("submit").style.color = "rgba(255, 255, 255, 0.5)";
  } else {
    //set button and label color with no transparency
    document.getElementById("submit").style.backgroundColor = "rgba(73, 119, 209, 1)";
    document.getElementById("submit").style.color = "rgba(255, 255, 255, 1)";
  }
}


//listen to user input code
var codebox = document.getElementById("codeentered"); //get textbox
if (codebox) { // Ensure codebox exists before adding event listener
  codebox.addEventListener("input", evaluateCode); //listen to code entered in textbox
}


//run function if detected user had entered a character in textbox
function evaluateCode() {
  getCode = document.getElementById("codeentered").value; //get character entered
  var charset1 = getCode.trim(); //remove any hidden characters entered
  var charset2 = code.trim(); //remove any hidden characters generated

  //test if code entered matches the number of generated characters
  if (charset1.length == charset2.length && charset1 == charset2) {
    disableButton(false); //if match, Run the function to enable button
  } else {
      disableButton(true); // Re-disable button if code no longer matches
  }
}