let operator ="";
let number1 = "";
let number2 = "";
const display = document.querySelector(".display");

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
    return num1 / num2;
}

function operate(operator, num1, num2) {
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
        if (operator) {
            number2 += e.target.textContent;
        } else {
            number1 += e.target.textContent;
        }
        display.textContent = `${number1} ${operator} ${number2}`;
    })
});

const operators = document.querySelectorAll(".operators");
operators.forEach(element => {
    element.addEventListener("click", (e) => {
        // TODO update this so that if there are two numbers and
        // the user presses an operator again instead of equals
        // the equation happens for the first operator and the 
        // result is displayed with the second operator now added
        operator = e.target.textContent;
        display.textContent = `${number1} ${operator} ${number2}`;
    });
});

document.querySelector(".equals").addEventListener("click", () => {
    display.textContent = operate(operator, Number(number1), Number(number2));
});

document.querySelector(".clear").addEventListener("click", () => {
    display.textContent = "0";
    operator = "";
    number1 = "";
    number2 = "";
});