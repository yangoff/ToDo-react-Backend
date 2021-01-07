const express = require('express');
const Port = 3333;

const cors = require('cors');
const server = express();

var figlet = require('figlet');
server.use(cors());
server.use(express.json());

const TaskRoutes = require('./routes/TaskRouts');


server.use('/task',TaskRoutes);

// server.listen(3333, ()=>{
server.listen(3000, ()=>{
    console.log(`Listen in ${Port}`);
    // figlet('API ONLINE',{font:'kban'}, function(err, data) {
    //     if (err) {
    //         console.log('Something went wrong...');
    //         console.dir(err);
    //         return;
    //     }
    //     console.log(data)
    // });
})