const express = require('express')
require('./mongoose')
const userRouter = require('../routers/user')
const taskRouter = require('../routers/task')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)


app.listen(port, () => {
    console.log("server is up on port " + port)

})

const bcript = require('bcryptjs')

// const myFunction = async () => {
//     const password = 'Bharathi'
//     const hasedPassword = await bcript.hash(password, 8)
//     console.log(password)
//     console.log(hasedPassword)

//     const isMatch = await bcript.compare('Barathi', hasedPassword)
//     console.log(isMatch)

// }

// myFunction()