const mongoose = require('mongoose');
const config = require('../config/env-conf');



const url = config.database.url

mongoose.connect(url, {
    useNewUrlParser: true
});
mongoose.set('useFindAndModify', false);

let db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection to DB error'));

db.once('open', function () {
    console.log('Database connected successfull !!! ');
    module.exports = db;
});