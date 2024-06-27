const { readFileSync, writeFileSync, readFile, writeFile } = require('fs')

readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err)
    }
    const first = result
    readFile('./content/second.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err)
        }
        const second = result
        writeFile('./content/result-async.txt',
            `Here is the result: ${first}, ${second}`
            , (err, result) => {
                if (err) {
                    console.log(err)
                    return
                }
                console.log('done with this task')
            }
        )
    })
})
console.log('starting the next one')