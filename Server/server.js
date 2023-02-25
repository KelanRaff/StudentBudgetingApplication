const express = require('express');
const app = express();
const cors = require('cors');

require('dotenv').config({path: "./config.env"});
const port = process.env.PORT || 5000;

//use middleware
app.use(cors());
app.use(express.json());

//mongoDb Connection
const con = require('./db/connection.js');

//using routes
app.use(require('./routes/route'));

//List to http server
con.then(db =>{
    if(!db) return process.exit(1);

    app.listen(port, () =>{
        console.log('server is running on port: ' + port);
    })

    app.on('error', err => console.log('Failed to Connect with HTTP Server: ' + err))
    //error in mongoDb connection
}).catch(error => {
    console.log('Connection Failed....!')
})


