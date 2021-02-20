const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
//const userSchema = require('./schema.js')
const session = require('express-session');
const app = express();
const port = 3000;

mongoose.connect("mongodb://localhost:5555", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);

var userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
      },
      password: {
        type: String,
        required: true,
      }
})

var user = mongoose.model('user', userSchema)

app.use(express.urlencoded({extended: true}));

app.use(session({
    secret: 'swsec',
    resave: false,
    saveUninitialized: true
}))

app.get('/', (req, res) => {
    if(req.session.username){
        res.redirect("/hello");
    }else{
        res.sendFile(path.join(__dirname + '/index.html'));
    }

})

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname + '/register.html'));
})

app.post('/adduser', (req, res) => {
    //TODO: Add User
    user.create({
        username: req.body.username,
        password: req.body.password
      });
    res.redirect("/");
})

app.get('/getusername', (req, res) => {
    res.send(req.session.username);
})

app.get('/hello', (req, res) => {
    if(!req.session.username){
        res.redirect("/error");
    }
    res.sendFile(path.join(__dirname + '/hello.html'));
})

app.get('/error', (req, res) => {
    res.sendFile(path.join(__dirname + '/error.html'));
})

let checkUserPass = async(username, password) => {
    //TODO: CHECK USERNAME AND PASSWORD COMBO
    let found = await user.findOne({username: username});
    console.log("Found obj", found)
    if(found){
        console.log("Pass", found.password)
        console.log(found.password == password)
        return found.password == password;
    }else{
        return false;
    }
}

app.post('/login', async(req, res) => {
    let username = req.body.username;
    let password = req.body.password;
    console.log("[ATTEMPTING LOGIN]");

    if(await checkUserPass(username, password)){
        console.log("[LOGIN SUCCESS]");
        req.session.username = username;
        req.session.isLoggedIn = true;
        console.log(req.session.username)
        res.redirect("/hello")
    }else{
        console.log("[LOGIN FAILED]");
        res.sendFile(path.join(__dirname + '/error.html'));
    }
    
})

app.get('/logout', (req, res) => {
    req.session.destroy();
    res.sendFile(path.join(__dirname + '/index.html'));
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})