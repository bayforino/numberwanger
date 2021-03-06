const display = document.getElementById("display");
const clearButton = document.getElementById("clear");
const multiplyButton = document.getElementById("multiply");
const divideButton = document.getElementById("divide");
const addButton = document.getElementById("add");
const subtractButton = document.getElementById("subtract");
const oneButton = document.getElementById("one");
const twoButton = document.getElementById("two");
const threeButton = document.getElementById("three");
const fourButton = document.getElementById("four");
const fiveButton = document.getElementById("five");
const sixButton = document.getElementById("six");
const sevenButton = document.getElementById("seven");
const eightButton = document.getElementById("eight");
const nineButton = document.getElementById("nine");
const zeroButton = document.getElementById("zero");
const equalsButton = document.getElementById("equals");

operatorNew = "";
operatorLast = "";
let number1;
let number2;
let answer;
let displayIsAnswer = true;

//functions

function add(a, b) {
  return +a + +b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function clearAll() {
  display.textContent = "0";
  number1 = undefined;
  number2 = undefined;
  answer = undefined;
  displayIsAnswer = true;
  operatorNew = "";
  operatorLast = "";
}

function operate(operator, a, b) {
    operatorNew = operator;
  if (number1 === undefined) {
      number1 = display.textContent;
      displayIsAnswer = true;
      console.log(`setting number 1 as ${number1}`);
  } else {
    operatorLast = operatorNew;
    console.log(`operatorLast is now ${operatorLast}`)
    number2 = display.textContent;
    display.textContent = "";
    console.log(`setting number 2 as ${number2}`);
    console.log(
      `number 1 is: ${number1}, number 2 is: ${number2}, operatorLast is: ${operatorLast} operatorNew is: ${operatorNew}`
    );
    if (operatorLast !== "") {
      if (operatorLast === "multiply") {
          console.log('multiplying');
        answer = multiply(number1, number2);
      } else if (operatorLast === "divide") {
          console.log('dividing')
        answer = divide(number1, number2);
      } else if (operatorLast === "add") {
          console.log('adding');
        answer = add(number1, number2);
      } else if (operatorLast === "subtract") {
          console.log('subtracting');
        answer = subtract(number1, number2);
      }
      
    }
    
    display.textContent = answer;
    number1 = answer;
    number2 = undefined;
    displayIsAnswer = true;
  }
}

//event listeners

document.querySelectorAll(".number-button").forEach((item) => {
  item.addEventListener("click", (event) => {
    if (displayIsAnswer) {
      displayIsAnswer = false;
      display.textContent = "";
    }
    display.textContent += item.textContent;
  });
});

multiplyButton.addEventListener("click", () => {
  operate(`multiply`, number1, number2);
});

divideButton.addEventListener("click", () => {
  operate(`divide`, number1, number2);
});

addButton.addEventListener("click", () => {
  operate(`add`, number1, number2);
});

subtractButton.addEventListener("click", () => {
  operate(`subtract`, number1, number2);
});

equalsButton.addEventListener("click", () => {
  operate(operatorNew, number1, number2);
  display.textContent = answer;
});

clearButton.addEventListener("click", () => {
  clearAll();
});
