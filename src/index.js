const calc = () => {
  // Resets State
  const init = () => {
    screen.innerHTML = "";
    calculator.displayValue = "0";
    calculator.firstOperand = null;
    calculator.waitingForSecondOperand = false;
    calculator.operator = null;
  };

  // Calculator operations
  const calculator = {
    displayValue: "0",
    firstOperand: null,
    waitingForSecondOperand: false,
    operator: null,
    answer: null
  };

  function inputNum(number) {
    const { displayValue } = calculator;
    if (calculator.waitingForSecondOperand === true) {
      calculator.displayValue = number;
      calculator.waitingForSecondOperand = false;
    } else {
      calculator.displayValue =
        displayValue === "0" ? number : displayValue + number;
    }
  }

  // Calculations
  function calculate(firstOperand, secondOperand, operator) {
    switch (operator) {
      case "+":
        return firstOperand + secondOperand;
      case "-":
        return firstOperand - secondOperand;
      case "x":
        return firstOperand * secondOperand;
      case "/":
        return firstOperand / secondOperand;
      default:
        return secondOperand;
    }
  }

  // Handles Next Number
  const handleNextNum = (nextOperator) => {
    const { firstOperand, displayValue, operator } = calculator;
    const inputValue = parseFloat(displayValue);

    if (operator && calculator.waitingForSecondOperand) {
      calculator.operator = nextOperator;
      return;
    }

    if (firstOperand === null && !isNaN(inputValue)) {
      calculator.firstOperand = inputValue;
    } else if (operator) {
      const result = calculate(firstOperand, inputValue, operator);
      calculator.displayValue = String(result);
      calculator.firstOperand = result;
    }
    calculator.waitingForSecondOperand = true;
    calculator.operator = nextOperator;
  };

  // Handles Display
  const screen = document.getElementById("calcScreen");
  const updateDisplay = (disp) => {
    screen.innerHTML = disp;
  };

  // Clear Button
  let clearBtn = document.getElementById("clear");
  clearBtn.addEventListener("click", init);

  // Buttons Event Delegation

  const buttonHandler = () => {
    const btn = document.getElementById("calculatorButtons");

    // Click Shadow animation
    btn.addEventListener("click", (event) => {
      const { target } = event;
      if (target.classList.contains("numberBtn")) {
        inputNum(target.innerHTML);
        updateDisplay(calculator.displayValue);
      }

      if (target.classList.contains("operatorBtn")) {
        handleNextNum(target.innerHTML);
        updateDisplay(calculator.displayValue);
      }
      // Click Shadow animation
      event.target.classList.toggle("shadow");
      setTimeout(() => {
        event.target.classList.toggle("shadow"); // Toggles Shadow on Mouse Hover
      }, 300);
    });
  };

  buttonHandler();
};

calc();
