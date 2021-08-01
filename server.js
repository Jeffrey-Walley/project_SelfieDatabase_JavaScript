// NeDB JavaScript Database: https://github.com/louischatriot/nedb/
// Module 02 ep09 == 2nd project node server

// creating the node server for the project -- using Express server
// install with npm init, then npm install express
const express = require('express'); // requirements for the project
const Datastore = require('nedb');

// set up route on the server <MOD 02 ep11>
const app = express();
app.listen(3000, () => console.log('listening @ Port: 3000'));
app.use(express.static('public')); // we are setting up the server to serve web pages
app.use(express.json({ limit: '1mb' }));


// MODULE 02 ep12 - using NeDB (subset of MongoDB)
const database = new Datastore('database.db'); // added database (MODULE 02 ep12)
database.loadDatabase(); // creates database.db file if there is none

// GET method for routes // MOD 02 ep13
app.get('/api', (request, response) => {
    database.find({}, (err, data) => {
        if (err) {
            response.end();
            return;
        };
        response.json(data);
    });
});


// POST Method route -- we need post for this project
app.post('/api', (request, response) => {
    const data = request.body;
    const timestamp = Date.now();
    data.timestamp = timestamp;
    database.insert(data);
    response.json(data);
});

// when using servers you can check what action is happening on a port with the following:
//  $ lsof -i tcp:3000     // this would check port 3000
// you can then kill a process running on the port with:
//   $ kill -9 ####         // where the #### is the PID# listed for the process