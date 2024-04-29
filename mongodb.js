// CRUD (create,read,update and delete)

// const mongodb = require("mongodb-legacy")
// const MongoClient = mongodb.MongoClient
// const ObjectId = mongodb.ObjectId

const { MongoClient, ObjectId } = require("mongodb-legacy")

const connectionURL = 'mongodb+srv://Cluster95503:RlRlTFtPVU5t@cluster95503.owfrw0u.mongodb.net'
const databaseName = 'task-manager'
const id = new ObjectId()


MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log("unable to connect to db")
    }
    else {
        const db = client.db(databaseName)
        // db.collection('users').findOne({name:'Milira'},(error,user)=>{
        //     if(error){
        //         console.log('Unable to fetch')
        //     }
        //     else{
        //         console.log(user)
        //     }

        // })

        // db.collection('users').find({name:'Bharathi'}).toArray((error,user)=>{
        //     if(error){
        //         console.log("Unable to fetch")
        //     }else{
        //         console.log(user)
        //     }

        // })

        // db.collection('tasks').findOne({_id:new ObjectId("6629bdd4f737818e7bf01be7")},(error,task)=>{
        //     if(error){
        //         console.log("unable to fetch")
        //     }else{
        //         console.log(task)
        //     }

        // })
        // db.collection('tasks').find({ completed: false }).toArray((error, task) => {
        //     if (error) {
        //         console.log('unable to fetch')
        //     } else {
        //         console.log(task)
        //     }
        // })

        // db.collection('users').updateOne({ _id: new ObjectId("66296c6f49aabadb614ace41") }, {
        //     $set: { name: ('Arun') }
        // }).then((result) => {
        //     console.log("updted the user")
        // }).catch((error) => {
        //     console.log("got error")
        // })

        // db.collection('tasks').updateMany({ completed: false }, { $set: { completed: true } }).then((result) => {
        //     console.log("Updated the task")
        // }).catch((error) => {
        //     console.log(error)

        // })
        // db.collection('users').deleteMany({age:35}).then((user) => {
        //         console.log("Deleted the user")
        //      }).catch((error) => {
        //         console.log(error)

        //      })
        db.collection('tasks').deleteOne({ discription: "Pot plants" }).then((task) => {
            console.log("Deleted the task")
        }).catch((error) => { console.log(error) })

    }
})
