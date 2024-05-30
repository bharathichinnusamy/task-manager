const express = require('express')
require('./mongoose')
const userRouter = require('../routers/user')
const taskRouter = require('../routers/task')
const { findById } = require('../models/users')

const app = express()

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

module.exports = app