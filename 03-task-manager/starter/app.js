console.log('Task Manager App')
require('./db/connect')
require('dotenv').config();


const express = require('express')
const app = express();
const tasks = require('./routes/tasks')
const notFound = require('./middleware/not-found')
const errorHandleMiddleware = require('./middleware/error-handler')

//middleware
app.use(express.static('./public'))
app.use(express.json())

//routes

app.use('/api/v1/tasks', tasks)
app.use(notFound)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 3000

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URL)
        app.listen(port, console.log(`Server is listening on port ${port}...`))
    } catch (error) {
        console.log(error)
    }
}

app.listen(port, console.log(`server is listening on port ${port}...`))