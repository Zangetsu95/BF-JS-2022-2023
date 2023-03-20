const config = {
    user: 'amine',
    password: 'root',
    server: 'localhost',
    database: 'BF_express',
    options: {
        trustServerCertificate: true,
    }
}

const mssql = require('mssql')


const getDbConnection = async () => {
    db = await mssql.connect(config)
    return db
}

const testDbConnection = async () => {
    try {
        const db = await getDbConnection()
        db.close()
        console.log('Connection DB - OK')
    }
    catch (error) {
        console.log('Connection DB - Error')
        console.error(error.message)
    }
}

module.exports = {
    getDbConnection,
    testDbConnection
}