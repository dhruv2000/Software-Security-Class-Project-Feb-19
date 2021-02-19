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

let checkUserPass = async(username, password) => {
    //TODO: CHECK USERNAME AND PASSWORD COMBO
    return true;
}

app.post('/login', (req, res) => {
    let username = req.body.username;
    let password = req.body.password;
    console.log("[ATTEMPTING LOGIN]");

    if(checkUserPass(username, password)){
        console.log("[LOGIN SUCCESS]");
        res.sendFile(path.join(__dirname + '/loggedin.html'));
    }else{
        console.log("[LOGIN FAILED]");
        res.sendFile(path.join(__dirname + '/error.html'));
    }
    
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})