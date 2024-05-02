require('../src/db/mongoose')
const User = require('../src/models/users')

// User.findByIdAndUpdate('66326564a9d6574062d46c3d', { age: 5 }, { new: true }).then((user) => {
//     console.log(user)
//     return User.countDocuments({ age: 5 })
// })
//     .then((result) => {
//         console.log(result)
//     })
//     .catch((e) => {
//         console.log(e)

//     })

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, { age: age })
    const count = await User.countDocuments({ age: age })
    return count
}

updateAgeAndCount('662d7e8857b9a41f4ab2f1c9', 5).then((count) => {
    console.log(count)

}).catch((e) => {
    console.log(e)

})


