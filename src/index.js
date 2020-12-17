const express = require('express');
const cors = require('cors');
const server = express();

var figlet = require('figlet');
server.use(cors());
server.use(express.json());

const TaskRoutes = require('./routes/TaskRouts');



server.use('/task',TaskRoutes);

server.listen(3333, ()=>{
    
    figlet('API ONLINE',{font:'kban'}, function(err, data) {
        if (err) {
            console.log('Something went wrong...');
            console.dir(err);
            return;
        }
        console.log(data)
    });
})