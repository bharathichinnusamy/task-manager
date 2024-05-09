const express = require('express')
require('./mongoose')
const userRouter = require('../routers/user')
const taskRouter = require('../routers/task')
const { findById } = require('../models/users')

const app = express()
const port = process.env.PORT || 3000

// app.use((req, res, next) => {
//     if (req.method === "GET") {
//         res.send("GET requests are disabled")
//     }
//     else {
//         next()
//     }

// })
// app.use((req, res, next) => {
//     res.status(503).send("This site is under maintainence please try later!")

// })

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)


app.listen(port, () => {
    console.log("server is up on port " + port)

})
// const Task = require('../models/tasks')
// const User = require('../models/users')
// const main = async () => {
//     // const task=await Task.findById('663c35782afa8ac09c18c97c')
//     // //console.log(task)
//     // await task.populate('owner').execPopulate()
//     // console.log(task.owner)

//     const user = await User.findById('663c3258431c21bce321c68d')
//     await user.populate('task').execPopulate()
//     console.log(user.task)

// }
// main()