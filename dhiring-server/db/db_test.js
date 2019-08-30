/**
 * Description.
 *
 * @author zhengchengc (chen.zhengcheng@mailbox.org)
 * @since 01:01 30 Aug 2019
 */

/**
 * Use mongoose to manipulate mongodb
 * 1. Connect to database
 *      1.1 Introduce mongoose
 *      1.2 Connect database
 *      1.3 acquire object
 *      1.4 binding connection to listen
 * 2. get model for specific cluster
 *      2.1 Schema, describe structure of document
 *      2.2 Define Model
 * 3. CRUD actions
 *      3.1 Using save() to add data
 *      3.2 Using find()/findOne() to find one or more data entries
 *      3.3 Using findByIdAndUpdate() to update specific data
 *      3.4 Using remove() to delete specific data
 */

const md5 = require('blueimp-md5');

// 1. Connect to database
// 1.1 Introduce mongoose
const mongoose = require('mongoose');

// 1.2 Connect database
mongoose.connect('mongodb://localhost:27017/dhiring_test', {useNewUrlParser: true})
    .catch(e => {
        console.error('Connection error', e.message);
    });

// 1.3 acquire object
const conn = mongoose.connection;

// 1.4 Binding connection to listen
conn.on('error', console.error.bind(console, 'connection error:'));
// 2. Get model for specific cluster
// 2.1 Schema
const userSchema = mongoose.Schema({
    username: {type: String, required: true},
    password: {type: String, required: true},
    type: {type: String, required: true}
});

// 2.2 Define Model
const UserModel = mongoose.model('user', userSchema);

// 3. CRUD
// 3.1 Using save() to add data
function testSave() {
    // user data object
    const user = {
        username: 'billg',
        password: md5('2345'),
        type: 'boss'
    };
    const userModel = new UserModel(user);
    // save to database
    userModel.save(function (err, user) {
        console.log('save', err, user);
    });
}
// testSave();

// 3.2 Using find()/findOne() to find one or more data entries
function testFind() {
    // find multiple
    UserModel.find(function (err, users) {
        console.log('find()', err, users);
    });

    // find one
    UserModel.findOne({_id: '5d685e6991f8b6b75c07b358'}, function (err, user) {
        console.log('findOne()', err, user);
    });
}

// 3.3 Using findByIdAndUpdate() to update specific data
function testUpdate() {
    UserModel.findByIdAndUpdate({_id: '5d685e6991f8b6b75c07b358'}, {username: 'yunm'}, function (err, user) {
        console.log('findByIdAndUpdate()', err, user);
    });
}

// 3.4 Using remove() to delete specific data
function testDelete() {
    UserModel.remove({_id: '5d685e6991f8b6b75c07b358'}, function(err, result){
        console.log('remove()', err, result);
    });
}