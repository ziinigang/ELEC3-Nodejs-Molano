// Name: Zheena Collene V. Molano
// Section: IV-BSIT-B
// Activity: N3 - File Manager
// Date: November 28, 2026

const fs = require("fs");
const path = require("path");

const filesDir = path.join(__dirname, "files");

if (!fs.existsSync(filesDir)) {
    fs.mkdirSync(filesDir);
}

const command = process.argv[2];
const fileName = process.argv[3];
const content = process.argv.slice(4).join(" ");

const filePath = path.join(filesDir, fileName || "");

switch (command) {
    case "create":
        if (!fileName || !content) {
            console.log("Usage: node index.js create <filename> <content>");
            break;
        }

        fs.writeFileSync(filePath, content);
        console.log(`File created: ${fileName}`);
        break;

    case "read":
        if (!fileName) {
            console.log("Please provide a file name.");
            break;
        }

        if (!fs.existsSync(filePath)) {
            console.log(`File not found: ${fileName}`);
            break;
        }

        console.log(fs.readFileSync(filePath, "utf8"));
        break;

    case "update":
        if (!fileName || !content) {
            console.log("Usage: node index.js update <filename> <text>");
            break;
        }

        if (!fs.existsSync(filePath)) {
            console.log(`File not found: ${fileName}`);
            break;
        }

        fs.appendFileSync(filePath, content);
        console.log(`File updated: ${fileName}`);
        break;

    case "delete":
        if (!fileName) {
            console.log("Please provide a file name.");
            break;
        }

        if (!fs.existsSync(filePath)) {
            console.log(`File not found: ${fileName}`);
            break;
        }

        fs.unlinkSync(filePath);
        console.log(`File deleted: ${fileName}`);
        break;

    case "list":
        const files = fs.readdirSync(filesDir);

        if (files.length === 0) {
            console.log("No files found.");
            break;
        }

        files.forEach((file) => {
            const fullPath = path.join(filesDir, file);
            const extension = path.extname(file);
            const contents = fs.readFileSync(fullPath, "utf8");

            console.log("------------------------------");
            console.log(`Full Path: ${fullPath}`);
            console.log(`File Name: ${path.basename(file)}`);
            console.log(`Extension: ${extension}`);
            console.log(`Contents: ${contents}`);
        });
        break;

    default:
        console.log("Usage:");
        console.log("node index.js create <filename> <content>");
        console.log("node index.js read <filename>");
        console.log("node index.js update <filename> <text>");
        console.log("node index.js delete <filename>");
        console.log("node index.js list");
}