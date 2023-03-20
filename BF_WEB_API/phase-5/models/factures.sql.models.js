const { getDbConnection } = require("./db")
const mssql = require("mssql")

const facturesModelsSql = {

    getAll_sql: async () => {
        const db = await getDbConnection()
        const result = await db.query("select * from factures")
        db.close()
        return result.recordset
    },
    getOne_sql: async (id) => {
        let db
        try {
            db = await getDbConnection()

            const querySQL = "SELECT * from factures WHERE id = @Id "

            const request = new mssql.Request(db)
            request.input('Id', mssql.Int, id)

            const result = await request.query(querySQL)

            if (result.recordset.length !== 1) {
                return null
            }
            return result.recordset[0]
        }
        finally {
            db?.close()
        }
    },
    create_sql: async (newFact) => {
        let db
        try {
            db = await getDbConnection()
            //id,credit,active,limitDate(yy-mm-dd)
            const querySQL = 'INSERT INTO employees(credit,active,limitDate)'
                + 'OUTPUT inserted.id'
                + 'VALUES (@credit,@active,@limitDate)'

            const request = new mssql.Request(db)
            request.input('credit', mssql.NVarChar, newFact.credit)
            request.input('active', mssql.Bit, newFact.active)
            request.input('limitDate', mssql.Date, newFact.limitDate)

            const result = await request.query(querySQL)
            return result.recordset[0]
        }
        finally {
            db?.close
        }
    },

    update_sql: async (factToUpdate) => {
        let db
        try {
            db = await getDbConnection()
            //id,credit,active,limitDate(yy-mm-dd)
            const querySQL = 'UPDATE factures'
                + 'SET credit=@credit,active = @active,limitDate = @limitDate'
                + 'OUTPUT inserted.id'
                + 'WHERE id = @id'

            const request = new mssql.Request(db)
            request.input('credit', mssql.NVarChar, factToUpdate.credit)
            request.input('active', mssql.Bit, factToUpdate.active)
            request.input('limitDate', mssql.Date, factToUpdate.limitDate)
            request.input('id', mssql.Int, factToUpdate.id)

            const result = await request.query(querySQL)
            return result.recordset[0]
        }
        finally {
            db?.close
        }
    },

    //TODO facture a supprimer
    // delete_sql: async (factTopDelete) => {
    //     let db
    //     try {
    //         db = await getDbConnection()
    //         //id,credit,active,limitDate(yy-mm-dd)
    //         const querySQL = 'UPDATE factures'
    //         + 'SET '
    //     }
    //     finally {
    //         db?.close()
    //     }
    // }
}

module.exports = facturesModelsSql