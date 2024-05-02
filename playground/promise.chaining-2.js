require('../src/db/mongoose')
const Task = require('../src/models/tasks')


// Task.findByIdAndDelete("662b2a58d99bbf07099d33b9").then((task) => {
//     return Task.countDocuments({ completed: false })
// }).then((result) => {
//     console.log(result)

// }).catch((e) => {
//     console.log(e)

// })

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ completed: false })
    return count
}
deleteTaskAndCount('662db6d2028d3220c245456e').then((count) => {
    console.log(count)

}).catch((e) => {
    console.log(e)

})