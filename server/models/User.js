const mongoose = require('mongoose')
const Schema = mongoose.Schema;

// Create new schema
const UserSchema = new Schema({
    name : {
        type : String,
        required : true,
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true
    },
    date_joined : {
        type : Date,
        default : Date.now()
    }
})

module.exports = User = mongoose.model('user', UserSchema);