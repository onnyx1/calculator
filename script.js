function Calculator() {
  this.firstNumber = undefined;
  this.secondNumber = undefined;
  this.operator = "";
  this.operate = function () {
    switch (this.operator) {
      case "add":
        return this.add();
        break;
      case "subtract":
        return this.subtract();
        break;
      case "multiply":
        return this.multiply();
        break;
      case "divide":
        return this.divide();
        break;
    }
  };
  this.add = function () {
    return this.firstNumber + this.secondNumber;
  };
  this.subtract = function () {
    return this.firstNumber - this.secondNumber;
  };
  this.multiply = function () {
    return this.firstNumber * this.secondNumber;
  };
  this.divide = function () {
    return this.firstNumber / this.secondNumber;
  };
}

let cal = new Calculator();
const buttons = document.querySelectorAll(".num");
const operators = document.querySelectorAll(".operator");
const output = document.querySelector(".result");
const clear = document.querySelector(".clear");
const negative = document.querySelector(".negative");
const equals = document.querySelector(".equals");
const percent = document.querySelector(".percent");

let second = false;
let operationButton = false;
for (let button of buttons) {
  button.addEventListener("click", () => {
    if (operationButton === true) {
      output.textContent = "";
      operationButton = false;
    }

    output.textContent += button.textContent;

    if (second === false) {
      cal.firstNumber = Number(output.textContent);
    } else {
      cal.secondNumber = Number(output.textContent);
    }
  });
}

for (let button of operators) {
  button.addEventListener("click", () => {
    second = true;
    if (cal.firstNumber !== undefined && cal.secondNumber !== undefined) {
      output.textContent = cal.operate();
      cal.firstNumber = cal.operate();
      cal.secondNumber = undefined;
    }

    switch (button.textContent) {
      case "+":
        cal.operator = "add";
        operationButton = true;
        break;
      case "-":
        cal.operator = "subtract";
        operationButton = true;
        break;
      case "*":
        cal.operator = "multiply";
        operationButton = true;
        break;
      case "/":
        cal.operator = "divide";
        operationButton = true;
        break;
    }
  });
}

equals.addEventListener("click", () => {
  console.log(cal.firstNumber);
  console.log(cal.secondNumber);

  output.textContent = cal.operate();
  cal.firstNumber = cal.operate();
  cal.secondNumber = undefined;
});

clear.addEventListener("click", () => {
  cal = new Calculator();
  second = false;
  operationButton = false;
  output.textContent = "";
});

negative.addEventListener("click", () => {
  if (operationButton === true) {
    output.textContent = "";
    operationButton = false;
  }

  output.textContent = "-" + output.textContent;

  if (second === true) {
    cal.secondNumber = -1 * Number(output.textContent);
  } else {
    cal.firstNumber = -1 * Number(output.textContent);
  }
});

percent.addEventListener("click", () => {
  let r = Number(output.textContent) / 100;
  output.textContent = r;

  if (second === true) {
    cal.secondNumber = r;
  } else {
    cal.firstNumber = r;
  }
});
