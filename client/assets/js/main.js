$(document).ready(applyClickHandlers)

var calculationArray = [];
var displayArray = [];
var stringNumberToPush = "";
// var calculationResult = null;

function applyClickHandlers(){
  $("#number-block").on("click", ".number", numberButtonHandler)
  $("#operator-column").on("click", ".operator", operatorButtonHandler )
  $("#equals").on("click", equalsButtonHandler)
  $("#decimal").on("click", decimalButton)
  $("#c-button").on("click", function () {
    displayArray.pop();
    updateDisplay()
    stringNumberToPush = stringNumberToPush.slice(0, - 1)
  })

  $("#ac-button").on("click", acDisplay);
  function numberButtonHandler(event){
    if(calculationArray > 0){
      calculationArray = [];
      displayArray = [];
    }
    var inputtedNumber = "";
    inputtedNumber = $(event.currentTarget).find("p").text();
    stringNumberToPush += inputtedNumber;
    displayArray.push(inputtedNumber);
    updateDisplay();


  }
}
    //if nothing dont push operator, else if push operator else pop 2 and push new operator and string
  function operatorButtonHandler(event){
    var inputtedOperator = "";
    if(displayArray[0] === undefined){
      return;
    }
    else if(calculationArray > '' && isNaN(calculationArray[calculationArray.length - 1])) {
      calculationArray.pop();
      displayArray.pop();
      inputtedOperator = $(event.currentTarget).find("p").text();
      displayArray.push(inputtedOperator);
      updateDisplay();
      calculationArray.push(inputtedOperator);
      stringNumberToPush = "";
    }
    else{
    inputtedOperator = $(event.currentTarget).find("p").text();
    displayArray.push(inputtedOperator);
    updateDisplay();
    if(stringNumberToPush > ""){
      calculationArray.push(stringNumberToPush);
    }
    calculationArray.push(inputtedOperator);
    stringNumberToPush = "";
  }
  }
  function equalsButtonHandler(){
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

function decimalButton(event){
  var inputtedNumber = "";
  inputtedNumber = $(event.currentTarget).find("p").text();
  stringNumberToPush += inputtedNumber;
  displayArray.push(inputtedNumber);
  updateDisplay();
}

function calculate(num1, operator, num2){
  var number1 = parseFloat(num1);
  var number2 = parseFloat(num2);
  var result = null;
    switch (operator) {
      case "+":
        result = number1 + number2;
        break;
      case "-":
        result = number1 - number2;
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
    calculationArray.splice(0,3, result);
    return result;
  }
