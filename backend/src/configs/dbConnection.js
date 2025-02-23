'use strict';

const { connect } = require('mongoose');

module.exports = async () => {
    if (!process.env.MONGODB) {
        throw new Error('MONGODB is not defined in the .env file');
    }

    try {
        await connect(process.env.MONGODB, {
            
            serverSelectionTimeoutMS: 30000, // Bağlantıyı 30 saniye boyunca beklet
        });
        console.log('-- Connected to the DB --');
    } catch (err) {
        console.error('* Failed to connect DB *', err);
        process.exit(1); // Bağlantı başarısızsa uygulamayı durdur
    }
};
