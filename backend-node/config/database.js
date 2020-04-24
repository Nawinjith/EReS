const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/EReS',(err)=> {
    if(!err)
        console.log('Database connection successful');
    else
        console.log('Database connection error :' + JSON.stringify(err,undefined,2));
});

module.exports = mongoose;