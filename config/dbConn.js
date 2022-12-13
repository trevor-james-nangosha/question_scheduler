require('dotenv').config()
const db = require('../models/index')

const databaseConnection = db.sequelize

const connectDB = () => {
    const connection = databaseConnection

    testDbConnection(connection)
}

const testDbConnection = async (connectionObject) => {
    try {
        await connectionObject.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

const closeDbConn = async (connectionObject) => {
    connectionObject.close()
}


module.exports = {
    connectDB,
    databaseConnection,
}

// TODO;
// how to ignore types for a particular function 

