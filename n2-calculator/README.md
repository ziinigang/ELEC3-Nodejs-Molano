# N2 - Modular Calculator

**Name:** Zheena Collene V. Molano  
**Section:** IV-BSIT-B  
**Course:** ELEC 3 - Node.js

## Description

This activity demonstrates how to create a modular calculator using Node.js. It uses separate JavaScript files for calculator operations and result formatting.

## Files

- `index.js` - Main program that reads commands and numbers from the terminal.
- `operations.js` - Contains addition, subtraction, multiplication, division, and average functions.
- `formatter.js` - Formats the calculator results.
- `screenshots/` - Contains screenshots of the program operations and error handling.

## Features

- Addition
- Subtraction
- Multiplication
- Division
- Average
- Division-by-zero error handling
- Unknown operation handling
- Invalid number handling
- Uses the built-in Node.js `os` module to display the computer name.

## How to Run

Open the terminal inside the `n2-calculator` folder.

### Calculator Operations

Run these commands to test the five calculator operations:

```bash
node index.js add 12 8
node index.js subtract 12 8
node index.js multiply 12 8
node index.js divide 12 8
node index.js average 12 8
```

### Error Handling Tests

**1. Division by zero**

```bash
node index.js divide 12 0
```

**Expected output:** `Error: Cannot divide by zero.`

**2. Unknown operation**

```bash
node index.js modulo 12 8
```

**Expected output:** `Error: Unknown operation.`

**3. Invalid number**

```bash
node index.js add hello 8
```

**Expected output:** `Error: Please enter valid numbers.`