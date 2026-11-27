// Name: Zheena Collene V. Molano
// Section: IV-BSIT-B
// Activity: N2 - Modular Calculator
// Date: November 28, 2026

const operations = require("./operations");
const formatter = require("./formatter");
const os = require("os");

const operation = process.argv[2];
const num1 = Number(process.argv[3]);
const num2 = Number(process.argv[4]);

if (!operation || process.argv.length < 5) {
    console.log("Usage: node index.js <operation> <number1> <number2>");
    console.log("Operations: add, subtract, multiply, divide, average");
    process.exit(1);
}

if (isNaN(num1) || isNaN(num2)) {
    console.log("Error: Please enter valid numbers.");
    process.exit(1);
}

try {
    let result;

    switch (operation) {
        case "add":
            result = operations.add(num1, num2);
            break;
        case "subtract":
            result = operations.subtract(num1, num2);
            break;
        case "multiply":
            result = operations.multiply(num1, num2);
            break;
        case "divide":
            result = operations.divide(num1, num2);
            break;
        case "average":
            result = operations.average(num1, num2);
            break;
        default:
            console.log("Error: Unknown operation.");
            process.exit(1);
    }

    console.log(formatter.formatResult(operation, num1, num2, result));
    console.log(`Computer: ${os.hostname()}`);

} catch (error) {
    console.log("Error: " + error.message);
}