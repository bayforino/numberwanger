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
const backSpaceButton = document.getElementById("backspace");

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

function backSpace() {
  if (display.textContent > 9) {
    let displayValue = display.textContent.toString();
    display.textContent = parseInt(displayValue.slice(0, -1));
  } else {
    display.textContent = 0;
    displayIsAnswer = true;
  }
}

function operate(operator, a, b) {
  operatorNew = operator;
  if (number1 === undefined) {
    number1 = display.textContent;
  } else {
    number2 = display.textContent;
    display.textContent = "";
    if (operatorLast !== "") {
      if (operatorLast === "multiply") {
        answer = multiply(number1, number2);
      } else if (operatorLast === "divide") {
        if (number1 == 0 || number2 == 0) {
          answer = `5318008`;
        } else {
          answer = divide(number1, number2);
        }
      } else if (operatorLast === "add") {
        answer = add(number1, number2);
      } else if (operatorLast === "subtract") {
        answer = subtract(number1, number2);
      }
    }

    display.textContent = answer;
    number1 = answer;
    number2 = undefined;
  }
  displayIsAnswer = true;
  operatorLast = operatorNew;
}

function removeTransition(e) {
  if (e.propertyName !== "box-shadow") return;
  this.classList.remove("active");
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
  operate(``, number1, number2);
  display.textContent = answer;
});

clearButton.addEventListener("click", () => {
  clearAll();
});

backSpaceButton.addEventListener("click", () => {
  backSpace();
});

const buttons = document.querySelectorAll(".calculator-button");
buttons.forEach((button) =>
  button.addEventListener("transitionend", removeTransition)
);

window.addEventListener("keydown", function (e) {
  if (e.keyCode === 56 && e.shiftKey === true) {
    const key = document.querySelector(`button[id="multiply"]`);
    key.classList.add("active");
    key.click();
  } else if (e.keyCode === 187 && e.shiftKey === true) {
    const key = document.querySelector(`button[id="add"]`);
    key.classList.add("active");
    key.click();
  } else if (e.keyCode === 187 || e.keyCode === 13) {
    const key = document.querySelector(`button[id="equals"]`);
    key.classList.add("active");
    key.click();
  } else {
    const key = document.querySelector(`button[data-key='${e.keyCode}']`);
    key.classList.add("active");
    key.click();
  }
});
