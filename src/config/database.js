const mongoose = require('mongoose')
// const url = 'mongodb://localhost:27017/todo'
const url = 'mongodb://mongo_todoappdb:27017'
const source = 'todoappdb'
const usr = 'todoadmin'
const pass = 'todoadmintestdb'
const db = 'todoappdb'


mongoose.connect(url, {
    authSource:source,
    user:usr,
    pass:pass,
    dbName:db ,
    useNewUrlParser: true,
    useUnifiedTopology: true
    
})
    .then(() => console.log('MongoDB Connected...'))
    .catch((err) => console.log(err))    

    module.exports = mongoose;