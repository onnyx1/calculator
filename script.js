function Calculator() {
  this.firstNumber = 0;
  this.secondNumber = 0;
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
    console.log("hi");
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

