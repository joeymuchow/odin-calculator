let operator ="";
let number1 = "0";
let number2 = "";
const display = document.querySelector(".display");
const message = document.querySelector(".message");

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
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

const digitButtons = document.querySelectorAll(".numbers button");
digitButtons.forEach(element => {
    element.addEventListener("click", (e) => {
        message.textContent = "";
        if (operator) {
            number2 += e.target.textContent;
        } else {
            number1 === "0" ? number1 = e.target.textContent : number1 += e.target.textContent;
        }
        display.textContent = `${number1} ${operator} ${number2}`;
    })
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
        display.textContent = `${number1} ${operator} ${number2}`;
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