const mongoose = require('mongoose');
// import dotenv
const dotenv = require('dotenv');

dotenv.config();

const url = process.env.MONGO_URI;

mongoose.connect(url, {useNewUrlParser: true})
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