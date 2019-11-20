$(document).ready(applyClickHandlers)

var calculationArray = [];
var displayArray = [];
var stringNumberToPush = "";

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
    else if (calculationArray > '' && isNaN(calculationArray[calculationArray.length - 1]) && stringNumberToPush === "") {
      console.log('poping opertaor')
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
      stringNumberToPush = calculationArray[0];
      calculationArray.push(stringNumberToPush);
      stringNumberToPush = "";
      updateDisplay();
    }
    if (calculationArray[1] === undefined){
      return;
    }

    calculationArray.push(stringNumberToPush);
    if(calculationArray.length === 3){
    stringNumberToPush = "";
    displayArray = [];
    var answer = calculate(calculationArray[0], calculationArray[1], calculationArray[2]);
    displayArray.push(answer);
    updateDisplay();
    }
    if(calculationArray.length > 3){
      console.log("in the second if")
      stringNumberToPush = "";
      displayArray = [];

      while(calculationArray > 1){
        for(var calcIndex = 0; calcIndex < calculationArray.length; calcIndex++ ){
          if (calculationArray[calcIndex] === "*" || calculationArray[calcIndex] === "/" ){
          var resultOfPemdas = calculate(calculationArray[calcIndex -1], calculationArray[calcIndex], calculationArray[calcIndex + 1]);
          calculationArray.splice(calcIndex - 1, 3, resultOfPemdas);
          --calcIndex;
        }
      }
        //Another for loop for the + - with call index --
        for (var calcIndex1 = 0; calcIndex1 < calculationArray.length; calcIndex1++) {
          if (calculationArray[calcIndex1] === "+" || calculationArray[calcIndex1] === "-") {
            var resultOfPemdas1 = calculate(calculationArray[calcIndex1 - 1], calculationArray[calcIndex1], calculationArray[calcIndex1 + 1]);
            calculationArray.splice(calcIndex - 1, 3, resultOfPemdas1);
            --calcIndex1;
          }

        }

      //Another for loop for the + - with call index --
    }

    }
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
  if (displayArray[displayArray.length - 1] === "."){
    return;
  }
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
  if(calculationArray.length > 3){
    console.log('in the if statement calculation!, do the work in the for loop')
  }else{
    calculationArray.splice(0,3, result);
  }
  if (result === Infinity) {
    result = "Error"
  }
  if(!Number.isInteger(result)){
    return ""+ result.toFixed(9);
  }
    return result + "";
  }
