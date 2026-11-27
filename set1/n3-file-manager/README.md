# N3 - File Manager

**Name:** Zheena Collene V. Molano  
**Section:** IV-BSIT-B  
**Course:** ELEC 3 - Node.js

## Description

This activity demonstrates how to create, read, update, delete, and list text files using Node.js. It uses the built-in `fs` and `path` modules.

## Files

- `index.js` - Main program that handles the file manager commands.
- `files/` - Contains the text files created using the program.
- `screenshots/` - Contains screenshots of the create, read, update, delete, and list commands.

## How to Run

Open the terminal inside the `n3-file-manager` folder.

### Create a File

```bash
node index.js create notes.txt "Hello Node.js"
```

### Read a File

```bash
node index.js read notes.txt
```

### Update a File

```bash
node index.js update notes.txt " Updated content"
```

### Delete a File

```bash
node index.js delete notes.txt
```

### List All Files

```bash
node index.js list
```