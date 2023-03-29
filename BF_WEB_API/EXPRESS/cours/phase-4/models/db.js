const config = {
    user: 'amine',
    password: 'root',
    server: 'localhost',
    database: 'express_database',
    options: {
        trustServerCertificate: true,
    }
}

const mssql = require('mssql')


const setDbConnection = async () => {
    db = await mssql.connect(config)
    return db
}

const testDbConnection = async () => {
    try {
        const db = await setDbConnection()
        db.close()
        console.log('Connection DB - OK')
    }
    catch (error) {
        console.log('Connection DB - Error')
        console.error(error.message)
    }
}

module.exports = {
    setDbConnection,
    testDbConnection
}