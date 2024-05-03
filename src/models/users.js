const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')

const userShema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
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
        lowercase: true,

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
    }
})
userShema.pre('save', async function (next) {
    const user = this

    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8)
    }
    next()

})

const User = mongoose.model('User', userShema)

module.exports = User