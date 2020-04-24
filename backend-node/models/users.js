const mongoose = require('mongoose');
const Schema = mongoose.schema;

const userSchema = mongoose.Schema({
    usertype: { type: String, require: true },
    userid: { type: String, require: true, index: true, unique: true },
    
});

const Users = module.exports = mongoose.model("Users", userSchema);