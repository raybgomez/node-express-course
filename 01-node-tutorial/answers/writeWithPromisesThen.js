const fs = require('fs/promises')

const content = "Hello World!\nWhat's up?\nYou good?\n"

fs.writeFile('temp.txt', content)

    .then(() => {
        console.log('File is written');

        return fs.readFile('temp.txt', 'utf-8')
    })

    .then(data => {
        console.log(data)
    })

    .catch((error) => {
        console.log("An error occurred: ", error)
    })