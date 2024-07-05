const fs = require('fs');
const path = require('path');

const filePath = path.resolve(__dirname, '../content/big.txt')

const stream = fs.createReadStream(filePath, { encoding: 'utf8', highWaterMark: 200 });

let chunkCounter = 0;

stream.on('data', (chunk) => {
    chunkCounter++;
    console.log(`Chunk ${chunkCounter}:`, chunk);
});

stream.on('end', () => {
    console.log(`Stream ended. Total number of chunks received: ${chunkCounter}`);
});

stream.on('error', (error) => {
    console.error('An error occurred:', error);
});