var choice, next_calculation, num1, num2;


function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    return x / y;
}

function modulo(x, y) {
    return x % y;
}

console.log("Select operation.");
console.log("1.Add");
console.log("2.Subtract");
console.log("3.Multiply");
console.log("4.Divide");

while (true) {
    choice = prompt("Enter choice(1/2/3/4): ");

    if (choice = ["1", "2", "3", "4", "5"]) {
        num1 = prompt(Number.parseFloat(input("Enter first number: ")));
        num2 = prompt(Number.parseFloat(input("Enter second number: ")));


        if (choice === "1") {
            console.log(num1, "+", num2, "=", add(num1, num2))
        }

        else if (choice === "2") {
            console.log(num1, "-", num2, "=", subtract(num1, num2))
        }

        else if (choice === "3") {
            console.log(num1, "-", num2, "=", multiply(num1, num2))
        }

        else if (choice === "4") [
            console.log(num1, "-", num2, "=", divide(num1, num2))
        ]



        next_calculation = prompt("Let's do next calculation? (y/n): ");

        if (next_calculation === "n") {
            break;
        }
    } else {
        console.log("Invalid Input");
    }
}
