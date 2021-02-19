// //Load HTTP module
// const http = require("http");
// const hostname = '127.0.0.1';
// const port = 3000;

// //Create HTTP server and listen on port 3000 for requests
// const server = http.createServer((req, res) => {

//   //Set the response HTTP header with HTTP status and Content type
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World\n');
// });

// //listen for request on port 3000, and as a callback function have the port listened on logged
// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
})

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname + '/register.html'));
})

app.post('/adduser', (req, res) => {
    res.sendFile(path.join(__dirname + '/register.html'));
})

app.get('/loggedin', (req, res) => {
    res.sendFile(path.join(__dirname + '/loggedin.html'));
})

app.get('/error', (req, res) => {
    res.sendFile(path.join(__dirname + '/error.html'));
})

app.post('/login', (req, res) => {
    console.log(req.body.username);
    console.log(req.body.password);
    //console.log(req.body);
    res.sendFile(path.join(__dirname + '/index.html'));
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})