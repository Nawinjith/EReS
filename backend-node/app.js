const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const config = require('./config/database');

const users = require('./routes/users');





app.use(bodyParser.json());


app.use('/',users);


app.listen(3000, function() {
    console.log("listening to port 3000");
});


module.exports = app;  