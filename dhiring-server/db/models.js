const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/dhiring', {useNewUrlParser: true})
    .catch(e => {
        console.error('Connection error', e.message);
    });

const conn = mongoose.connection;

conn.on('error', console.error.bind(console, 'connection error:'));

const userSchema = mongoose.Schema({
    username: {type: String, required: true},
    password: {type: String, required: true},
    type: {type: String, required: true},
    title: {type: String},
    info: {type: String},
    company: {type: String},
    salary: {type: String}
});

const UserModel = mongoose.model('user', userSchema);

exports.UserModel = UserModel;