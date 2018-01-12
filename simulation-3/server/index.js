require ('dotenv').config();
const express = require('express')
, bodyParser = require('body-parser')
, session = require('express-session')
, passport = require('passport')
, massive = require('massive')
, controller = require('./controller')

const app = express();
app.use(bodyParser.json());

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true

}))
//connect to database
massive(process.env.CONNECTION_STRING).then((db) => {
    app.set('db', db);
})

//endpoints
//get friends
app.get('/api/friend/list', controller.getfriends)
//add friend
app.post('/api/friend/add', controller.addFriend)
//remove friend
app.post('api/friend/remove', controller.removeFriend)

//connect to port
app.listen(process.env.SERVER_PORT, ()=> {
    console.log(`listening on port ${process.env.SERVER_PORT}`)
})