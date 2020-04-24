const express = require('express');
const router = express.Router();
const User = require('../models/users');

const config = require('../config/database');

router.get('/', function (req, res) {
    User.find((err,docs)=>{
        if(!err){ res.send(docs);}
        else ( console.log('Error'+JSON.stringify(err,undefined,2)));
    });
});

 




module.exports = router;  