const mongoose = require('mongoose');

exports.mongoConnect = () => {
    const mongoStringConnection = process.env.MONGO_URI || 'mongodb://localhost:27017/pocket_url';

    mongoose.connect(mongoStringConnection);

    mongoose.Promise = global.Promise;

    const dbConnection = mongoose.connection;

    dbConnection.on('error', console.error.bind(console, 'MongoDB Error on connection'));
    dbConnection.once('open', () => console.info('Database succesfully connected'));
}