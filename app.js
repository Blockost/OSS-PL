const fs = require('fs');
const readline = require('readline');
const parser = require('./parser');

const reader = readline.createInterface({
    input: fs.createReadStream(__dirname + '/helloWorld.oss')
});

let writer = fs.createWriteStream(__dirname + '/_.js')

let lineNumber = 1;
let statement;
reader.on('line', (line) => {
    statement = parser.tryParse(line, lineNumber)
    ++lineNumber
    writer.write(statement + '\n', 'utf-8')
});

// When EOF reached in the source code, close the js file
reader.on('close', () => {
    writer.close()
})

// When the js file is closed, interpret it!
writer.on('close', () => {
    require('./_.js')
})