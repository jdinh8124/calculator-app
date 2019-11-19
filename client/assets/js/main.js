$(document).ready(applyClickHandlers)

function applyClickHandlers(){
  $("#number-block").on("click", ".number", numberButtonHandler)
  $("#operator-column").on("click", ".operator", operatorButtonHandler )
  $("#equals").on("click", equalsButtonHandler)
  function numberButtonHandler(event){
    var inputtedNumber = "";
    inputtedNumber = $(event.currentTarget).find("p").text();
    console.log(inputtedNumber);
    stringNumberToPush += inputtedNumber;
    displayArray.push(inputtedNumber);
    console.log(displayArray)
    updateDisplay();


  }
}

  function operatorButtonHandler(event){
    console.log(event);
    var inputtedOperator ="";
    inputtedOperator = $(event.currentTarget).find("p").text();
    //Might be missing a step += into a variable? but I am not sure
    displayArray.push(inputtedOperator);
    updateDisplay();
    calculationArray.push(stringNumberToPush);
    console.log(calculationArray);
    calculationArray.push(inputtedOperator);
    console.log(calculationArray);
    stringNumberToPush = "";
  }

  function equalsButtonHandler(event){
    console.log(event);
    calculationArray.push(stringNumberToPush);
    stringNumberToPush = "";
    displayArray = [];
    updateDisplay();
  }


  function updateDisplay() {
    var displayText = displayArray.join("");
    $("#display-text").text(displayText);
  }



var calculationArray = [];
var displayArray = [];
var stringNumberToPush = "";
var calculationResult = null;


function calculate(num1, operator, num2){
  var number1 = parseFloat(num1);
  var number2 = parseFloat(num2);
  var result = null;
    switch (operator) {
      case "+":
        result = number1 + number2;
        break;
      case "-":
        result = number1 + number2;
        break;
      case "/":
        result = number1 / number2;
        break;
      case "x":
      case "X":
      case "*":
        result = number1 * number2;
        break;
    }
    return result;
  }

  console.log(calculate("19", "+" , "1"));
