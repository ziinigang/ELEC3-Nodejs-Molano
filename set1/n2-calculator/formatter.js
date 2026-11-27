// Name: Zheena Collene V. Molano
// Section: IV-BSIT-B
// Activity: N2 - Modular Calculator
// Date: November 28, 2026

function formatResult(operation, num1, num2, result) {
    const symbols = {
        add: "+",
        subtract: "-",
        multiply: "*",
        divide: "/",
        average: "average"
    };

    return `${num1} ${symbols[operation]} ${num2} = ${result}`;
}

module.exports = { formatResult };