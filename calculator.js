let operator ="";
let number1 = "0";
let number2 = "";
const display = document.querySelector(".display");
const message = document.querySelector(".message");

function add(num1, num2) {
    const solution = num1 + num2;
    if (solution % 1 === 0) {
        return solution;
    }
    return solution.toFixed(2);
}

function subtract(num1, num2) {
    const solution = num1 - num2;
    if (solution % 1 === 0) {
        return solution;
    }
    return solution.toFixed(2);
}

function multiply(num1, num2) {
    const solution = num1 * num2;
    if (solution % 1 === 0) {
        return solution;
    }
    return solution.toFixed(2);
}

function divide(num1, num2) {
    if (num2 === 0) {
        message.textContent = "DON'T DIVIDE BY ZERO!!!"
        return 0;
    }
    const solution = num1 / num2;
    if (solution % 1 === 0) {
        return solution;
    }
    return solution.toFixed(2);
}

function operate(operator, num1, num2) {
    num1 = Number(num1);
    num2 = Number(num2);
    let result;
    switch(operator) {
        case "+":
            result = add(num1, num2);
            break;
        case "-":
            result = subtract(num1, num2);
            break;
        case "x":
            result = multiply(num1, num2);
            break;
        case "/":
            result = divide(num1, num2);
            break;
        default:
            console.log("Unknown operator");
    }
    return result;
}

function updateDisplay() {
    if (number1 && operator && number2) {
        display.textContent = `${number1} ${operator} ${number2}`;
    } else if (number1 && operator) {
        display.textContent = `${number1} ${operator}`;
    } else {
        display.textContent = number1;
    }
}

const digitButtons = document.querySelectorAll(".number");
digitButtons.forEach(element => {
    element.addEventListener("click", (e) => {
        message.textContent = "";
        if (operator) {
            number2 += e.target.textContent;
        } else {
            number1 === "0" ? number1 = e.target.textContent : number1 += e.target.textContent;
        }
        updateDisplay();
    })
});

document.querySelector(".decimal").addEventListener("click", (e) => {
    if (operator) {
        if (!number2.includes(".")) {
            !number2 ? number2 = "0." : number2 += e.target.textContent;
        }
    } else {
        if (!number1.includes(".")) {
            number1 += e.target.textContent;
        }
    }
    updateDisplay();
});

const operators = document.querySelectorAll(".operators");
operators.forEach(element => {
    element.addEventListener("click", (e) => {
        message.textContent = "";
        if (operator && number1 && number2) {
            number1 = operate(operator, number1, number2);
            number2 = "";
            operator = e.target.textContent;
        } else if (number1) {
            operator = e.target.textContent;
        }
        updateDisplay();
    });
});

document.querySelector(".equals").addEventListener("click", () => {
    message.textContent = "";
    if (operator && number1 && number2) {
        display.textContent = operate(operator, number1, number2);
    }
});

document.querySelector(".clear").addEventListener("click", () => {
    display.textContent = "0";
    message.textContent = "";
    operator = "";
    number1 = "0";
    number2 = "";
});

document.querySelector(".backspace").addEventListener("click", (e) => {
    const displayValue = display.textContent;
    const displayArray = displayValue.split(" ");
    if (displayArray.length === 3) {
        // number1, operator, and number2 have values
        number1 = displayArray[0];
        operator = displayArray[1];
        const splitNum = displayArray[2].split("");
        // remove last digit
        splitNum.pop();
        number2 = splitNum.join("");
    } else if (displayArray.length === 2) {
        // number1 and operator have values
        // number2 is empty
        number1 = displayArray[0];
        //remove operator by emptying variable
        operator = "";
        number2 = "";
    } else if (displayArray.length === 1) {
        // number 1 has a value
        // operator and number2 are empty
        const splitNum = displayArray[0].split("");
        // remove last digit
        splitNum.pop();
        // setting a "0" when number1 is empty for initial state
        number1 = splitNum.join("") || "0";
        operator = "";
        number2 = "";
    } else {
        // everything is back to initial state
        number1 = "0";
        operator = "";
        number2 = "";
    }
    updateDisplay();
});