$(document).ready(applyClickHandlers)

function applyClickHandlers(){
  $("#number-block").on("click", ".number", numberButtonHandler)
  $("#operator-column").on("click", ".operator", operatorButtonHandler )
  $("#equals").on("click", equalsButtonHandler)
  function numberButtonHandler(event){
    console.log(event);
  }


  function operatorButtonHandler(event){
    console.log(event);
  }

  function equalsButtonHandler(event){
    console.log(event);
  }


}

var calculationArray = [];
var displayArray = [];
var stringNumberToPush = "";
var calculationResult = null;


function doMath(){


}
