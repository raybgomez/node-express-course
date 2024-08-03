const fs = require('fs/promises')

async function writer() {
    try {
        const content = "Hello World!\nWhat's up?\nYou good?\n";

        await fs.writeFile('temp.txt', content);

        console.log('File is written')
    } catch (error) {
        console.error('Error writing to file', error);
    }
}


async function reader() {
    try {
        const data = await fs.readFile('temp.txt', 'utf-8');

        console.log(data)
    } catch (error) {
        console.error('Error reading the file', error);
    }
}

async function readWrite() {
    try {
        await reader();

        await writer():
    } catch (error) {
        console.error('Error in readWrite function', error)
    }
}

readWrite();