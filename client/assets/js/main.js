$(document).ready(applyClickHandlers)

function applyClickHandlers(){
  $("#number-block").on("click", ".number", numberButtonHandler)
  $("#operator-column").on("click", ".operator", operatorButtonHandler )
  $("#equals").on("click", equalsButtonHandler)
  $("#c-button").on("click", function () {
    console.log("hello");

    console.log("finished");
  })

  $("#ac-button").on("click", acDisplay);
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
    var inputtedOperator ="";
    inputtedOperator = $(event.currentTarget).find("p").text();
    displayArray.push(inputtedOperator);
    updateDisplay();
    calculationArray.push(stringNumberToPush);
    console.log(calculationArray);
    calculationArray.push(inputtedOperator);
    console.log(calculationArray);
    stringNumberToPush = "";
  }

  function equalsButtonHandler(event){
    if (stringNumberToPush === ""){
      return;
    }
    if (calculationArray[1] === undefined){
      return;
    }
    calculationArray.push(stringNumberToPush);
    stringNumberToPush = "";
    displayArray = [];
    updateDisplay();
    var answer = calculate(calculationArray[0], calculationArray[1], calculationArray[2]);
    console.log(answer);
    displayArray.push(answer);
    updateDisplay();
  }

  function updateDisplay() {
    var displayText = displayArray.join("");
    $("#display-text").text(displayText);
  }

  function acDisplay(){
    calculationArray = [];
    displayArray = [];
    stringNumberToPush = "";
    $("#display-text").text(0);
  }



var calculationArray = [];
var displayArray = [];
var stringNumberToPush = "";
// var calculationResult = null;


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
