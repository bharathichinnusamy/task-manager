const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const Task = require('../models/tasks')

const userShema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("email.is invalid")
            }
        }
    },
    password: {
        type: String,
        required: true,
        trim: true,

        validate(value) {
            if (value.length < 6) {
                throw new Error("Error:Password must contain more than 6 letters!")
            }
            if (value.includes("password")) {
                throw new Error("Error:Password should not contain password word")
            }
        }
    },
    age: {
        type: Number,
        default: 0,
        validate(value) {
            if (value < 0) {
                throw new Error('age must be a positive number')
            }
        }
    },
    tokens: [{
        token: {
            type: String,
            required: true
        }

    }]
})
userShema.virtual('task', {
    ref: 'Task',
    localField: '_id',
    foreignField: 'owner'
})

userShema.methods.toJSON = function () {
    const user = this
    const userObject = user.toObject()
    delete userObject.password
    delete userObject.tokens
    return userObject
}

userShema.methods.generateAuthToken = async function () {
    const user = this
    const token = jwt.sign({ _id: user._id.toString() }, "mynewcourse")
    user.tokens = user.tokens.concat({ token })
    await user.save()
    return token
}

userShema.statics.findByCredentials = async (email, password) => {

    const user = await mongoose.model("User", userShema).findOne({ email })

    if (!user) {
        throw new Error("Unable to login")
    }
    const isMatch = await bcrypt.compare(password, user.password)

    if (!isMatch) {
        throw new Error("Unable to login")
    }
    return user
}

//hasing the password before saving
userShema.pre('save', async function (next) {
    const user = this

    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8)
    }
    next()

})

//Delete user tasks when user is removed
userShema.pre('remove', async function (next) {
    const user = this
    await Task.deleteMany({ owner: user._id })
    next()

})
const User = mongoose.model('User', userShema)

module.exports = User