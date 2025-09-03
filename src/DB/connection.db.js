import { Sequelize } from 'sequelize'

export const sequelize = new Sequelize('assigment6', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
});

export async function testConnection()  {
    try {
        await sequelize.authenticate()
        console.log("Connection started Successfuly")
    } catch (error) {
        console.log("Connection Failed" , error)
    }
}

export async function syncDB_connection() {
    try {
        await sequelize.sync({alter : false , force : false})
        console.log(`Sunc success`)
    } catch (error) {
        console.log("error in sync DB", error)
    }
}
