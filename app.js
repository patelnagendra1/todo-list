var express = require('express')

var todoController = require('./controller/todoController');


var app = express()


// set up templet engine
app.set('view engine','ejs');


// static files
app.use(express.static('./public'))


// fire Controller
todoController(app)

//listen to port
app.listen(3000)
console.log('You are listening to port 3000');