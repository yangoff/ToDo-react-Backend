const mongoose = require('mongoose')
// const url = 'mongodb://localhost:27017/todo'
const url = 'mongo_todoappdb:27017/todo'
const usr = 'todoadmin'
const pass = 'todoadmintestdb'
const source = 'admin'

mongoose.connect(url, { useNewUrlParser: true,authSource:source,user:usr,pass:pass});


module.exports = mongoose;