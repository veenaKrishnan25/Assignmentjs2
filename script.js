let btnPlus = document.getElementById("plus");
let btnMinus = document.getElementById("minus");
let btnMultiplication = document.getElementById("multiplication");
let btnDivision = document.getElementById("division");
let btnEqual = document.getElementById("equal");
let displayScreen = document.getElementById("display");
let btn1 = document.getElementById("num1");
let btn2 = document.getElementById("num2");
let btn3 = document.getElementById("num3");
let btn4 = document.getElementById("num4");
let btn5 = document.getElementById("num5");
let btn6 = document.getElementById("num6");
let btn7 = document.getElementById("num7");
let btn8 = document.getElementById("num8");
let btn9 = document.getElementById("num9");
let btn0 = document.getElementById("num0");

 
let firstNumber;
let secondNumber;
let operator;
let result;
 let isSecond = false;
  

function formulaPlus(){
    // a = Number(displayScreen.value);
    // b = Number(displayScreen.value);
    // displayScreen.value = a + b;
     firstNumber = displayScreen.value;
  operator = "+";
  isSecond = true;
}

function formulaMinus(){
  firstNumber = displayScreen.value;
  operator = "-";
  isSecond = true;
}

function formulaMultiplication(){
   firstNumber = displayScreen.value;
  operator = "*";
  isSecond = true;
}

function formulaDivision(){
    firstNumber = displayScreen.value;
  operator = "/";
  isSecond = true;
}   

function one(){
   if (isSecond) {
    displayScreen.value = "1";
    isSecond = false;
  } else {
    displayScreen.value += "1";
  }
}

function two(){
    if (isSecond) {
    displayScreen.value = "2";
    isSecond = false;
  } else {
    displayScreen.value += "2";
  }
}
function three(){
    if (isSecond) {
    displayScreen.value = "3";
    isSecond = false;
  } else {
    displayScreen.value += "3";
  }
}


function four(){
    if (isSecond) {
    displayScreen.value = "4";
    isSecond = false;
  } else {
    displayScreen.value += "4";
  }
}

function five(){
    if (isSecond) {
    displayScreen.value = "5";
    isSecond = false;
  } else {
    displayScreen.value += "5";
  }
}

function six(){
    if (isSecond) {
    displayScreen.value = "6";
    isSecond = false;
  } else {
    displayScreen.value += "6";
  }
}

function seven(){
    if (isSecond) {
    displayScreen.value = "7";
    isSecond = false;
  } else {
    displayScreen.value += "7";
  }
}

function eight(){
    if (isSecond) {
    displayScreen.value = "8";
    isSecond = false;
  } else {
    displayScreen.value += "8";
  }
}

function nine(){
    if (isSecond) {
    displayScreen.value = "9";
    isSecond = false;
  } else {
    displayScreen.value += "9";
  }
}

function zero(){
     if (isSecond) {
    displayScreen.value = "0";
    isSecond = false;
  } else {
    displayScreen.value += "0";
  }
}

function resultEqual(){
    secondNumber = displayScreen.value;
    let a = Number(firstNumber);
    let b = Number(secondNumber);
    
    if (operator === "+") {
    result = a + b;
  } else if (operator === "-") {
    result = a - b;
  } else if (operator === "*") {
    result = a * b;
  } else if (operator === "/") {
    if (b === 0) {
      displayScreen.value = "Error";
      return;
    }
    result = a / b;
  }
    displayScreen.value = result;

}



