const mongoose = require('mongoose')

const connectionString = 'mongodb+srv://battleangel2000:<password>@nodeexpressprojects.9zbl2.mongodb-stage.net/03-TASK-MANAGER?retryWrites=true&w=majority&appName=NodeExpressProjects'

mongoose.connect(connectionString).then(() => console.log('CONNECTED TO THE DB...')).catch((err) => console.log('err'))